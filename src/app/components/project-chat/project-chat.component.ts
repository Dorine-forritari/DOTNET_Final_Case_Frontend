import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '@auth0/auth0-angular';
import { EMPTY, empty } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { Project } from 'src/app/models/project.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss'],
})
export class ProjectChatComponent implements OnInit {
  selectedProject: Project | undefined;
  @Input() messages: Message[] = [];
  @Input() users: User[] = [];

  constructor(private messageService : MessageService) {}

  ngOnInit(): void {
  }

  public getUser(userId : number) : User{
    for(let i = 0; i < this.users.length; i++){
      if(userId === this.users[i]['userId']){
        return this.users[i];
      }
    }
    return EMPTY;
  }

  onSubmit(form: NgForm) {
    //this.messageService.createNewMessage(form.value);
    console.log(form.value);
  }
}
