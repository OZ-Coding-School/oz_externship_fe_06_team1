import axios from 'axios'
import { getCookie, removeCookie } from '@/utils'
import { useAlertStore } from '@/store/useAlertStore'

// 필요시 커스텀 타이틀 전달
declare module 'axios' {
  export interface AxiosRequestConfig {
    errorTitle?: string
  }
}

export const api = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    // 쿠키에서 토큰을 가져오기
    const token = getCookie('accessToken')
    // 토큰이 있으면 요청 헤더에 실어주기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const errorData = error.response?.data
    const errorDetail = errorData?.error_detail
    const customTitle = error.config?.errorTitle // 목적에 따라 커스텀 타이틀 전달

    let message = ''

    if (errorDetail && typeof errorDetail === 'object') {
      // { field: [msg1, msg2] } 형태의 에러 상세 처리
      message = Object.entries(errorDetail)
        .map(([field, messages]) => {
          const msg = Array.isArray(messages) ? messages.join(', ') : messages
          return `${field}: ${msg}`
        })
        .join('\n')
    } else {
      // error_detail이 없을 때
      message =
        (typeof errorDetail === 'string' ? errorDetail : null) ||
        errorData?.message ||
        error.message ||
        '오류가 발생했습니다.'
    }

    // 상태 코드별 기본 타이틀 및 타입 설정
    let title = customTitle || '오류 발생'
    let type: 'warning' | 'danger' = 'warning'

    if (status >= 500) {
      title = customTitle || '서버 내부 오류'
      type = 'danger'
    } else if (status === 401) {
      title = '로그인 세션이 만료되었습니다.'
      removeCookie('accessToken')
      window.location.href = '/login'
      return Promise.reject(error) // 리다이렉트 시 알림 생략 가능
    } else if (status === 403) {
      title = customTitle || '권한이 없습니다.'
    } else if (status === 400) {
      title = customTitle || '유효성 검사 실패'
    } else if (status === 404) {
      title = customTitle || '정보를 찾을 수 없습니다.'
    }

    // 전역 알림 모달 띄우기
    useAlertStore.getState().showAlert({
      type: type,
      title: title,
      description: message,
    })

    return Promise.reject(error)
  }
)
