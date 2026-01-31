import "./globals.css";

export const metadata = {
  title: "Nexa CX Africa",
  description: "Customer experience & chatbots for Africa."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
