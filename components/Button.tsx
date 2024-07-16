import { FC, PropsWithChildren } from "react";
import StyledCard from "./StyledCard";

const Button: FC<PropsWithChildren<{ compact?: boolean }>> = ({
  children,
  compact = true,
}) => {
  return (
    <StyledCard className={compact ? "card-compact" : ""}>
      <div className="card-body uppercase font-bold">{children}</div>
    </StyledCard>
  );
};

export default Button;
