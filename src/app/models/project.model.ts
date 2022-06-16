import { Skill } from './skill.model';

export interface Project {
  projectId: number;
  title: string;
  description: string;
  theme: string;
  industry: string;
  skills: any[];
  link: string;
  screen: string;
  photo: string;
  progress: string;
}

export interface ProjectResponse {
  project: Project;
}
