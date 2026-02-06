import { MemberManagementLayout } from '@/components/layout'
import MemberList from '@/components/table/MemberList'
import { MOCK_MEMBER_LIST_RESPONSE } from '@/mocks/data/table-data/MemberList'

export function StudentManagementPage() {
  const studentList = MOCK_MEMBER_LIST_RESPONSE.members.filter(
    (member) => member.role === 'Student'
  )

  return (
    <MemberManagementLayout title="수강생 관리">
      <MemberList data={studentList} />
    </MemberManagementLayout>
  )
}
