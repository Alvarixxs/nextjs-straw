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
    <header className="border-b border-white-trans">
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
    <div className="py-1 px-6 flex items-center justify-center gap-10">
      <Logo />
      <nav className="flex gap-10 text-neutral-400 text-sm">
        <Link href="/home" className="hover:text-white transition flex items-center">Showcase</Link>
        <Link href="/home" className="hover:text-white transition flex items-center">Docs</Link>
        <Link href="/home" className="hover:text-white transition flex items-center">Blog</Link>
        <Link href="/home" className="hover:text-white transition flex items-center">Get started</Link>
      </nav>
      <div className="flex ml-16 gap-6">
        <input placeholder="Search documentation..."
               className="py-1 px-2 bg-neutral-900 rounded text-xs max-w-96 hidden xl:block"/>
        <input placeholder="Search..." className="py-1 px-2 bg-neutral-900 rounded text-xs max-w-20 block xl:hidden"/>
        <button
          className="flex gap-2 items-center border border-white-trans px-8 transition rounded hover:bg-white-trans py-1"
        >
          <p className="text-white font-semibold text-sm">Learn</p>
          <Icon path={mdiFileDocumentOutline} size={0.8}/>
        </button>
        <button
          className="flex gap-2 items-center border bg-white px-8 py-1 transition rounded hover:opacity-90"
        >
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
      <div className="flex-grow flex items-center px-6 py-2">
        <Logo/>
      </div>
      <button className="flex-grow flex items-center justify-end px-6 py-2" onClick={toggleMenu}>
        <Icon path={mdiMenu} size={1} className={`${menuOpen ? 'rotate-90': ''} transition`}/>
      </button>
    </div>
  )
}

export default Navigation