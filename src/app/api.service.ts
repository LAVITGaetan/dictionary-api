import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en'
  constructor(private http: HttpClient) { }
  sharedData: Subject<any> = new Subject();

  getWord(word: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${word}`)
  }

  setWord(word: string) {
    this.getWord(word).subscribe(data => {
      this.sharedData.next(data[0])
    })
  }
}
