import React from 'react';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';

interface GlobalLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <main className="flex-1">
        {children}
      </main>

      {/* フッター */}
      {showFooter && <Footer />}
    </div>
  );
};

export default GlobalLayout; 