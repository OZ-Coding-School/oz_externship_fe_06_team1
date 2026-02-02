import { create } from 'zustand'
import type { QuestionType, Question } from '@/types/question'

//  Constants
const DEFAULT_PROBLEM_POINT = 5
const DEFAULT_BLANK_COUNT = 0

//
interface ProblemFormState {
  // 모드 상태
  mode: 'create' | 'edit'
  // 폼 데이터 상태
  type: QuestionType
  question: string
  prompt: string
  options: string[]
  blankCount: number
  correctAnswers: any
  point: number
  explanation: string

  // 액션
  // 상태 변경 함수들 (Setter)
  setMode: (mode: 'create' | 'edit') => void
  setType: (type: QuestionType) => void
  setQuestion: (question: string) => void
  setPrompt: (prompt: string) => void
  setOptions: (options: string[]) => void
  setBlankCount: (blankCount: number) => void
  setCorrectAnswers: (correctAnswers: any) => void
  setPoint: (point: number) => void
  setExplanation: (explanation: string) => void

  // 상태 초기화 함수
  reset: () => void
  initializeForEdit: (data: Question) => void
}

const initialState = {
  mode: 'create' as const,
  type: 'multiple_choice' as QuestionType,
  question: '',
  prompt: '',
  options: ['', ''],
  blankCount: DEFAULT_BLANK_COUNT,
  correctAnswers: '',
  point: DEFAULT_PROBLEM_POINT,
  explanation: '',
}

//  Store
export const useProblemFormStore = create<ProblemFormState>((set) => ({
  ...initialState,

  // 문제 입력에서 사용되는 Setter 함수들
  setMode: (mode) => set({ mode }),
  setType: (type) =>
    set({
      type,
      options: ['', ''],
      correctAnswers: '',
      blankCount: DEFAULT_BLANK_COUNT,
    }),
  setQuestion: (question) => set({ question }),
  setPrompt: (prompt) => set({ prompt }),
  setOptions: (options) => set({ options }),
  setBlankCount: (blankCount) => set({ blankCount }),
  setCorrectAnswers: (correctAnswers) => set({ correctAnswers }),
  setPoint: (point) => set({ point }),
  setExplanation: (explanation) => set({ explanation }),

  // create 모드 - 모든 값 초기화할때 reset 함수 사용
  reset: () => set(initialState),

  // edit 모드 - 기존 문제 데이터를 폼 초기값에 적용시키기
  initializeForEdit: (data: Question) => {
    const {
      type,
      question,
      prompt,
      blank_count,
      point,
      explanation,
      options,
      correct_answer,
    } = data

    set({
      mode: 'edit',
      type: type,
      question: question ?? '',
      prompt: prompt ?? '',
      blankCount: blank_count ?? DEFAULT_BLANK_COUNT,
      point: point || DEFAULT_PROBLEM_POINT,
      explanation: explanation ?? '',
    })

    switch (type) {
      case 'multiple_choice':
        // 다지선다형
        // 객관식: "0,2" -> [0, 2]
        set({
          options: options ?? ['', ''],
          correctAnswers:
            typeof correct_answer === 'string'
              ? correct_answer.split(',')
              : Array.isArray(correct_answer)
                ? correct_answer
                : [0],
        })
        break

      case 'ox':
        // ox 형
        // OX: "O" -> [0], "X" -> [1] 로 판단
        set({
          correctAnswers:
            correct_answer === 'O' ||
            (Array.isArray(correct_answer) && correct_answer[0] === 'O')
              ? 'O'
              : 'X',
        })
        break

      case 'ordering':
        // 순서 정렬
        // 순서정렬: "2,0,1" -> [2, 0, 1]
        set({
          options: options ?? ['', ''],
          correctAnswers:
            typeof correct_answer === 'string'
              ? correct_answer.split(',').map(Number)
              : Array.isArray(correct_answer)
                ? correct_answer.map(Number)
                : [],
        })
        break

      case 'short_answer':
        // 주관식 단답형
        // 단답형: 그대로 사용
        set({
          correctAnswers: (correct_answer as string) ?? '',
        })
        break

      case 'fill_blank':
        // 빈칸
        // 빈칸: 배열 그대로 사용
        set({
          correctAnswers: correct_answer,
          blankCount: Array.isArray(correct_answer)
            ? correct_answer.length
            : [String(correct_answer)].length,
        })
        break
    }
  },
}))
