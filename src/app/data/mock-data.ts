import { Project } from "../models/project.model";
import { Skill } from "../models/skill.model";


// Mock data to test frontend without backend

export let mockProjects: Project[] = [
  {
    id: 1,
    title: "Music project",
    description: "Description of music project",
    theme: "rock music",
    industry: "music",
    skills: [
      { name: "piano"},
      { name: "triangle"}],
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
      { name: "C#"},
      { name: "JavaScript"}],
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
      { name: "video editing"},
      { name: "directing"}],
    link: "",
    screen: "",
    photo: "",
    progress: "",
  },
];

