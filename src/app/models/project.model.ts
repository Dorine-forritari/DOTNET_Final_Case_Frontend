import { Skill } from './skill.model';

export interface Project {
  id: number;
  title: string;
  description: string;
  theme: string;
  industry: string;
  skills: Skill[];
  link: string;
  screen: string;
  photo: string;
  progress: string;
}

export interface ProjectResponse {
  project: Project;
}
