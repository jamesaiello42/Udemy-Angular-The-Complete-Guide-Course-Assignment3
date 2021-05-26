import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleValue = true;
  logClicks = [];
  onClickButton() {
    let temp = this.toggleValue;
    this.toggleValue = !temp;
    this.logClicks.push(new Date());
  }
}
