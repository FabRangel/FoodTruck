import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickenPage } from './chicken.page';

describe('ChickenPage', () => {
  let component: ChickenPage;
  let fixture: ComponentFixture<ChickenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
