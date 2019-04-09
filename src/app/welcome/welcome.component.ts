import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '<h3 class="welcome"><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent implements OnInit {
  welcome: string;

  ngOnInit(): void {
    this.welcome = 'Welcome anonymous';
  }
}


/*
Adapted from the original source provided by Google:

Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
