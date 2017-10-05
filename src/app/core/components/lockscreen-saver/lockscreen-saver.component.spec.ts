import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockscreenSaverComponent } from './lockscreen-saver.component';

describe('LockscreenSaverComponent', () => {
  let component: LockscreenSaverComponent;
  let fixture: ComponentFixture<LockscreenSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockscreenSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockscreenSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
