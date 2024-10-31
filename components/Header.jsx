import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-zinc-900">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="h1">
            Thao<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Navbar - Desktop mode */}
        <div className="hidden xl:flex gap-8 items-center">
          <Nav />
          <Link href="/">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Navbar - Desktop mode */}
        <div className="xl:hidden">
          <nav>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
