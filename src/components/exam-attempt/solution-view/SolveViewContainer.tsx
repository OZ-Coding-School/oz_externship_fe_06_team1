import type { QuestionListResponse } from '@/types/question'

type SolveViewContainerProps = {
  data: QuestionListResponse
  pickedAnswerByQuestionId?: Record<number, string>
}

export function SolveViewContainer({ data }: SolveViewContainerProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-primary-600 flex h-8 w-8 items-center justify-center rounded text-sm font-bold text-white">
          TS
        </div>

        <div className="flex items-center gap-2">
          <div className="text-grey-800 text-base font-semibold">
            {data.title}
          </div>
          <div className="text-grey-500 text-xs">
            과목 : {data.subject.title} 문제 수 : {data.questions.length}
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center"></div>
    </div>
  )
}
