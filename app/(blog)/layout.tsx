export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="prose mx-auto my-12">{children}</div>
  );
}