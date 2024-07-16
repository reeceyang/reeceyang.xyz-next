"use client";

import { PropsWithChildren } from "react";
import ClickSoundEffectTrigger from "./ClickSoundEffectTrigger";

const StyledCard = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <ClickSoundEffectTrigger>
      <div
        className={`card static shadow-md outline outline-1 outline-base-300 bg-base-200 transition hover:bg-base-300 duration-200 ${className}`}
      >
        {children}
      </div>
    </ClickSoundEffectTrigger>
  );
};

export default StyledCard;
