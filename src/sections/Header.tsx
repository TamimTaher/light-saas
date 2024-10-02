import ArrowRight from "../assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center" >
          <Image src={Logo} alt="Saas logo" height={40} width={40} />
          <MenuIcon className="w-5 h-5 md:hidden" />
          <nav className="hidden md:flex items-center gap-6 text-black/60">
            <a href="#" className="hidden md:block">About</a>
            <a href="#" className="hidden md:block">Features</a>
            <a href="#" className="hidden md:block">Pricing</a>
            <a href="#" className="hidden md:block">Testimonials</a>
            <a href="#" className="hidden md:block">Help</a>
            <button className="px-4 py-2 rounded-lg bg-black text-white font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};