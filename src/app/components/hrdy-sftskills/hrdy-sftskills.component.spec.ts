import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdySftskillsComponent } from './hrdy-sftskills.component';

describe('HrdySftskillsComponent', () => {
  let component: HrdySftskillsComponent;
  let fixture: ComponentFixture<HrdySftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrdySftskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrdySftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
