import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-zinc-800 text-white py-4 px-6 flex justify-center items-center gap-4">
      <Link href="/">H</Link>
      <Link href="/about">A</Link>
    </header>
  )
}

export default Header