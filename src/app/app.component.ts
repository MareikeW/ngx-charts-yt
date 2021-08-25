import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-charts-yt';

  snacks = [
    { name: "Schokolade", value: 546 },
    { name: "Banane", value: 89 },
    { name: "Brezel", value: 380 },
    { name: "Erdnüsse", value: 567 },
    { name: "Apfel", value: 75 }
  ]
}
