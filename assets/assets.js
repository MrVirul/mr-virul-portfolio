import logo_dark from "./logo_dark.png";
import carcare_img from "./carcare_img.png";
import blue_image from "./blue_image.png";

export const assets = {
  user_image: "./user-image.png",
  logo_dark,
  profile_img: "./profile-img.png",
  carcare_img,
  blue_image,
};

export const workData = [
  {
    title: "Car Care",
    description: " Car Service Maintenance system",
    bgImage: carcare_img, // Use asset reference here
    link: "https://github.com/mrbhanukab/CarCare",
    techStack: ["Spring boots", "Java", "React", "Tailwind"],
  },
  {
    title: "MrVirul Portfolio",
    description: "My portfolio website",
    bgImage: blue_image, // Updated to use blue_image
    link: "https://github.com/MrVirul/mr-virul-portfolio",
    techStack: ["Java Script", "React", "Tailwind"],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  // {
  //   icon: assets.graphics_icon,
  //   title: "Graphics design",
  //   description: "Creative design solutions to enhance visual communication...",
  //   link: "",
  // },
];

// export const infoList = [
//   {
//     icon: assets.code_icon,
//     iconDark: assets.code_icon_dark,
//     title: "Languages",
//     description: "HTML, CSS, JavaScript React Js, Next Js, Java, Python",
//   },
//   {
//     icon: assets.edu_icon,
//     iconDark: assets.edu_icon_dark,
//     title: "Education",
//     description:
//       "BSc (Hons) in Information Technology Undergraduate Specializing in Software Engineering at SLIIT",
//   },
//   {
//     icon: assets.project_icon,
//     iconDark: assets.project_icon_dark,
//     title: "Projects",
//     description: "Contribute to build car maintanance software",
//   },
// ];

// export const toolsData = [
//   assets.vscode,
//   assets.firebase,
//   assets.mongodb,
//   assets.figma,
//   assets.git,
// ];
