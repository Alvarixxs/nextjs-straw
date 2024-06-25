import Icon from '@mdi/react';
import Link from "next/link";
import { mdiLogin, mdiMenu, mdiFileDocumentOutline} from '@mdi/js';
import Logo from "@/app/ui/home/Logo";

interface NavigationProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

function Navigation(props : NavigationProps) {
  return (
    <header className="border-b dark:border-white-trans sticky top-0 z-20 dark:bg-header-back bg-white backdrop-blur-sm py-2 px-6 border-black-trans">
      <div className="hidden lg:block">
        <NavDesktop />
      </div>
      <div className="block lg:hidden">
        <NavMobile {...props}/>
      </div>
    </header>
    )
}

function NavDesktop() {
  return (
    <div className="flex items-center justify-center gap-10">
      <Logo />
      <nav className="flex gap-10 dark:text-neutral-400 text-neutral-700 text-sm">
        {linkTags.map((item, index) => (
          <Link key={item.label}  href={item.href} className="dark:hover:text-white hover:text-black transition flex items-center">{item.label}</Link>
        ))}
      </nav>
      <div className="flex ml-16 gap-6">
        <input placeholder="Search documentation..." className="py-1 px-2 dark:bg-neutral-700 bg-neutral-200 rounded text-xs max-w-96 hidden xl:block"/>
        <input placeholder="Search..." className="py-1 px-2 dark:bg-neutral-700 bg-neutral-200 rounded text-xs max-w-20 block xl:hidden"/>
        <button className="flex gap-2 items-center border border-white-trans px-8 transition rounded dark:hover:bg-white-trans py-1 bg-black hover:opacity-80">
          <p className="text-white font-semibold text-sm">Learn</p>
          <Icon path={mdiFileDocumentOutline} size={0.8} className="text-white"/>
        </button>
        <button className="flex gap-2 items-center border px-8 py-1 transition rounded hover:bg-neutral-200 bg-white">
          <p className="text-black font-medium text-sm">Login</p>
          <Icon path={mdiLogin} size={0.8} className="text-black"/>
        </button>
      </div>
    </div>
  )
}

function NavMobile({menuOpen, toggleMenu}: NavigationProps) {
  return (
    <div className="flex">
      <div className="flex-grow flex items-center">
        <Logo/>
      </div>
      <button className="flex-grow flex items-center justify-end px-6 py-2" onClick={toggleMenu}>
        <Icon path={mdiMenu} size={1} className={`${menuOpen ? 'rotate-90': ''} transition`}/>
      </button>
    </div>
  )
}

export default Navigation


const linkTags = [
  {
    label: "Showcase",
    href: "/home"
  },
  {
    label: "Docs",
    href: "/home"
  },
  {
    label: "Blogs",
    href: "/home"
  },
  {
    label: "Get started",
    href: "/home"
  },
]