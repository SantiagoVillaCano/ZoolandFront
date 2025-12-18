import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketesComponent } from './ticketes.component';

describe('TicketesComponent', () => {
  let component: TicketesComponent;
  let fixture: ComponentFixture<TicketesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
