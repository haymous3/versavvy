import {ArrowRightIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  hideIcon?: boolean;
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  icon,
  href,
  type = "button",
  hideIcon = false,
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-white shadow-primary/30 shadow-lg",
    secondary: "bg-white text-primary border border-primary",
    ghost: "bg-transparent text-white border border-white/50",
  }[variant];

  const content = (
    <>
      {children}
      {!hideIcon && (icon ?? <ArrowRightIcon className="w-4" />)}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`inline-flex items-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
