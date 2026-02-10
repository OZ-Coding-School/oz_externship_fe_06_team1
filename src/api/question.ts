import { apiClient } from './instance'
import type { Question } from '@/types/question'
import { API_PATHS } from '@/constants/api'

export const questionApi = {
  // 문제 추가
  createQuestion: async (examId: number, data: Omit<Question, 'id'>) => {
    const response = await apiClient.post(
      API_PATHS.QUESTION.CREATE(examId),
      data
    )
    return response.data
  },

  // 문제 수정
  updateQuestion: async (questionId: number, data: Omit<Question, 'id'>) => {
    const response = await apiClient.put(
      API_PATHS.QUESTION.UPDATE(questionId),
      data
    )
    return response.data
  },

  // 문제 삭제
  deleteQuestion: async (questionId: number) => {
    const response = await apiClient.delete(
      API_PATHS.QUESTION.DELETE(questionId)
    )
    return response.data
  },
}
