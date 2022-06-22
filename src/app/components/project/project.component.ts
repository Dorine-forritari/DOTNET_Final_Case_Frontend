import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Message } from 'src/app/models/message.model';
import { Project } from 'src/app/models/project.model';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
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

  get users(): User[] {
    return this.userService.users;
  }

  constructor(private messageService: MessageService, private userService: UserService,) {
    
  }

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
    
    this.messageService.fetchChat(this.selectedProject?.projectId!);
    this.userService.fetchAllUsers();
  }
}
