import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadPostsComponent } from './reload-posts.component';

describe('ReloadPostsComponent', () => {
  let component: ReloadPostsComponent;
  let fixture: ComponentFixture<ReloadPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloadPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
