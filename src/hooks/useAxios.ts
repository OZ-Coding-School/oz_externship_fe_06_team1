import { useState, useCallback } from 'react'
import { api } from '@/api'
import type { AxiosRequestConfig } from 'axios'

export function useAxios() {
  const [isLoading, setIsLoading] = useState(false)

  const sendRequest = useCallback(async <T>(config: AxiosRequestConfig) => {
    setIsLoading(true)
    try {
      const response = await api.request<T>(config)
      return response.data
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { sendRequest, isLoading }
}
