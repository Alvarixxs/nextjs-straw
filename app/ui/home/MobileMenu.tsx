import Link from "next/link";

const menuItems = [
  {
    label: "Showcase",
    href: "/"
  },
  {
    label: "Docs",
    href: "/"
  },
  {
    label: "Blog",
    href: "/"
  },
  {
    label: "Get started",
    href: "/"
  },
  {
    label: "Community",
    href: "/"
  },
  {
    label: "Learn",
    href: "/"
  },
  {
    label: "Login",
    href: "/"
  },
]

function MobileMenu() {
  return (
    <section className="flex flex-col gap-6 text-neutral-400 text-md p-6">
      {menuItems.map((item) => (
        <Link key={item.label} href={item.href} className="hover:text-white transition flex items-center">{item.label}</Link>
      ))}
    </section>
  )
}

export default MobileMenu;