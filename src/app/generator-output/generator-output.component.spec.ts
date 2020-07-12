import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorOutputComponent } from './generator-output.component';

describe('GeneratorOutputComponent', () => {
  let component: GeneratorOutputComponent;
  let fixture: ComponentFixture<GeneratorOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
