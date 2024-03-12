import Text from "../Text/Text";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const Header = ({ ...props }: Props) => {
  return (
    <header {...props}>
      <div className="flex md:flex-row flex-col py-5 justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1290px]">
        <Link to="/">
          <Text
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.50px] text-[#844d36] p-2"
          >
            JD Furnitures
          </Text>
        </Link>
        <div className="flex flex-row justify-between items-center md:w-[40%] w-full">
          <Link to="/">
            <Text size="lg" as="p" className="nav">
              Home
            </Text>
          </Link>
          <Link to="/aboutus">
            <Text size="lg" as="p" className="nav">
              About
            </Text>
          </Link>
          <Link to="/shop">
            <Text size="lg" as="p" className="nav">
              Shop
            </Text>
          </Link>
          <Link to="/team">
            <Text size="lg" as="p" className="nav">
              Team
            </Text>
          </Link>
          <Link to="/blog">
            <Text size="lg" as="p" className="nav">
              Blog
            </Text>
          </Link>

          <Link to="contactus">
            <Text size="lg" as="p" className="nav">
              Contact
            </Text>
          </Link>
        </div>
        <div className="flex flex-row justify-between w-auto gap-[30px]">
          <FaSearch className="h-[24px] w-[24px]" />
          <IoPersonOutline className="h-[24px] w-[24px]" />
          <div className="relative items-center justify-center">
            <BsCart3 className="h-[24px] w-[24px]" />
            <p className="absolute flex items-center justify-center p-0 top-[-15px] right-[-12px] h-5 w-5 rounded-full bg-red-700 text-white">
              2
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
