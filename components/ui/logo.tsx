import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <Image src="/images/treeo-new-logo.png" alt="Treeo Logo" fill className="object-contain" priority />
      </div>
      <span className="font-mono text-xl font-bold tracking-tight text-white">Treeo</span>
    </Link>
  )
}
