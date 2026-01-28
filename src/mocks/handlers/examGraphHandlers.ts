import { http, HttpResponse } from 'msw'
import {
  MOCK_STUDENT_SCORES_DATA,
  MOCK_TERM_AVG_DATA,
  MOCK_STUDENTS_BY_TERM,
} from '@/mocks/data/graph-data/ExamGraph'

export const examGraphHandlers = [
  http.get('/api/charts/student-scores', ({ request }) => {
    const url = new URL(request.url)
    const studentId = url.searchParams.get('studentId') || 'ancoding'

    const data = MOCK_STUDENT_SCORES_DATA[studentId] || []
    return HttpResponse.json(data)
  }),

  http.get('/api/charts/term-avg', () => {
    return HttpResponse.json(MOCK_TERM_AVG_DATA)
  }),

  http.get('/api/metadata/students', ({ request }) => {
    const url = new URL(request.url)
    const term = url.searchParams.get('term') || '8'

    const students = MOCK_STUDENTS_BY_TERM[term] || []
    return HttpResponse.json(students)
  }),
]
