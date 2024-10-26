import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-zinc-900">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Thao<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Navbar - Desktop mode */}
        <div className="hidden lg:flex gap-8 items-center">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Navbar - Desktop mode */}
        <div className="lg:hidden">
          <nav>mobile nav</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
