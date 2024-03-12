import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import Img from "../Img/Img";

interface Props {
  className?: string;
}

const Footer = ({ ...props }: Props) => {
  return (
    <footer {...props}>
      <div className="flex md:flex-row flex-col justify-start w-full pl-[46px] gap-11 py-[46px] mx-auto md:gap-5 md:p-5 bg-[#86b3d1] max-w-[1290px]">
        <div className="flex flex-col items-center justify-start w-[48%] md:w-full ml-[13px] gap-10 ">
          <div className="flex flex-col items-center justify-start w-full gap-2.5 text-white">
            <Heading
              size="4xl"
              as="h1"
              className="!text-gray-50_01 tracking-[-0.50px]"
            >
              Subscribe now and get 10% off all items
            </Heading>
            <Text
              size="md"
              as="p"
              className="!text-gray-50_01 tracking-[-0.50px] leading-[35px]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text.
            </Text>
          </div>
          <div className="flex sm:flex-row flex-col justify-start w-full gap-px">
            <Input
              shape="square"
              name="email"
              placeholder="Your email here.."
              className="w-[74%] md:w-full bg-slate-300 rounded-lg"
            />
            <Button
              size="lg"
              shape="square"
              className="!text-yellow-100 bg-slate-950 hover:bg-slate-700 rounded-tr-lg ml-[-20px] rounded-br-lg tracking-[-0.50px] font-bold min-w-[157px]"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Img
          src="/images/sub-section-img.png"
          alt="img"
          className="w-[48%] md:w-full md:h-[309px] object-cover"
        />
      </div>
      <div className="flex flex-row justify-end w-full mt-[80px] ml-[-1365px] p-12 md:ml-0 md:p-5 bg-black">
        <div className="flex flex-col items-center justify-start w-full gap-[100px]  mx-auto max-w-[1301px] text-slate-400">
          <div className="flex md:flex-row flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[28%] md:w-full gap-4">
              <Heading
                size="2xl"
                as="h2"
                className="!text-gray-50_01 tracking-[-0.50px]"
              >
                JD-Furnitures
              </Heading>
              <Text
                size="md"
                as="p"
                className="tracking-[-0.50px] opacity-0.81 leading-[35px]"
              >
                Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
                facilisi vivamus proin lit laoreet phasel alilus porttitor
                inter, facilisis condiment tarime egestas rhoncus dapibus
                iaculis alemir.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-6">
              <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
                Customer
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Order Status
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Collections
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Our Story
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Affiliates
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Security
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-6">
              <Heading
                as="h5"
                className="mt-[5px] !text-gray-50_01 tracking-[-0.50px]"
              >
                Information
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Customer Service
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Careers
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  FAQ
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-[25px]">
              <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
                Follow Us
              </Heading>
              <div className="flex flex-row justify-between w-full">
                <Button
                  color="gray_100"
                  shape="circle"
                  size="7xl"
                  className="w-[50px] text-3xl hover:text-black"
                >
                  <BsInstagram />
                </Button>
                <Button
                  color="gray_100"
                  shape="circle"
                  size="7xl"
                  className="w-[50px] text-3xl hover:text-black"
                >
                  <FaFacebookF />
                </Button>
                <Button
                  color="gray_100"
                  shape="circle"
                  size="7xl"
                  className="w-[55px] text-3xl hover:text-black"
                >
                  <BsTwitterX />
                </Button>
                <Button
                  color="gray_100"
                  shape="circle"
                  size="7xl"
                  className="w-[55px] text-3xl hover:text-black"
                >
                  <FaTiktok />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center border-t-[1px] border-slate-400 w-full sm:gap-10">
            <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81">
              © Copyright 2024. All Rights Reserved.
            </Text>
            <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
              <Text
                size="md"
                as="p"
                className="mb-px tracking-[-0.50px] opacity-0.81"
              >
                Terms of condition
              </Text>
              <Text
                size="md"
                as="p"
                className="tracking-[-0.50px] opacity-0.81"
              >
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
