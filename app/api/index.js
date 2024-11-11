import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const getMenu = () => {
  const items = [
    {
      url: "home",
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
  return items;
};

export const getIcons = () => {
  const icons = [
    {
      url: "https://www.instagram.com/",
      icon: faInstagram,
    },

    {
      url: "https://www.facebook.com/",
      icon: faFacebook,
    },
    {
      url: "https://x.com/i/flow/login",
      icon: faTwitter,
    },
    {
      url: "https://web.whatsapp.com/",
      icon: faWhatsapp,
    },
  ];
  return icons;
};
