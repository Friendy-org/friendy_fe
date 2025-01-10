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
  await apiClient.post({
    path: '/signup',
    body: {
      email,
      nickname,
      password,
      birthDate,
    },
  });
};

export default signUp;
