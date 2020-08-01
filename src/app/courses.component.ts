import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
      <input [(ngModel)]= "email" (keyup.enter)="onkeyup()"/>
`

})
export class       CoursesComponent{
    email = "me@example.com";

    onkeyup() {
        console.log(this.email);
    }
}