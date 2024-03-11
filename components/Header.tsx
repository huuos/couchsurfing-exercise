import Link from 'next/link'

export default function Header() {
  return (
    <header className="m-8 text-center sm:text-left">
      <nav className="flex flex-row gap-4">
        <Link className="hover:underline" href="/">Couchsurfing</Link>
        <Link className="hover:underline" href="/profile">Profile</Link>
        <Link className="text-base hover:underline" href="/posts">Posts</Link>
      </nav>
    </header>
  )
}