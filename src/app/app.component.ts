import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Simple filter';

  searchText: string;

  characters = [
    { name: 'Item 1', checked: false },
    { name: 'Item 2', checked: true },
    { name: 'Item 3', checked: false }
  ];
}
