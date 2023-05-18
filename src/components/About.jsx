import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#6b9080] text-[#eaf4f4]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2f3e46]'>
              A PROPOS
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl text-[#e7ecef] font-bold'>
              <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
            </div>
            <div>
              <p>J'aime relever les défis que ce domaine offre et je reste constamment à jour avec les dernières technologies. Mon objectif est de combiner ma passion pour la technologie avec ma créativité pour créer des produits à fort impact. Je suis motivée à continuer à développer mes compétences et à contribuer à des projets stimulants dans le génie logiciel.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
