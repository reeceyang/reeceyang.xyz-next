import { PropsWithChildren } from "react";

const StyledCard = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={`card shadow-md outline outline-1 outline-base-200 bg-base-100 transition hover:bg-base-200 duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default StyledCard;
