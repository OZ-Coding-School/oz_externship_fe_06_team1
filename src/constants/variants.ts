import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md font-bold transition-colors remove-focus-outline',
  {
    variants: {
      variant: {
        default: 'bg-grey-100 text-grey-600',
        primary: 'bg-primary-50 text-primary-600',
        success: 'bg-success-100 text-success-400',
        danger: 'bg-error-100 text-error-400',
      },
      size: {
        sm: 'text-[10px] px-1.5 py-0.5 h-5',
        md: 'text-sm px-2.5 py-1 h-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export const modalVariants = cva(
  'relative flex flex-col bg-white w-full overflow-hidden transition-all duration-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)]',
  {
    variants: {
      size: {
        sm: 'max-w-[400px] rounded-2xl',
        md: 'max-w-[600px] rounded-xl',
        lg: 'max-w-[900px] rounded-xl',
        full: 'max-w-[95vw] h-[90vh] rounded-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
