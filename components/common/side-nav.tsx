'use client'

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SideNavProps {
  isVisible: boolean;
  requestHiddenState: () => void;
}

export default function SideNav(props: SideNavProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#ffefe9] overflow-x-hidden pt-[60px] z-[999] transition-all duration-300 ease-in-out 
        ${props.isVisible ? "w-[250px] sm:w-[300px]" : "w-0"}`}
    >
      {/* Close Button */}
      <button
        onClick={props.requestHiddenState}
        className="absolute top-0 right-[25px] text-[36px] ml-[50px] text-[#ff5757] cursor-pointer"
      >
        &times;
      </button>

      {/* Links */}
      <div className={`flex flex-col gap-2 pl-8 pr-2 ${!props.isVisible && "hidden"}`}>
        <Link
          href="#aboutus"
          className="text-lg sm:text-xl md:text-2xl text-[#272727] py-2 no-underline transition-colors duration-300 hover:text-[#ff5757]"
        >
          About us
        </Link>
        <Link
          href="#privacy"
          className="text-lg sm:text-xl md:text-2xl text-[#272727] py-2 no-underline transition-colors duration-300 hover:text-[#ff5757]"
        >
          Privacy Policy
        </Link>
        <Link
          href="#contactus"
          className="text-lg sm:text-xl md:text-2xl text-[#272727] py-2 no-underline transition-colors duration-300 hover:text-[#ff5757]"
        >
          Contact us
        </Link>

        {/* SIGN UP Button */}
        <Link href="#userform">
          <Button
            className="ml-[-4px] mt-4 rounded-full px-6 py-3 font-bold border-2 border-transparent hover:border-[#ff5757] hover:bg-transparent hover:text-black text-white text-md bg-[#ff5757] transition-all"
          >
            SIGN UP
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}