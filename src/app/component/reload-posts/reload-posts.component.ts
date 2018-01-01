import { Component } from '@angular/core';
import { IReloadPosts } from '../../interface/ireload-posts.interface';

@Component({
  selector: 'app-reload-posts',
  templateUrl: './reload-posts.component.html',
  styleUrls: ['./reload-posts.component.css']
})
export class ReloadPostsComponent {
  constructor(private postService: IReloadPosts) { }

  onReloadClick() {
    this.postService.reloadPosts();
  }
}
