import { StudentScoreBarChart } from '@/components/graph/StudentScoreBarChart'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import {
  MOCK_CAMP_OPTIONS,
  MOCK_STUDENTS_BY_TERM,
  MOCK_TERM_OPTIONS,
} from '@/mocks/data/graph-data/ExamGraph'
import { useEffect, useState } from 'react'

export function ExamDashboardPage() {
  const [filters, setFilters] = useState({
    camp: 'fe',
    term: '8',
    student: 'ancoding',
  })
  const [chartData, setChartData] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch(
        `/api/charts/student-scores?studentId=${filters.student}`
      )
      const data = await res.json()
      setChartData(data)
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다.', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleTermChange = (term: string) => {
    const studentsInTerm = MOCK_STUDENTS_BY_TERM[term] || []
    const firstStudent = studentsInTerm[0]?.value || ''

    setFilters((prev) => ({
      ...prev,
      term: term,
      student: firstStudent,
    }))
  }

  return (
    <DashboardLayout
      titleOptions={[{ label: '수강생 과목 별 점수 그래프', value: 'score' }]}
      currentTitleValue="score"
      description="수강생 과목 별 점수 막대 그래프 (그래프에는 과목 별 점수 가 조회됩니다.)"
      chartTitle="수강생 과목 별 점수 그래프"
      onTitleChange={() => {}}
      onSearch={fetchData}
      filters={[
        {
          id: 'camp',
          options: MOCK_CAMP_OPTIONS,
          value: filters.camp,
          onChange: (v) => setFilters((prev) => ({ ...prev, camp: v })),
          className: 'w-72',
        },
        {
          id: 'term',
          options: MOCK_TERM_OPTIONS,
          value: filters.term,
          onChange: handleTermChange,
          className: 'w-40',
        },
        {
          id: 'student',
          options: MOCK_STUDENTS_BY_TERM[filters.term] || [],
          value: filters.student,
          onChange: (v) => setFilters((prev) => ({ ...prev, student: v })),
          className: 'w-32',
        },
      ]}
    >
      {chartData.length > 0 ? (
        <StudentScoreBarChart data={chartData} />
      ) : (
        <div className="text-grey-400 flex h-full items-center justify-center">
          데이터가 없습니다. 조회를 눌러주세요.
        </div>
      )}
    </DashboardLayout>
  )
}
