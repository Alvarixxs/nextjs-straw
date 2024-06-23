import Logo from "@/app/ui/home/Logo";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const content = [
  {
    title: 'Resources',
    sub: [
      {
        text: 'Docs',
        href: '/home'
      },
      {
        text: 'Learn',
        href: '/home'
      },
      {
        text: 'Showcase',
        href: '/home'
      },
      {
        text: 'Blog',
        href: '/home'
      },
      {
        text: 'Analytics',
        href: '/home'
      },
      {
        text: 'Preview',
        href: '/home'
      }
    ]
  },
  {
    title: 'More',
    sub: [
      {
        text: 'Commerce',
        href: '/home'
      },
      {
        text: 'Contact sales',
        href: '/home'
      },
      {
        text: 'Github',
        href: '/home'
      },
      {
        text: 'Releases',
        href: '/home'
      },
      {
        text: 'Governance',
        href: '/home'
      },
    ]
  },
  {
    title: 'About us',
    sub: [
      {
        text: 'Open source software',
        href: '/home'
      },
      {
        text: 'Similar work',
        href: '/home'
      },
      {
        text: 'Github',
        href: '/home'
      },
      {
        text: 'X',
        href: '/home'
      },
    ]
  },
  {
    title: 'Legal',
    sub: [
      {
        text: 'Privacy policy',
        href: '/home'
      },
      {
        text: 'Judge',
        href: '/home'
      },
    ]
  },
]

function Footer() {
  return (
    <footer className="flex justify-center gap-10 p-6 flex-wrap">
      <div className="flex flex-row xl:flex-col gap-6">
        <Logo />
        <div className="flex gap-2 justify-center items-center text-neutral-400">
          <Link href="/home"><GitHubIcon /></Link>
          <Link href="/home"><XIcon /></Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-20 justify-center items-start text-sm">
        {content.map(item =>
          <div className="flex flex-col gap-3 flex-grow flex-shrink" key={item.title}>
            <p className="font-semibold">{item.title}</p>
            {item.sub.map(item =>
              <Link href={item.href} key={item.text} className="text-neutral-400 hover:text-white transition">{item.text}</Link>)
            }
          </div>
        )}
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Subscribe to our newsletter</p>
          <p className="text-neutral-400 max-w-xs">Get regular updates on our featured products and regular information
            on any bug updates</p>
          <input placeholder="Search documentation..."
                 className="py-1 px-2 bg-neutral-900 rounded text-sm max-w-xs hidden xl:block"/>
          <button className="self-start border border-white-trans px-8 transition rounded hover:border-white py-1">
            <p className="text-white text-sm">Subscribe</p>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;