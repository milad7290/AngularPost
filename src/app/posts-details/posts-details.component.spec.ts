import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetailsComponent } from './posts-details.component';

describe('PostsDetailsComponent', () => {
  let component: PostsDetailsComponent;
  let fixture: ComponentFixture<PostsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
