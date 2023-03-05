import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils";

import { clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, value, label, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    const getInputType = () => {
      if (type === "password") {
        if (!show) return "password";
        return "text";
      }
      return type;
    };

    function clx(arg0: string): import("clsx").ClassValue {
      throw new Error("Function not implemented.");
    }

    return (
      <div className="">
        {label ? (
          <div className="mb-3">
            <label className="font-semibold text-black " htmlFor={props.id}>
              {label}
            </label>
          </div>
        ) : null}
        <div className="relative flex items-center">
          <input
            type={getInputType()}
            value={value}
            className={cn(
              clsx(
                "flex w-full rounded-full border border-primary-400 bg-transparent py-3 px-6 font-poppin text-lg placeholder:text-slate-400 focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50",
                type === "password" && "pr-12"
              ),
              className
            )}
            ref={ref}
            {...props}
          />
          {type === "password" && (
            <div className="absolute right-4">
              {show ? (
                <Eye className="h-5 w-5" onClick={() => setShow(false)} />
              ) : (
                <EyeOff className="h-5 w-5" onClick={() => setShow(true)} />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

// type Props = InputHTMLAttributes<HTMLInputElement> & {
//   label?: string;
//   error?: any;
//   helperText?: string;
// };

// const Input: React.FC<Props> = ({
//   type,
//   label,
//   error,
//   helperText,
//   size: _,
//   ...props
// }) => {
//   return (
//     <div>
//       <input className="px-2 text-black" {...props} />
//       {error ? <p className="text-red-500">{error}</p> : null}
//     </div>
//   );
// };
