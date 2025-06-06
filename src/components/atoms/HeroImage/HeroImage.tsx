import Image from "next/image";

type ImageHeroProps = {
  src: string;
  alt: string;
  className?: string;
};

export const HeroImage = ({ src, alt, className = "" }: ImageHeroProps) => (
  <Image src={src} alt={alt} width={800} height={450} className={className} />
);
