import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Image
      className={`dark:invert ${className}`}
      src="/next.svg"
      alt="Next.js logo"
      width={180}
      height={38}
      priority
    />
  );
};
