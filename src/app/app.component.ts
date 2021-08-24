import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  snacks = [
    { name: "Schokolade", value: 540 },
    { name: "Banane", value: 89 },
    { name: "Brezel", value: 360 },
    { name: "Erdnüsse", value: 460 },
    { name: "Apfel", value: 75 }
  ];
}
