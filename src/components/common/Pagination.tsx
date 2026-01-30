type PaginationProps = {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  const safeCurrent = clamp(currentPage, 1, totalPages)

  const goTo = (page: number) => {
    onChange(clamp(page, 1, totalPages))
  }

  const pageNumbers = (() => {
    const maxButtons = 5
    const half = Math.floor(maxButtons / 2)

    let start = Math.max(1, safeCurrent - half)
    const end = Math.min(totalPages, start + maxButtons - 1)

    start = Math.max(1, end - maxButtons + 1)

    const pages: number[] = []
    for (let i = start; i <= end; i += 1) pages.push(i)
    return pages
  })()

  return (
    <nav className="flex items-center gap-2">
      <button
        type="button"
        className="text-grey-700 rounded-md border px-3 py-1 text-sm disabled:opacity-40"
        onClick={() => goTo(safeCurrent - 1)}
        disabled={safeCurrent === 1}
      >
        이전
      </button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((p) => {
          const isActive = p === safeCurrent
          return (
            <button
              key={p}
              type="button"
              className={`rounded-md px-3 py-1 text-sm ${
                isActive ? 'bg-primary-500 text-white' : 'text-grey-700 border'
              }`}
              onClick={() => goTo(p)}
            >
              {p}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className="text-grey-700 rounded-md border px-3 py-1 text-sm disabled:opacity-40"
        onClick={() => goTo(safeCurrent + 1)}
        disabled={safeCurrent === totalPages}
      >
        다음
      </button>

      <span className="text-grey-600 ml-2 text-sm">
        {safeCurrent} / {totalPages}
      </span>
    </nav>
  )
}
