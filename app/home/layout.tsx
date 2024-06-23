'use client'

import Navigation from "@/app/ui/home/Navigation";
import {useState} from "react";
import MobileMenu from "@/app/ui/home/MobileMenu";
import Footer from "@/app/ui/home/Footer";

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <main>
      <Navigation menuOpen={mobileMenuOpen} toggleMenu={()=>{setMobileMenuOpen(!mobileMenuOpen)}}/>
      {mobileMenuOpen ? (
        <MobileMenu />
      ) : (
        <div>
          {children}
          <Footer />
        </div>
      )}
    </main>
  )
}