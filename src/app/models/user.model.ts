import { Project } from './project.model';
import { Skill } from './skill.model';

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  portfolio: string;
  description: string;
  hidden: boolean;
  skills: number[];
  projects: number[];
}

export interface UserResponse {
  user: User;
}