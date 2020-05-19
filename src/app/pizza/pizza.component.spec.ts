import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a title 'I love pizza!'`, async(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('I love pizza!');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
