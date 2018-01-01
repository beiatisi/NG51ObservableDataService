import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../model/post.model';
import { IListPosts } from '../../interface/ilist-posts';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.postService.posts$;

  constructor(private postService: IListPosts) { }

  ngOnInit(): void {
    this.postService.reloadPosts();
  }
}
