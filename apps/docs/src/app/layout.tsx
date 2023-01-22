import React, { PropsWithChildren } from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
