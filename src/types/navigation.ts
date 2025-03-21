import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Explore: undefined;
  Feed: undefined;
  FeedCreate: undefined;
  FeedDetail: { postId: number };
  Map: undefined;
  DM: undefined;
  Profile: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
