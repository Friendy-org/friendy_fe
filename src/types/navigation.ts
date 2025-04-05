import { StackNavigationProp } from '@react-navigation/stack';
import { PostGetUpdateData } from './post';

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Explore: undefined;
  Post: undefined;
  PostCreate: undefined;
  PostUpdate: { postData: PostGetUpdateData };
  PostDetail: { postId: number };
  Map: undefined;
  DM: undefined;
  Profile: { memberId: number };
  ProfileUpdate: { email: string };
  Setting: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
