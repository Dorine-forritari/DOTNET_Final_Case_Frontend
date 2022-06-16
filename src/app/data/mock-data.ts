import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { User } from '../models/user.model';

// Mock data to test frontend without backend

export let mockProjects: Project[] = [
  {
    projectId: 1,
    title: 'Music project',
    description: 'Description of music project',
    theme: 'rock music',
    industry: 'Music',
    skills: [1, 2],
    link: 'https://github.com/1',
    screen: '',
    photo: '',
    progress: 'Founding',
  },
  {
    projectId: 2,
    title: 'Programming project',
    description: 'Description of music project',
    theme: 'computer store',
    industry: 'Web development',
    skills: [3, 4],
    link: 'https://github.com/2',
    screen: '',
    photo: '',
    progress: 'In progress',
  },
  {
    projectId: 3,
    title: 'Film project',
    description: 'Description of film project',
    theme: 'horror movie',
    industry: 'Movie',
    skills: [5, 6],
    link: 'https://github.com/3',
    screen: '',
    photo: '',
    progress: 'Stalled',
  },
  {
    projectId: 4,
    title: 'Game project',
    description: 'Description of game project',
    theme: 'Strategy, RPG',
    industry: 'Game development',
    skills: [7, 8],
    link: 'https://github.com/4',
    screen: '',
    photo: '',
    progress: 'Complete',
  },
];

export let mockUsers: User[] = [
  {
    userId: 1,
    name: 'Pim',
    password: 'password',
    email: 'pim@gmail.com',
    portfolio: 'this is my portfolio',
    description: 'this is my description',
    hidden: false,
    skills: [1, 2],
    projects: [2, 3],
  },
  {
    userId: 2,
    name: 'Leroy',
    password: 'password',
    email: 'leroy@gmail.com',
    portfolio: 'this is my portfolio',
    description: 'this is my description',
    hidden: true,
    skills: [3, 4],
    projects: [1, 2],
  },
  {
    userId: 3,
    name: 'Victor',
    password: 'password',
    email: 'victor@gmail.com',
    portfolio: 'this is my portfolio',
    description: 'this is my description',
    hidden: false,
    skills: [5, 6],
    projects: [1, 2],
  },
  {
    userId: 4,
    name: 'Dorine',
    password: 'password',
    email: 'dorine@gmail.com',
    portfolio: 'this is my portfolio',
    description: 'this is my description',
    hidden: false,
    skills: [2, 5],
    projects: [1, 2],
  },
];

export let mockSkills: Skill[] = [
  {
    id: 1,
    name: 'piano',
  },
  {
    id: 2,
    name: 'triangle',
  },
  {
    id: 3,
    name: 'C#',
  },
  {
    id: 4,
    name: 'JavaScript',
  },
  {
    id: 5,
    name: 'video editing',
  },
  {
    id: 6,
    name: 'directing',
  },
  {
    id: 7,
    name: '3D modelling',
  },
  {
    id: 8,
    name: 'Water modelling',
  },
];
