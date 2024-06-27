import Logo from "@/app/ui/utils/Logo";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <footer className="flex justify-center gap-10 md:gap-16 px-6 py-20 flex-wrap border-t dark:border-white-trans border-black-trans bg-neutral-200 dark:bg-black">
      <div className="flex flex-row xl:flex-col gap-6">
        <Logo />
        <div className="flex gap-2 justify-center items-center dark:text-neutral-400 text-neutral-700">
          <Link href="/home" className="dark:hover:text-white transition hover:text-black"><GitHubIcon /></Link>
          <Link href="/home" className="dark:hover:text-white transition hover:text-black"><XIcon /></Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10 md:gap-16 justify-center items-start text-sm">
        {content.map(item =>
          <div className="flex flex-col gap-3" key={item.title}>
            <p className="font-semibold ">{item.title}</p>
            <div className="flex flex-wrap gap-3 md:flex-col">
              {item.sub.map(item =>
                <Link
                  key={item.text}
                  href={item.href}
                  className="dark:text-neutral-400 text-neutral-700 dark:hover:text-white hover:text-black transition md:border-none
                  border-r dark:border-r-white-trans border-r-black-trans pr-3"
                >
                  {item.text}
                </Link>)
              }
            </div>
          </div>
        )}
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Subscribe to our newsletter</p>
          <p className="dark:text-neutral-400  text-neutral-700 max-w-xs">Get regular updates on our featured products and regular information
            on any bug updates</p>
          <input placeholder="Enter email address..."
                 className="py-1 px-2 dark:bg-neutral-700 bg-neutral-300 border-black-trans rounded text-sm max-w-xs"/>
          <button
            className="self-start border dark:border-white-trans border-black-trans px-8 transition
            rounded dark:hover:border-white hover:border-black py-1 dark:text-white text-neutral-700 dark:hover:text-white hover:text-black"
          >
            <p className="text-sm">Subscribe</p>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

const content = [
  {
    title: 'Resources',
    sub: [
      {
        text: 'Docs',
        href: '/(default)'
      },
      {
        text: 'Learn',
        href: '/(default)'
      },
      {
        text: 'Showcase',
        href: '/(default)'
      },
      {
        text: 'Blog',
        href: '/(default)'
      },
      {
        text: 'Analytics',
        href: '/(default)'
      },
      {
        text: 'Preview',
        href: '/(default)'
      }
    ]
  },
  {
    title: 'More',
    sub: [
      {
        text: 'Commerce',
        href: '/(default)'
      },
      {
        text: 'Contact sales',
        href: '/(default)'
      },
      {
        text: 'Github',
        href: '/(default)'
      },
      {
        text: 'Releases',
        href: '/(default)'
      },
      {
        text: 'Governance',
        href: '/(default)'
      },
    ]
  },
  {
    title: 'About us',
    sub: [
      {
        text: 'Open source software',
        href: '/(default)'
      },
      {
        text: 'Similar work',
        href: '/(default)'
      },
      {
        text: 'Github',
        href: '/(default)'
      },
      {
        text: 'X',
        href: '/(default)'
      },
    ]
  },
  {
    title: 'Legal',
    sub: [
      {
        text: 'Privacy policy',
        href: '/(default)'
      },
      {
        text: 'Judge',
        href: '/(default)'
      },
    ]
  },
]