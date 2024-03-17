export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <section className="prose my-10">
        <h1>Blog</h1>
      </section>
      {children}
    </section>
  );
}
