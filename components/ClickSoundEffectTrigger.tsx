import { FC, PropsWithChildren } from "react";
import { CLICK_AUDIO_IDS } from "./AudioElements";

const playRandomClickAudio = () => {
  const id =
    CLICK_AUDIO_IDS[Math.floor(Math.random() * CLICK_AUDIO_IDS.length)];
  const clickAudioElement = document.getElementById(id) as HTMLAudioElement;
  clickAudioElement.play();
};

/**
 * Plays a click sound effect when the component is clicked. Requires an
 * `AudioElements` component to be rendered in the app.
 */
const ClickSoundEffectTrigger: FC<PropsWithChildren> = ({ children }) => {
  return <div onClick={playRandomClickAudio}>{children}</div>;
};

export default ClickSoundEffectTrigger;
