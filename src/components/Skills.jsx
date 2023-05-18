import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import Php from '../assets/php.png';
import Laravel from '../assets/Laravel.png';
import Wordpress from '../assets/wordpress.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full my-[60px] bg-[#6b9080] text-[#eaf4f4]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#2f3e46] '>TECHNOLOGIES</p>
              <p className='py-4'>Voici les technologies avec lesquelles j'ai travaillé :</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT NATIVE</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-40 mx-auto' src={Php} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-[130px] mx-auto' src={Wordpress} alt="HTML icon" />
                  <p className='my-4'>WORDPRESS</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-[200px] mx-auto' src={Laravel} alt="HTML icon" />
                  <p className='my-4'>LARAVEL</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-[90px] mt-[20px] mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4 mt-10'>PYTHON</p>
              </div>
              <div className=' hover:scale-110 duration-500 bg-[#2f3e46] py-[15px] rounded-md'>
                  <img className='w-[90px]  mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
