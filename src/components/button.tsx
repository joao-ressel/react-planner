import { ReactNode, ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-5 font-medium flex items-center gap-2",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950  hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200  hover:bg-zinc-700",
      icon: "bg-transparent px-0 text-zinc-200 hover:text-zinc-100",
      transparent: "bg-transparent flex-1 text-start",
    },
    size: {
      default: "py-2",
      full: "w-full h-11 justify-center",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
};
