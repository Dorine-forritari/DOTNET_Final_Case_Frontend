import { AuthService } from '@auth0/auth0-angular';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';

const { messagesApiUrl, apiKey } = environment;

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

  // Post message to a project
  public createNewMessage(userId: number, projectId: number, description: string): Observable<Message> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json',
      'x-api-key': apiKey,
    });
    const message = {
      "description": description,
      "userId": userId,
      "projectId": projectId,
    };
    console.log(description);
    console.log(message);
    return this.http.post<Message>(messagesApiUrl, message, { headers });
  }
}
