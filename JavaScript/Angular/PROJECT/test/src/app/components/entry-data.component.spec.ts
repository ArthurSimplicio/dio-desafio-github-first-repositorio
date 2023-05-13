import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDataComponent } from './entry-data.component';

describe('EntryDataComponent', () => {
  let component: EntryDataComponent;
  let fixture: ComponentFixture<EntryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryDataComponent]
    });
    fixture = TestBed.createComponent(EntryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
