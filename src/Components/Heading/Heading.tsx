const sizes = {
  "3xl": "text-4xl font-bold",
  "2xl": "text-[32px] font-bold leading-[38px]",
  xl: "text-2xl font-bold",
  "5xl": "text-5xl font-bold leading-[60px]",
  "4xl": "text-[40px] font-bold leading-[60px]",
  s: "text-base font-bold leading-[19px]",
  md: "text-lg font-semibold",
  xs: "text-sm font-semibold",
  lg: "text-xl font-semibold leading-6",
};

export type HeadingProps = Partial<{
  className: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900 font-raleway ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
