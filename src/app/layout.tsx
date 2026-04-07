export const metadata = {
  title: "Clinton Onaiwu - Mobile App Developer",
  description:
    "Passionate React Native developer with 3+ years building robust, user-friendly cross-platform mobile apps.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
