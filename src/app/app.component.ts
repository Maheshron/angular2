import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h2>Welcome Mahesh to Learn {{tutorial}}</h2>
  <h1>Hello {{name}}</h1>
 <employee></employee>
<sample></sample>
  `,
})
export class AppComponent  {
tutorial:string = "Angular 2"
 name = 'Mahesh Kumar'; }
