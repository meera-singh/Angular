import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'ACM';
  search= "";
  clickedTitle = ''
  onTitleClicked (message){
    this.clickedTitle = message;
  }
}
