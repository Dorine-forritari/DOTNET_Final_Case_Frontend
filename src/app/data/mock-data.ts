import { Project } from "../models/project.model";
import { Skill } from "../models/skill.model";
import { User } from "../models/user.model";


// Mock data to test frontend without backend

export let mockProjects: Project[] = [
  {
    id: 1,
    title: "Music project",
    description: "Description of music project",
    theme: "rock music",
    industry: "music",
    skills: [
      { id: 1,
        name: "piano"},
      { id: 2,
        name: "triangle"}],
    link: "",
    screen: "",
    photo: "",
    progress: "",
  },
  {
    id: 2,
    title: "Programming project",
    description: "Description of music project",
    theme: "computer store",
    industry: "web development",
    skills: [
      { id: 3,
        name: "C#"},
      { id: 4,
        name: "JavaScript"}],
    link: "",
    screen: "",
    photo: "",
    progress: "",
  },
  {
    id: 3,
    title: "Film project",
    description: "Description of film project",
    theme: "horror movie",
    industry: "movie",
    skills: [
      { id: 5,
        name: "video editing"},
      { id: 6,
        name: "directing"}],
    link: "",
    screen: "",
    photo: "",
    progress: "",
  },
];

export let mockUsers: User[] = [
  {
    id: 1,
    name: "pim",
    password: "password",
    email: "pim@gmail.com",
    portfolio: "this is my portfolio",
    description: "this is my description",
    hidden: false,
    skills: [1,2],
    projects: [2,3]
  },
  {
    id: 2,
    name: "leroy",
    password: "password",
    email: "leroy@gmail.com",
    portfolio: "this is my portfolio",
    description: "this is my description",
    hidden: false,
    skills: [2,3],
    projects: [1,2]
  },
  {
    id: 3,
    name: "victor",
    password: "password",
    email: "victor@gmail.com",
    portfolio: "this is my portfolio",
    description: "this is my description",
    hidden: false,
    skills: [2,3],
    projects: [1,2]
  },
  {
    id: 4,
    name: "dorine",
    password: "password",
    email: "dorine@gmail.com",
    portfolio: "this is my portfolio",
    description: "this is my description",
    hidden: false,
    skills: [1,2],
    projects: [1,2]
  }
];

export let mockSkills: Skill[] = [
  {
    id: 1,
    name: "piano"
  },
  {
    id: 2,
    name: "triangle"
  },
  {
    id: 3,
    name: "C#"
  },
  {
    id: 4,
    name: "JavaScript"
  },
  {
    id: 5,
    name: "video editing"
  },
  {
    id: 6,
    name: "directing"
  }
]
