import type { MemberStatus } from '@/components/common'

export type MemberRole =
  | 'Admin'
  | 'Staff (TA)'
  | 'Student'
  | 'General'
  | 'Staff (LC)'
  | 'Staff (OM)'

export type MemberGender = '남' | '여' | '미설정'

export type Member = {
  id: number
  nickname: string
  name: string
  email: string
  phone?: string
  course?: string
  cohort?: string
  birthDate: string
  role: MemberRole
  status: MemberStatus
  joinedAt: string
}

export type MemberDetail = Member & {
  gender?: MemberGender
  phone?: string
  profileImageUrl?: string
  ongoingCourses?: string[]
  cohorts?: string[]
}

export type StudentRegistrationStatus =
  | 'Accepted'
  | 'Rejected'
  | 'Submitted'
  | 'Canceled'

export type StudentRegistrationItemType = {
  id: number
  course_name: string
  cohort: number
  user_name: string
  email: string
  birth_date: string
  status: StudentRegistrationStatus
  requested_at: string
}

export type StudentRegistrationApiStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'CANCELED'

export type StudentRegistrationApiQueryStatus =
  | 'accepted'
  | 'rejected'
  | 'pending'
  | 'canceled'

export type StudentRegistrationListQuery = {
  page?: number
  page_size?: number
  search?: string
  status?: StudentRegistrationApiQueryStatus
}

export type StudentRegistrationListResult = {
  id: number
  user: {
    id: number
    email: string
    name: string
    birthday: string
    gender: 'M' | 'F'
  }
  cohort: {
    id: number
    number: number
  }
  course: {
    id: number
    name: string
    tag: string
  }
  status: StudentRegistrationApiStatus
  created_at: string
}

export type StudentRegistrationListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: StudentRegistrationListResult[]
}

export type StudentRegistrationActionRequest = {
  enrollments: number[]
}

export type StudentRegistrationActionResponse = {
  detail: string
}

export type MemberWithdrawalItemType = {
  id: number
  email: string
  user_name: string
  birth_date: string
  role: 'General' | 'Student' | 'Staff' | 'Admin'
  reason: string
  withdrawn_at: string
}
