import { ButtonProps } from "@/types/ui";
import Link from "next/link";

const Button = ({
  variant = "primary",
  size = "sm",
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex justify-center items-center font-semibold rounded-lg transition-all duration-300 cursor-pointer border-2";

  const variants = {
    primary:
      "bg-(--bg-button) border-(--bg-button) text-white hover:bg-[#fbf8f3] hover:text-[#6b4423]",
    secondary:
      "bg-(--bg-button-hover) border-(--btn-primary-bg) text-(--bg-button) hover:bg-(--btn-primary-bg) hover:text-(--bg-button-hover)",
    ghost: "bg-transparent border-transparent hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-base",
    md: "px-4 py-1.5 text-lg",
    lg: "px-6 py-3 text-xl",
  };

  const className = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    props.className || ""
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {props.children}
      </Link>
    );
  }

  return <button className={className} {...props} />;
};

export default Button;
