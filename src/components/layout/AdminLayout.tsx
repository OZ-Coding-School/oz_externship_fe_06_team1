import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1">
          <div className="p-6" />
        </main>
      </div>
    </div>
  )
}
