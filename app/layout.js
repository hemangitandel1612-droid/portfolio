import "./globals.css";

export const metadata = {
  title: "Hemangi Tandel | AI/ML Developer",
  description: "Portfolio of Hemangi Tandel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}