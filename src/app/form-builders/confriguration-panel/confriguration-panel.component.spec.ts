import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrigurationPanelComponent } from './confriguration-panel.component';

describe('ConfrigurationPanelComponent', () => {
  let component: ConfrigurationPanelComponent;
  let fixture: ComponentFixture<ConfrigurationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrigurationPanelComponent]
    });
    fixture = TestBed.createComponent(ConfrigurationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
