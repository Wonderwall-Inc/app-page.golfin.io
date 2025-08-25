import React from 'react'
import { GlobalLayout, golfinLogoColor } from '@/features/share';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout>
      <div className='flex flex-col h-screen w-screen items-center justify-center overflow-hidden'>
        <div className='flex-1 mx-auto w-4/5 max-w-3xl flex items-center justify-center px-4'>
          <img src={golfinLogoColor} alt="Golfin" className="max-w-full h-auto" />
        </div>
      </div>
    </GlobalLayout>
  )
}

export default HomePage;
