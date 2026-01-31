import DesktopNavigation from '@/components/navigation/navbar/DesktopNavigation';
import Navbar from '@/components/navigation/navbar/Navbar';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <Navbar></Navbar>
      <div className="flex pt-25">
        <div className="flex flex-col"></div>
        <DesktopNavigation />
        {children}
      </div>
    </main>
  );
}
