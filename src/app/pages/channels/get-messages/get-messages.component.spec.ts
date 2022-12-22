import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMessagesComponent } from './get-messages.component';

describe('GetMessagesComponent', () => {
  let component: GetMessagesComponent;
  let fixture: ComponentFixture<GetMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
