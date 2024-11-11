import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";

export const getMenuItems = () => {
  return [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "about",
      text: "About",
    },
    {
      url: "contact",
      text: "Contact",
    },
  ];
};

export const getSocialLinks = () => {
  const icons = [
    {
      url: "https://www.instagram.com/",
      icon: instagram,
    },

    {
      url: "https://www.facebook.com/",
      icon: facebook,
    },
    {
      url: "https://x.com/i/flow/login",
      icon: twitter,
    },
    {
      url: "https://web.whatsapp.com/",
      icon: whatsapp,
    },
  ];
  return icons;
};
