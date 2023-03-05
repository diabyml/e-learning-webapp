import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "../../utils";

// focus state:
// focus:ring-2 focus:ring-slate-400 focus:ring-offset-2

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-full text-md font-medium transition-colors focus:outline-none    disabled:opacity-50  disabled:pointer-events-none  data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        unstyled: "bg-none focus:ring-none active:scale-none",
        default:
          //   focus:ring-primary-400
          "bg-primary-400 text-white hover:bg-primary-600",
        accent: "bg-accent-400 hover:bg-accent-600 text-white",
        destructive: "bg-destructive-400 text-white hover:bg-destructive-600",
        outline: "bg-transparent border border-slate-200 hover:bg-slate-100 ",
        subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200 ",
        ghost:
          "bg-transparent hover:bg-slate-100  data-[state=open]:bg-transparent",
        link: "bg-transparent  underline-offset-4 hover:underline text-slate-900 hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-full",
        lg: "h-11 px-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, loadingText, children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {loadingText}
          </>
        ) : (
          <> {children} </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
