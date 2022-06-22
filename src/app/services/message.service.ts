import { AuthService } from '@auth0/auth0-angular';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Message } from '../models/message.model';

const { messagesApiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class MessageService implements OnInit {
  private _messages: Message[] = [];

  get messages(): Message[] {
    return this._messages;
  }

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe((profile) =>
      sessionStorage.setItem('user', JSON.stringify(profile, null, 2))
    );
  }

  // Fetch whole chat
  public fetchChat(projectId: number): void {
    this.http.get<Message[]>(messagesApiUrl).subscribe({
      next: (response: any) => {
        this._messages = response.map((message: Message) => {
          return {
            ...message,
          };
        });
        this._messages = this._messages.filter(
          (message) => message.projectId === projectId
        );
      },
      error: () => {},
      complete: () => {},
    });
  }

  // Fetch single project based on ID
//   public fetchProject(projectId: number): void {
//     this.http
//       .get<ProjectResponse[]>(mockProjectApiUrl + '/' + projectId)
//       .subscribe({
//         next: (response: any) => {
//           console.log(response);
//         },
//         error: () => {},
//         complete: () => {},
//       });
//   }

//   // fetch all skillProject objects for a certain project
//   public getSkillProjects(projectId: number) {
//     return lastValueFrom(
//       this.http.get<SkillProject[]>(skillProjectsApiUrl + '/' + projectId)
//     );
//   }

//   // fetch a skill by skillId
//   public getSkill(skillId: number) {
//     return lastValueFrom(this.http.get<Skill>(skillsApiUrl + '/' + skillId));
//   }

// Post message to a project


//   // Add skill names to a project
//   public async fetchSkillsByProject(projectId: number): Promise<void> {
//     // first get the skillProject objects
//     const skillProjects = await this.getSkillProjects(projectId);
//     const skillNames = [];
//     // For every skillProject object, fetch the skill and push the skill.name to an array
//     for (let i = 0; i < skillProjects.length; i++) {
//       let skill = await this.getSkill(skillProjects[i].skillId);
//       skillNames.push(skill.name);
//     }
//     // Find the project in this._projects and add the skill names
//     for (let i = 0; i < this._projects.length; i++) {
//       if (this._projects[i].projectId === projectId) {
//         this._projects[i].skills = skillNames;
//       }
//     }
//     // After skills have been added, bring projectsForCatalogue up to date with _projects
//     this.projectsForCatalogue = this._projects;
//   }
}
