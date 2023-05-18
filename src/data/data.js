import Afriquia from '../assets/projects/afriquia.jpg';
import Restaurant from '../assets/projects/restaurant.jpg';
import Habilitation from '../assets/projects/habilitation.jpg';
import Pokemon from '../assets/projects/pokemon.jpg';

export const data = [
  {
    id: 1,
    name: 'Recherche de Stations de Gaz',
    description: 'Application Python pour trouver le chemin le plus court entre les stations de service.',
    technologies: 'Python',
    image: Afriquia,
    github: '',
  },
  {
    id: 2,
    name: 'Gestion des Habilitations Universitaires',
    description: 'Application de gestion des habilitations universitaires développée avec Laravel.',
    technologies: 'Laravel',
    image: Habilitation,
    github: '',
  },
  {
    id: 3,
    name: 'Application Pokémon',
    description: 'Application mobile React Native pour explorer et découvrir des informations sur les Pokémon.',
    technologies: 'React Native',
    image: Pokemon,
    github: '',
  },
  {
    id: 4,
    name: 'Localisation des Restaurants',
    description: 'Application web React pour localiser les restaurants dans une zone donnée.',
    technologies: 'React',
    image: Restaurant,
    github: '',
    }
];
