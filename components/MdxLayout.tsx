export default function MdxLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: BlogPost;
}) {
  return (
    <div className="prose">
      <h1 className="text-5xl font-bold mb-0">{meta.title}</h1>
      <div className="mt-auto h-min flex flex-row gap-2 flex-wrap">
        {meta.categories.map((category) => (
          <div className="badge badge-outline" key={`${meta.slug} ${category}`}>
            {category}
          </div>
        ))}
      </div>
      <p>
        {meta.date &&
          new Date(meta.date).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
      {children}
    </div>
  );
}
