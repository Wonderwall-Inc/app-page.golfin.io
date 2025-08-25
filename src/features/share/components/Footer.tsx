import React from 'react';
import { Link } from 'react-router-dom';
import golfinLogoColor from '@/features/share/assets/images/golfin-logo-color.png';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* 左側: ロゴとコピーライト */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="//golfin.io" className="text-xl font-bold">
              <img src={golfinLogoColor} alt="Golfin" className="w-auto h-10" />
            </Link>
            <p className="text-sm text-gray-400">
              @ {new Date().getFullYear()} GOLFIN. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
