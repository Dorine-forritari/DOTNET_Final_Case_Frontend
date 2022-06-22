import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss'],
})
export class ProjectChatComponent implements OnInit {
  selectedProject: Project | undefined;
  @Input() messages: Message[] = [];


  constructor() {}

  ngOnInit(): void {
  }
}
