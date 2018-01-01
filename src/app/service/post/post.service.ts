import { Injectable } from '@angular/core';
import { IAddPost } from '../../interface/iadd-post.interface';
import { IListPosts } from '../../interface/ilist-posts';
import { IShowCount } from '../../interface/ishow-count.interface';
import { IReloadPosts } from '../../interface/ireload-posts.interface';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../model/post.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService implements IAddPost, IListPosts, IShowCount, IReloadPosts {
  private store$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  readonly posts$: Observable<Post[]> = this.store$;

  constructor(private httpClient: HttpClient) { }

  addPost(post: Post): void {
    this.httpClient
      .post<Post>('api/posts', post)
      .subscribe();

    this.store$.next([...this.store$.getValue(), post]);
  }

  reloadPosts(): void {
    this.httpClient
      .get<Post[]>('api/posts')
      .subscribe(posts => this.store$.next(posts));
  }
}
