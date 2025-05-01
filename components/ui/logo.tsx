import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-6 h-6">
        <Image src="/images/treeo-logo.png" alt="Treeo Logo" fill className="object-contain" />
      </div>
      <span className="font-mono text-xl font-bold tracking-tight">Treeo</span>
    </Link>
  )
}
