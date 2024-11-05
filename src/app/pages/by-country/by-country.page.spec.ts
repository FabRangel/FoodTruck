import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByCountryPage } from './by-country.page';

describe('ByCountryPage', () => {
  let component: ByCountryPage;
  let fixture: ComponentFixture<ByCountryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
