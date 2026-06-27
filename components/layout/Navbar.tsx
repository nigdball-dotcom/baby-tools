'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'คำนวณผ้าอ้อม', href: '/tools/diaper-cost' },
  { label: 'บล็อก', href: '/blog' },
  { label: 'เกี่ยวกับเรา', href: '/#about' },
]

interface NavbarProps {
  activeHref?: string
}

export default function Navbar({ activeHref }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, close])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2 rounded font-bold text-gray-900 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">🍼</span>
          <span>BabyTools</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="เมนูหลัก" className="hidden gap-6 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? 'page' : undefined}
              className={`rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                activeHref === link.href
                  ? 'font-semibold text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div id="mobile-nav-menu" className="border-t border-gray-100 bg-white sm:hidden">
          <nav aria-label="เมนูหลัก (มือถือ)">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeHref === link.href ? 'page' : undefined}
                onClick={close}
                className={`flex items-center border-b border-gray-50 px-6 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 ${
                  activeHref === link.href
                    ? 'bg-blue-50 font-semibold text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
