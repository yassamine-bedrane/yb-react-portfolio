import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../formation.css';

function Formation() {
    // Define an array of formations
    const formations = [
        {
            title: "Baccalauréat en Sciences Physiques",
            description: "J'ai obtenu mon baccalauréat en Sciences Physiques, démontrant ainsi ma solide compréhension des concepts scientifiques fondamentaux et ma capacité à résoudre des problèmes complexes dans ce domaine.",
            date: 2020,
        },
        {
            title: "Cycle Préparatoire à l'ENSA El Jadida",
            description: "J'ai poursuivi mes études à l'École Nationale des Sciences Appliquées d'El Jadida, où j'ai suivi avec succès le Cycle Préparatoire. Cette étape m'a permis d'approfondir mes connaissances en sciences appliquées, d'affiner mes compétences analytiques et de me préparer à intégrer le programme d'ingénierie informatique et technologies émergentes.",
            date: "2021 à 2022",

        },
        {
            title: "Première Année en Ingénierie Informatique et Technologies Émergentes",
            description: "Actuellement, je suis en première année du programme d'Ingénierie Informatique et Technologies Émergentes à l'École Nationale des Sciences Appliquées d'El Jadida. Cette formation me permet d'acquérir une expertise approfondie dans les domaines de l'informatique, des technologies émergentes et de l'ingénierie logicielle, me préparant ainsi à relever les défis technologiques actuels et futurs.",
            date: 2023,
        }
    ];

    return (
        <div className='w-full my-[70px]  bg-[#192a51] text-[#eaf4f4]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div name='formation'>
                    <p className='text-4xl text-[#aaa1c8] font-bold inline '>FORMATION</p>
                </div>
                <VerticalTimeline>
                    {formations.map((formation, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element"
                            contentStyle={{ background: '#192a51', }}
                            contentArrowStyle={{ borderRight: '7px solid #aaa1c8 ' }}
                            iconStyle={{ background: '#aaa1c8' }}
                            date={formation.date}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: '#aaa1c8', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                {formation.title}
                            </h3>

                            <p style={{ color: '#fff', fontSize: '0.9rem' }}>{formation.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Formation;
