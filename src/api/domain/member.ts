import ApiClient from '../ApiClient';

const apiClient = new ApiClient('');

const signUp = async ({
  email,
  nickname,
  password,
  birthDate,
}: {
  email: string;
  nickname: string;
  password: string;
  birthDate: string;
}) => {
  apiClient.post({
    path: '/signup',
    body: { title: 'New Todo', completed: false },
  });
};

export default signUp;
