import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Image
      className={` ${className}`}
      width={130}
      height={34}
      src="/assets/logo/ZoSale-Logo.svg"
      alt="Logo de ZoSale"
      priority
    />
  );
};
