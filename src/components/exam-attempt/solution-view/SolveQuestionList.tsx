import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { cn } from '@/lib/cn'
import type { Question } from '@/types/question'

type SolveQuestionListProps = {
  questions: Question[]
  pickedAnswerByQuestionId?: Record<number, string>
}

export function SolveQuestionList({
  questions,
  pickedAnswerByQuestionId,
}: SolveQuestionListProps) {
  const [index, setIndex] = useState(0)

  const total = questions.length
  const current = useMemo(() => questions[index], [questions, index])

  if (total === 0) {
    return (
      <div className="text-grey-500 flex h-full w-full items-center justify-center">
        문제가 없습니다.
      </div>
    )
  }

  const picked = pickedAnswerByQuestionId?.[current.id]
  const isFirst = index === 0
  const isLast = index === total - 1

  const goPrev = () => setIndex((v) => Math.max(0, v - 1))
  const goNext = () => setIndex((v) => Math.min(total - 1, v + 1))

  return (
    <div className="flex w-full items-center justify-center gap-10">
      <Button
        size="icon"
        onClick={goPrev}
        disabled={isFirst}
        className="h-12 w-12 rounded-full border-transparent bg-transparent disabled:opacity-30"
      >
        <ChevronLeft className="text-grey-600 h-10 w-10" />
      </Button>

      <div className="flex flex-col">
        <div className="border-grey-200 flex h-[600px] w-[1060px] flex-col rounded-xl border bg-white p-7">
          <div className="mb-4 flex items-center gap-3">
            <div className="text-grey-800 text-base font-semibold">
              {index + 1}. {current.question}
            </div>

            <span className="bg-grey-100 text-grey-700 rounded px-2 py-1 text-xs font-medium">
              {current.point}점
            </span>

            <span className="bg-grey-100 text-grey-700 rounded px-2 py-1 text-xs font-medium">
              단일선택
            </span>
          </div>

          <div className="text-grey-800 mb-6 text-sm">
            <span className="font-medium">정답 : </span>
            <span className="font-semibold text-[#6D28D9]">
              {current.correct_answer}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {current.options.map((opt) => {
              const isCorrect = opt === current.correct_answer
              const isPicked = picked ? opt === picked : false
              const isWrongPicked = Boolean(picked) && isPicked && !isCorrect

              return (
                <div key={opt} className="flex items-center gap-3 text-sm">
                  <span
                    className={cn(
                      'flex h-4 w-4 items-center justify-center rounded-full border',
                      isCorrect && 'border-success-600',
                      isWrongPicked && 'border-danger-600',
                      !isCorrect && !isWrongPicked && 'border-grey-300'
                    )}
                  >
                    {(isCorrect || isWrongPicked) && (
                      <span
                        className={cn(
                          'h-2 w-2 rounded-full',
                          isCorrect && 'bg-success-600',
                          isWrongPicked && 'bg-danger-600'
                        )}
                      />
                    )}
                  </span>

                  <span
                    className={cn(
                      'text-grey-800',
                      isCorrect && 'text-success-600 font-semibold',
                      isWrongPicked && 'text-danger-600 font-semibold'
                    )}
                  >
                    {opt}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="bg-grey-50 text-grey-700 mt-10 rounded-md px-4 py-3 text-sm">
            <div className="mb-1 font-semibold">해설</div>
            <div>{current.explanation}</div>
          </div>
        </div>

        <div className="text-grey-500 mt-3 text-xs">
          {index + 1}/{total}
        </div>
      </div>

      <Button
        size="icon"
        onClick={goNext}
        disabled={isLast}
        className="h-12 w-12 rounded-full border-transparent bg-transparent disabled:opacity-30"
      >
        <ChevronRight className="text-grey-600 h-10 w-10" />
      </Button>
    </div>
  )
}
