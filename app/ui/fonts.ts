// 导入google Inter字体
import { Inter, Lusitana } from 'next/font/google';

// 选择 latin子集 并导出到 layout 使用
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
