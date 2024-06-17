import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMangaPageComponent } from './new-manga-page.component';

describe('NewMangaPageComponent', () => {
  let component: NewMangaPageComponent;
  let fixture: ComponentFixture<NewMangaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMangaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMangaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
