import { suite, test } from '@testdeck/jasmine';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

@suite
class WelcomeComponentTests {

  private fixture: ComponentFixture<WelcomeComponent>;

  before() {
    this.fixture = TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        WelcomeComponent
      ]
    }).get(WelcomeComponent);
  }

  @test
  'should not have a welcome message after construction'() {
    expect((this.fixture as any).welcome).toBeUndefined();
  }

  @test
  'should have a welcome message after Angular calls ngOnInit'() {
    (this.fixture as any).ngOnInit();
    expect((this.fixture as any).welcome).toContain('anonymous');
  }
}


/*
Adapted from the original source provided by Google:

Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
