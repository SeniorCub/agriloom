'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="relative h-screen">
     // TODO:
      {/* position the  get started button on  top Left corner of page */}
       {/*For Easy Navigation we can have a buttom nav bar with all the  pages */}
       {/* we can have home , about , etc  on the buttom nav   */}
       {/*look how it was done here https://davamen-energy.vercel.app/*/}
       {/**code https://github.com/debianchef/Davamen-Energy.git */}
      <button 
        onClick={handleGetStarted}
        className="absolute top-4 left-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white 
                   px-4 py-2 rounded-md transition-colors duration-200"
      >
        <span>Get Started</span>
      </button>
      
      <main className="p-4 pt-16">
        <h2 className="text-2xl font-bold mb-4">Home Page / Index Page / Portfolio</h2>
        {/* Add  main content here */}
      </main>
    </div>
  );
}