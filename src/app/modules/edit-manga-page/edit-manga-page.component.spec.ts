import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMangaPageComponent } from './edit-manga-page.component';

describe('EditMangaPageComponent', () => {
  let component: EditMangaPageComponent;
  let fixture: ComponentFixture<EditMangaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMangaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMangaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
