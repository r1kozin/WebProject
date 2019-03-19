import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabakComponent } from './tabak.component';

describe('TabakComponent', () => {
  let component: TabakComponent;
  let fixture: ComponentFixture<TabakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
