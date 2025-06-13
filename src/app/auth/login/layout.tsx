export default function LoginLayout({
  children,
  modal, // OJO: Next.js lo inyecta automáticamente si usás @modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      {modal}
    </>
  );
}
