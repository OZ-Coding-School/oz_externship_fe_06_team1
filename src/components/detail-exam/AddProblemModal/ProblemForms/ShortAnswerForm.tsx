import { FormSectionLayout } from './CommonSections'

export interface ShortAnswerFormProps {
  correctAnswer: string
  setCorrectAnswer: (answer: string) => void
}

export const ShortAnswerForm = ({
  correctAnswer,
  setCorrectAnswer,
}: ShortAnswerFormProps) => {
  return (
    <FormSectionLayout
      title="답안 입력"
      additionalDescription="필수 입력값입니다."
      noContainer
    >
      <textarea
        className="border-grey-300 text-grey-600 placeholder:text-grey-600 focus:border-primary-500 h-[70px] w-full resize-none border p-2 text-sm font-normal transition-colors outline-none"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        placeholder="답안을 입력해주세요"
      />
    </FormSectionLayout>
  )
}
