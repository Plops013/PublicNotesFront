import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicasComponent } from './publicas.component';

describe('PublicasComponent', () => {
  let component: PublicasComponent;
  let fixture: ComponentFixture<PublicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
