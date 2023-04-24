import logo from "../../public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
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
