import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-2xl font-normal",
  "3xl": "text-[40px] font-normal leading-[60px]",
  xl: "text-xl font-normal",
  md: "text-base font-normal",
};

export type TextProps = Partial<{
  className: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-50_a3 font-rubik ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
