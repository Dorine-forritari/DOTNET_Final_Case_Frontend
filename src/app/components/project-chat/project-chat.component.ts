import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss'],
})
export class ProjectChatComponent implements OnInit {
  selectedProject: Project | undefined;
  chat: string[] = ['hello', 'oh hi there!', 'hello world!'];

  constructor() {}

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
  }
}
