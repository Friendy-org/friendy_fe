import { StackNavigationProp } from '@react-navigation/stack';
import { PostGetUpdateData } from './post';

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Explore: undefined;
  Feed: undefined;
  FeedCreate: undefined;
  FeedUpdate: { postData: PostGetUpdateData };
  FeedDetail: { postId: number };
  Map: undefined;
  DM: undefined;
  Profile: { memberId: number };
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
