import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '@auth0/auth0-angular';
import { NgToastService } from 'ng-angular-popup';
import { EMPTY, empty } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { Project } from 'src/app/models/project.model';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss'],
})
export class ProjectChatComponent implements OnInit {
  @Input() selectedProject: Project | undefined;
  @Input() messages: Message[] = [];
  @Input() users: User[] = [];

  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  public getUser(userId: number): User {
    for (let i = 0; i < this.users.length; i++) {
      if (userId === this.users[i]['userId']) {
        return this.users[i];
      }
    }
    return EMPTY;
  }

  onSubmit(form: NgForm) {
    const projectId: number = this.selectedProject?.projectId!;

    if (!this.userService.user) {
      return;
    }

    this.messageService
      .createNewMessage(
        this.userService.user.userId,
        projectId,
        form.value.description
      )
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary:
              'Your message could not be delivered, did you forget to log in?',
          });
        },
        complete: () => {
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your message has been sent.',
          });
        },
      });
  }
}
