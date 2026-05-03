interface ButtonProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  url?: string;
}

export function Button({
  iconLeft,
  iconRight,
  text,
  variant = "primary",
  url,
  ...props
}: ButtonProps) {
  const baseClasses =
    "p-5 flex w-fit items-center gap-2.5 rounded-[10] transition-colors duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-hover"
      : variant === "secondary"
      ? "bg-transparent !p-0 text-primary"
      : "bg-secondary text-neutral";

  const content = (
    <>
      {iconLeft && <span>{iconLeft}</span>}
      {text}
      {iconRight && <span>{iconRight}</span>}
    </>
  );

  if (url) {
    return (
      <a href={url} className={`${baseClasses} ${variantClasses}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {content}
    </button>
  );
}