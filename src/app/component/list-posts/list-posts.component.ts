import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../model/post.model';
import { IPostService } from '../../interface/ipost-service.interface';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  posts: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) { }
}
