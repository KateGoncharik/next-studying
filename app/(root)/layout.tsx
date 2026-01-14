import Navbar from '@/components/navigation/Navbar';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
}
