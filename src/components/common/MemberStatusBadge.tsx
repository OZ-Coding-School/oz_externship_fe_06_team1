import type { BadgeProps } from '@/components/common/Badge'
import { Badge } from '@/components/common'

export type MemberStatus = 'Activated' | 'Disabled' | 'Withdraw'

const STATUS_TO_VARIANT = {
  Activated: 'memberActivated',
  Disabled: 'memberDisabled',
  Withdraw: 'memberWithdraw',
} as const

type MemberStatusBadgeProps = {
  status: MemberStatus
  className?: BadgeProps['className']
}

export function MemberStatusBadge({
  status,
  className,
}: MemberStatusBadgeProps) {
  return (
    <Badge
      variant={STATUS_TO_VARIANT[status]}
      size="status"
      className={className}
    >
      {status}
    </Badge>
  )
}
