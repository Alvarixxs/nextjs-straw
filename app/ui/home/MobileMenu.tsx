import Link from "next/link";

function MobileMenu() {
  return (
    <section className="flex flex-col gap-6 text-neutral-400 text-md p-6">
      <Link href="/home" className="hover:text-white transition flex items-center">Showcase</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Docs</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Blog</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Get started</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Community</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Docs</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Learn</Link>
      <Link href="/home" className="hover:text-white transition flex items-center">Login</Link>

    </section>
  )
}

export default MobileMenu;