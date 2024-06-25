import Link from "next/link";

function MenuMobile() {
  return (
    <section className="flex flex-col gap-6 dark:text-neutral-400 text-neutral-600 text-md p-6 min-h-screen">
      {menuItems.map((item) => (
        <Link key={item.label} href={item.href} className="hover:text-white transition flex items-center">{item.label}</Link>
      ))}
    </section>
  )
}

export default MenuMobile;

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