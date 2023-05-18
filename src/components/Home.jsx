import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#6b9080]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#2f3e46]-600'>Je m'appelle</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#a4c3b2]'>
          YASSMINE BEDRANE
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#eaf4f4]'>
        Future ingénieure en informatique.
        </h2>
        <p className='text-[#eaf4f4] py-4 max-w-[700px]'>
        Etudiante en génie logiciel. Passionnée par le développement de logiciels, je me consacre actuellement à la création d'applications web réactives en tant que développeuse Full Stack.
        </p>
        <div>
        <Link to='about' smooth={true} duration={500}>

          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2f3e46] hover:border-[#2f3e46]'>
            
            Voir Plus
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
