import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from '@/components/layout/AdminLayout'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ExamDashboardPage } from './pages/ExamDashboardPage'
import ExamHistoryPage from '@/pages/ExamHistoryPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Navigate to="/exam/history" replace />} />
        <Route path="/dashboard" element={<ExamDashboardPage />} />
        <Route path="/exam/history" element={<ExamHistoryPage />} />
        {/* <Route path="deployments" element={<DeploymentPage />} /> */}
      </Route>

      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  )
}
