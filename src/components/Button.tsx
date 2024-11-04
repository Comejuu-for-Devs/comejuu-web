import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "flex items-center justify-center gap-2 font-medium text-sm rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-background",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3",
        lg: "px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(variants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
