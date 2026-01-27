export const MOCK_CAMP_OPTIONS = [
  { value: 'fe', label: '웹 개발 초격차 프론트엔드 부트캠프' },
]

export const MOCK_TERM_OPTIONS = [
  { value: '8', label: '8기' },
  { value: '13', label: '13기' },
  { value: '15', label: '15기' },
]

export const MOCK_SUBJECT_OPTIONS = [
  { value: 'html', label: 'HTML/CSS' },
  { value: 'js', label: 'JavaScript' },
  { value: 'gh', label: 'Git&GitHub' },
  { value: 'react', label: 'React' },
  { value: 'node', label: 'Node.js' },
  { value: 'db', label: 'Database' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'aws', label: 'AWS' },
  { value: 'rn', label: 'React-Native' },
]

export const MOCK_STUDENTS_BY_TERM: Record<
  string,
  { value: string; label: string }[]
> = {
  '8': [{ value: 'ancoding', label: '안코딩' }],
  '13': [{ value: 'younjs', label: '윤자스' }],
  '15': [
    { value: 'ryuact', label: '류액트' },
    { value: 'kwonnode', label: '권노드' },
  ],
}

export const MOCK_STUDENT_SCORES_DATA: Record<
  string,
  { subject: string; score: number }[]
> = {
  ancoding: [
    { subject: 'HTML/CSS', score: 85 },
    { subject: 'JavaScript', score: 65 },
    { subject: 'Git&Github', score: 78 },
    { subject: 'React', score: 28 },
    { subject: 'Node.js', score: 28 },
    { subject: 'Database', score: 48 },
    { subject: 'TypeScript', score: 20 },
    { subject: 'AWS', score: 40 },
    { subject: 'React-Native', score: 48 },
  ],
  younjs: [
    { subject: 'HTML/CSS', score: 70 },
    { subject: 'JavaScript', score: 95 },
    { subject: 'Git&Github', score: 88 },
    { subject: 'React', score: 90 },
    { subject: 'Node.js', score: 40 },
    { subject: 'Database', score: 50 },
    { subject: 'TypeScript', score: 85 },
    { subject: 'AWS', score: 60 },
    { subject: 'React-Native', score: 15 },
  ],
  ryuact: [
    { subject: 'HTML/CSS', score: 60 },
    { subject: 'JavaScript', score: 80 },
    { subject: 'Git&Github', score: 70 },
    { subject: 'React', score: 100 },
    { subject: 'Node.js', score: 40 },
    { subject: 'Database', score: 40 },
    { subject: 'TypeScript', score: 90 },
    { subject: 'AWS', score: 50 },
    { subject: 'React-Native', score: 95 },
  ],
  kwonnode: [
    { subject: 'HTML/CSS', score: 50 },
    { subject: 'JavaScript', score: 75 },
    { subject: 'Git&Github', score: 60 },
    { subject: 'React', score: 40 },
    { subject: 'Node.js', score: 95 },
    { subject: 'Database', score: 90 },
    { subject: 'TypeScript', score: 60 },
    { subject: 'AWS', score: 85 },
    { subject: 'React-Native', score: 30 },
  ],
}

export const MOCK_TERM_AVG_DATA = [
  { name: '1기', score: 40 },
  { name: '2기', score: 12 },
  { name: '3기', score: 20 },
  { name: '4기', score: 70 },
  { name: '5기', score: 8 },
  { name: '6기', score: 32 },
  { name: '7기', score: 12 },
  { name: '8기', score: 20 },
  { name: '9기', score: 45 },
  { name: '10기', score: 60 },
  { name: '11기', score: 28 },
  { name: '12기', score: 10 },
  { name: '13기', score: 82 },
  { name: '14기', score: 42 },
  { name: '15기', score: 68 },
]
