import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faMixcloud,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    icon: faSpotify,
    url: "https://open.spotify.com/artist/05d3FO1h0tnn4G8yRw3bzp",
  },
  { icon: faFacebook, url: "https://www.facebook.com/MuratoneMusic" },
  { icon: faInstagram, url: "https://www.instagram.com/mura.tone/" },
  { icon: faSoundcloud, url: "https://soundcloud.com/muratone" },
  { icon: faMixcloud, url: "https://www.mixcloud.com/muratone/" },
  { icon: faEnvelope, url: "mailto:hello@00digital.com" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white fixed bottom-0 left-0 right-0 py-2 px-5 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full flex items-center">
          <p className="text-xs">© 2024 Muratone | </p>
          <FontAwesomeIcon
            icon={faReact}
            className="ms-2 cursor-pointer h-3 "
          />
        </div>

        <ul className="flex justify-center md:justify-end gap-2">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={link.icon} className="h-4 text-white" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
