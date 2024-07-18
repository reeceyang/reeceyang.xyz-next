const SYMBOLS = ["❃", "✧", "✻", "✼", "❈", "❉", "❊", "❋", "❂", "❁", "❀", "❦"];

const RandomDivider = () => {
  const divider = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  return (
    // ignore hydration warning since it doesn't matter
    // https://nextjs.org/docs/messages/react-hydration-error#solution-2-disabling-ssr-on-specific-components
    <div className="divider text-black/10" suppressHydrationWarning>
      {divider}
    </div>
  );
};

export default RandomDivider;
