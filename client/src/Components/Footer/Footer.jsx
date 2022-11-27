import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

export default function App() {
  const links = [
    {
      icon: <BsFacebook />,
      link: "https://www.facebook.com/profile.php?id=100001827807418",
    },
    { icon: <BsGithub />, link: "https://github.com/avishayavr" },
    { icon: <BsInstagram />, link: "https://www.instagram.com/_avishayav/" },
    {
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/avishay-avraham-26752b233/",
    },
  ];

  return (
    <div className="bg-black text-center text-[#fff]">
      <div className="p-4 pb-0 flex justify-center">
        <div className="mb-4 p-4 flex ">
          {links.map((icon) => {
            return (
              <div className="m-2 text-2xl">
                <a href={icon.link}>{icon.icon}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center p-3 bg-[#2d2d2d]">
        © 2020 Copyright:
        <a className="text-[#fff]" href="https://mdbootstrap.com/">
          AA.
        </a>
      </div>
    </div>
  );
}
