import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} height={40} alt="Saas logo" className="relative z-10" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <SocialLinkedIn />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <SocialInsta />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <SocialYoutube />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <SocialPin />
          </a>
          <a href="https://www.xing.com/company/" target="_blank" rel="noopener noreferrer">
            <SocialX />
          </a>
        </div>
        <p className="text-white/60 mt-6">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
