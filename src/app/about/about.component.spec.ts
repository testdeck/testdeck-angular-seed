import { suite, test } from '@testdeck/jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

@suite
class AboutComponentTests {

  private fixture: ComponentFixture<AboutComponent>;

  before() {
    this.fixture = TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(AboutComponent);
    this.fixture.detectChanges(); // initial binding
  }

  @test
  'should have skyblue <h2>'() {
    const h2: HTMLElement = this.fixture.nativeElement.querySelector('h2');
    const classname = h2.getAttribute('class');
    expect(classname).toBe('skyblue');
  }
}


/*
Adapted from the original source provided by Google:

Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
