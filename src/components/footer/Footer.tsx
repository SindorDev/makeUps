import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaTiktok, FaTwitterSquare, FaPinterest } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "../../utils";
import FLogo from "../../assets/icons/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-20">
      <Container>
        <div className="flex items-start justify-between">
          <div>
            <img src={FLogo} width={300} alt="Logo Cite" />
          </div>
          <div className="flex flex-col gap-2 text-start">
            <h3 className="text-[16px] font-medium">Help & Information</h3>
            <span className="text-[15px] font-normal">Delivery & Returns</span>
            <span className="text-[15px] font-normal">Contact Us & FAQs</span>
            <span className="text-[15px] font-normal">Haul Pass</span>
            <span className="text-[15px] font-normal">Gift Cards</span>
            <span className="text-[15px] font-normal">About Us</span>
            <span className="text-[15px] font-normal">Careers</span>
            <span className="text-[15px] font-normal">Affiliates</span>
            <span className="text-[15px] font-normal">Student Discount</span>
          </div>

          <div className="flex flex-col gap-2 text-start">
            <h3 className="text-[16px] font-medium">Legal</h3>
            <span className="text-[15px] font-normal">Terms & Conditions</span>
            <span className="text-[15px] font-normal">TRIBE Terms</span>
            <span className="text-[15px] font-normal">
              Website Terms of Use
            </span>
            <span className="text-[15px] font-normal">Privacy</span>
            <span className="text-[15px] font-normal">Anti-Slavery</span>
            <span className="text-[15px] font-normal">Cookies</span>
            <span className="text-[15px] font-normal">Manage Preferences</span>
          </div>
          <div className="w-full max-w-[300px] flex flex-col gap-2">
            <h3 className="text-[16px] font-medium">
              Want More from Beauty Bay?
            </h3>
            <span className="text-[14px] font-normal">
              Let’s stay in touch! We promise to send you the latest news,
              offers, and the freshest beauty drops, straight to your inbox.
            </span>
            <div className="flex items-center border-b-2 border-black gap-5">
              <input
                type="email"
                className="bg-transparent text-black text-[16px] capitalize font-medium py-2 outline-none w-full"
                placeholder="Your Email"
              />
              <AiOutlineArrowRight size={40} />
            </div>
            <div className="flex items-center gap-5 mt-5">
              <BsFacebook size={40} />
              <BsInstagram size={40} />
              <FaTwitterSquare size={40} />
              <FaTiktok size={40} />
              <FaPinterest size={40} />
              <BsYoutube size={40} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
