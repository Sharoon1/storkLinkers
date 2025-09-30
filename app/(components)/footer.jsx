import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  TwitchIcon,
  Twitch,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  const curentYear = new Date().getFullYear();
  return (
    <div className="shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.2)]">
      <div className="py-10 bg-white  ">
        <div className="flex justify-center items-center bg-emerald-50 gap-3 sm:gap-20 px-5 sm:px-20 py-5 ">
          <div>
            <strong>
              @ {curentYear} Stork Linkers, <br />
              All right reserved
            </strong>
          </div>
          <div>
            <nav>
              <ul>
                <li className="font-bold hover:text-[#135254]">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-bold hover:text-[#135254]">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li className="font-bold hover:text-[#135254]">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="font-bold hover:text-[#135254]">
                  <Link href="/privacyPolicy">Privacy Policy</Link>{" "}
                </li>
                <li className="font-bold hover:text-[#135254]">
                  <Link href="/termsService">Terms of Service</Link>
                </li>
                <li className=" font-bold hover:text-[#135254]">
                  <Link href="/affiliateDisclosure">Affiliate Disclosure</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sm:flex  gap-x-2 sm:gap-x-3">
            <a
              href="          https://www.linkedin.com/company/storklinkers/?viewAsMember=true"
              target="_blank"
            >
              <Linkedin size={30} />
            </a>
            <a href="https://www.pinterest.com/storklinkers" target="_blank">
              <Image
                src="pinterest.svg"
                width={30}
                height={30}
                alt="pinterest icon"
              />
            </a>
            <a href="https://www.instagram.com/storklinkers/" target="_blank">
              <Instagram size={30} />
            </a>
            <a href="https://www.facebook.com/storklinkersUSA" target="_blank">
              <Facebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
