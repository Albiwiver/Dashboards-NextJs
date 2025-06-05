import Image from "next/image";
import { Button } from "@/components/atoms/Button/Button";

interface CallToActionProps {
  href: string;
  icon?: string;
  text: string;
  variant?: "primary" | "secondary";
}

export const CallToAction = ({
  href,
  icon,
  text,
  variant = "primary",
}: CallToActionProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto"
    >
      <Button
        variant={variant}
        className="w-full flex items-center justify-center gap-2"
      >
        {icon && (
          <Image
            className="dark:invert"
            src={icon}
            alt={`${text} icon`}
            width={20}
            height={20}
          />
        )}
        {text}
      </Button>
    </a>
  );
};
