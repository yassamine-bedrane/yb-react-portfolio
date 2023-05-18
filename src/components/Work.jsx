import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { data } from '../data/data.js';

const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full mt-80 pb-80 md:h-screen text-gray-300 bg-[#192a51]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-[#aaa1c8] font-bold inline border-b-4 text-[#eaf4f4] border-[#aaa1c8]">
            Projets
          </p>
          <p className="py-6 ">Découvrez ci-dessous quelques-uns de mes projets récents :</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item) => (
            <div key={item.id} className="rounded-md overflow-hidden bg-[#aaa1c8] h-85">
              <div className="h-[100px]">
                <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#192a51]">{item.name}</h3>
                  <p className="text-sm text-[#192a51]">{item.description}</p>
                </div>
                <div className="flex justify-center items-center mt-4">
                  {/* eslint-disable-next-line */}
                  <a href='https://github.com/yassamine1311' target="_blank">
                    <button className="flex items-center rounded-lg px-6 py-3 bg-[#aaa1c8] text-[#192a51] font-bold text-lg">
                      <FaGithub className="mr-2" />
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
