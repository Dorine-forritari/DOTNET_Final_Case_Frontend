import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { Project } from 'src/app/models/project.model';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  selectedProject: Project | undefined;

  get messages(): Message[] {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService) {
    
  }

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
    
    this.messageService.fetchChat(this.selectedProject?.projectId!);
  }
}
