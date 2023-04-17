import { PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import InstagramIcon from "../icons/Instagram";
import MailIcon from "../icons/Mail";

const LinkTree = () => {
  const iconStyles = "h-6 w-6 md:h-8 md:w-8";
  const items = [
    {
      id: 1,
      icon: <PhoneIcon className={iconStyles} />,
      text: "786-488-6972",
    },
    {
      id: 2,
      icon: <InstagramIcon className={iconStyles} />,
      text: "@stormroofingsolution",
    },
    {
      id: 3,
      icon: <GlobeAltIcon className={iconStyles} />,
      text: "www.stormroofingsolution.com",
    },
    {
      id: 4,
      icon: <MailIcon className={iconStyles} />,
      text: "stormroofingsolutioninc@gmail.com",
    },
  ];
  return (
    <ul className="overflow-hidden text-md md:text-xl font-medium text-[#f1f1f1] space-y-6">
      {items.map((item) => (
        <li key={item.id} className="flex gap-7 md:gap-10">
          {item.icon}
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default LinkTree;
