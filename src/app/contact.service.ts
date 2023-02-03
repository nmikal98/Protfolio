import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/nam';

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      (response: any) => {
        if (response) {
          return response;
        }
      },
      (error: any) => {
        return error;
      }
    );
  }
}
