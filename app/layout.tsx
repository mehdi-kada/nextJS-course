{/* adding global styles to application */}
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // Ensure 'fonts' file exists and is correctly imported

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
