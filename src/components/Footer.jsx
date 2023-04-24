import logo from "../../public/logo.svg";
import { Divider } from "antd";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <Divider style={{backgroundColor: '#000'}} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBlockStart: '1rem'
        }}
      >
        &copy; 2023 Offseason Advisor
      </div>
      <p>stats from NFL.com</p>
      <Image src={logo} alt="Offseason Advisor" width={30} height={30} />
    </div>
  );
};

export default Footer;
