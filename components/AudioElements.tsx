"use client";

export const CLICK_AUDIO_IDS = Array(5)
  .fill(0)
  .map((_, i) => `click-audio-${i}`);

const AudioElements = () => {
  return (
    <>
      {CLICK_AUDIO_IDS.map((id, i) => (
        <audio id={id} src={`/click ${i}.mp3`} />
      ))}
    </>
  );
};

export default AudioElements;
