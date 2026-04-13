import React from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

const Header = () => {
  return (
    <header className="bg-background text-foreground py-4 px-6 flex justify-center items-center gap-4">
      <Link href="/">H</Link>
      <Link href="/about">A</Link>
      <ThemeToggle />
    </header>
  )
}

export default Header