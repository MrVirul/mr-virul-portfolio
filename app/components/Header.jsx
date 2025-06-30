import { assets } from "@/assets/assets";
import next from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <Image
          src={assets.profile_img}
          alt="profile photo"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Fira_Code">
        Hi!I'm Virul Meemana{" "}
        <Image src={assets.hand_icon} alt="profile photo" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[6px] font-Ovo">
        Fronted web developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend web developer with a passion for creating beautiful and
        functional websites. I have experience in HTML, CSS, JavaScript, and
        React, and I am always eager to learn new technologies and improve my
        skills.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt=" right arrow"
            className="w-32"
          />
        </a>
      </div>

      <div>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-br-full border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt=" right arrow"
            className="w-32"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
