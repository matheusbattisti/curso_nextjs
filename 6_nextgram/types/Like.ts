import { User } from "./User";
import { Post } from "./Post";

export interface Like {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
  user?: User;
  post?: Post;
}
