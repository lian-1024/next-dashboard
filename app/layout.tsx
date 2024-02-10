import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 使用字体 将Inter添加到body元素中,添加 Tailwind 提供的 antialiased类 该类使字体平滑*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
