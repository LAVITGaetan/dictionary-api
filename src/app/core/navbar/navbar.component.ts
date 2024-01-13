import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  theme: string = 'dark'

  toggleTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light'
      document.body.classList.add('dark-theme')
    }
    else {
      this.theme = 'dark'
      document.body.classList.remove('dark-theme')
    }
  }
}
