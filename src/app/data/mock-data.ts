import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

// Mock data to test frontend without backend

export let mockProjects: Project[] = [
  {
    id: 1,
    title: 'Music project',
    description: 'Description of music project',
    theme: 'rock music',
    industry: 'Music',
    skills: [{ name: 'piano' }, { name: 'triangle' }],
    link: '',
    screen: '',
    photo: '',
    progress: '',
  },
  {
    id: 2,
    title: 'Programming project',
    description: 'Description of music project',
    theme: 'computer store',
    industry: 'Web development',
    skills: [{ name: 'C#' }, { name: 'JavaScript' }],
    link: '',
    screen: '',
    photo: '',
    progress: '',
  },
  {
    id: 3,
    title: 'Film project',
    description: 'Description of film project',
    theme: 'Horror movie',
    industry: 'Movie',
    skills: [{ name: 'video editing' }, { name: 'directing' }],
    link: '',
    screen: '',
    photo: '',
    progress: '',
  },
  {
    id: 4,
    title: 'Game project',
    description: 'Description of game project',
    theme: 'Strategy, RPG',
    industry: 'Game development',
    skills: [{ name: '3D character modelling' }, { name: 'Bug fixer' }],
    link: '',
    screen: '',
    photo: '',
    progress: '',
  },
];
