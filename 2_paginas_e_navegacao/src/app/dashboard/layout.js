export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav>Links do Admin</nav>

      <div>{children}</div>
    </section>
  );
}
