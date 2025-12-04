import { storeData } from '../data/config';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { BsBagFill } from 'react-icons/bs';
import { TbShirt } from 'react-icons/tb';

const iconMap = {
  facebook: FaFacebook,
  olx: BsBagFill,
  enjoei: TbShirt,
  whatsapp: FaWhatsapp
};

export function Links() {
  return (
    <div className="links-container">
      {storeData.links.map((link) => {
        const IconComponent = iconMap[link.iconType];
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-button link-${link.iconType}`}
          >
            <span className="link-icon">
              <IconComponent />
            </span>
            <span className="link-text">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}

