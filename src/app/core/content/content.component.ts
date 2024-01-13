import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  wordData: any
  sharedData: any
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.sharedData.subscribe(data => {
      this.sharedData = data
    })

    this.api.setWord('keyboard')
  }
}
