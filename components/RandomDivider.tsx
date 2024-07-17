const SYMBOLS = ["❃", "✧", "✻", "✼", "❈", "❉", "❊", "❋", "❂", "❁", "❀", "❦"];

const RandomDivider = () => {
  const divider = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  return <div className="divider text-black/10">{divider}</div>;
};

export default RandomDivider;
