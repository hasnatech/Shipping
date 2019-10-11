import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundNewComponent } from './inbound-new.component';

describe('InboundNewComponent', () => {
  let component: InboundNewComponent;
  let fixture: ComponentFixture<InboundNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
