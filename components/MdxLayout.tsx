export default function MdxLayout({ children, meta }: { children: React.ReactNode, meta: BlogPost }) {
  return (
    <div className="prose mx-auto my-12">
      <h1>{meta.title}</h1>
      <div className="flex flex-row">
      <span>
        {new Date(meta.date).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <div className="ml-auto mt-auto h-min flex flex-row gap-2">
        {meta.categories.map((category) => (
          <div className="badge badge-outline" key={`${meta.slug} ${category}`}>
            {category}
          </div>
        ))}
      </div></div>
      {children}
    </div>
  );
}