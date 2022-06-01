import { Project } from "../models/project.model";
import { Skill } from "../models/skill.model";


// Mock data to test frontend without backend

export let mockProjects: Project[] = [
  {
    id: 1,
    title: "Music project",
    description: "Description of music project",
    theme: "",
    industry: "",
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
    theme: "",
    industry: "",
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
    theme: "",
    industry: "",
    skills: [
      { name: "video editing"},
      { name: "directing"}],
    link: "",
    screen: "",
    photo: "",
    progress: "",
  },
];

