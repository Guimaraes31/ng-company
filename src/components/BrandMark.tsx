interface BrandMarkProps {
  logoSize?: string
  className?: string
  onClick?: () => void
}

export default function BrandMark({
  logoSize = 'h-14',
  className = '',
  onClick,
}: BrandMarkProps) {
  const content = (
    <img
      src="/icone-transparent.png"
      alt="NG Company"
      className={`object-contain shrink-0 ${logoSize} ${logoSize.replace('h-', 'w-')}`}
    />
  )

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="NG COMPANY — Voltar ao topo"
        className={`group transition-opacity group-hover:opacity-80 group-active:scale-[0.98] ${className}`}
      >
        {content}
      </button>
    )
  }

  return (
    <div className={className} aria-label="NG COMPANY">
      {content}
    </div>
  )
}