import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminContainer from "./AdminContainer";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 min-w-0 overflow-x-auto overflow-y-auto bg-grey-100">
          <AdminContainer title="회원관리" />
        </main>
      </div>
    </div>
  )
}

