import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  constructor(private api: ApiService) { }
  searchWord() {
    const input = document.getElementById('searchWord') as HTMLInputElement
    let newWord = input.value
    this.api.setWord(newWord)
  }
}
