import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavItemComponent } from './fav-item.component';

describe('FavItemComponent', () => {
  let component: FavItemComponent;
  let fixture: ComponentFixture<FavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
