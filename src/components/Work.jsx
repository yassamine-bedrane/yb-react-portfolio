import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { data } from '../data/data.js';

const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full mt-80 pb-80 md:h-screen text-gray-300 bg-[#6b9080]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#eaf4f4] border-[#2f3e46]">
            Projets
          </p>
          <p className="py-6">Quelques projets sur lesquels j'ai travaillé:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item) => (
            <div key={item.id} className="rounded-md overflow-hidden bg-white h-85">
              <div className="h-[100px]">
                <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#6b9080]">{item.name}</h3>
                  <p className="text-sm text-[#6b9080]">{item.description}</p>
                </div>
                <div className="flex justify-center items-center mt-4">
                  {/* eslint-disable-next-line */}
                  <a href='https://github.com/yassamine1311' target="_blank">
                    <button className="flex items-center rounded-lg px-6 py-3 bg-white text-[#2f3e46] font-bold text-lg">
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
