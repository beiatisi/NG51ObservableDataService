import { Post } from '../model/post.model';

export abstract class IAddPost {
  abstract addPost(post: Post): void;
}
