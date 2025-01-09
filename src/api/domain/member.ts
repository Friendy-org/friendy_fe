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
  const response = await apiClient.post({
    path: '/signup',
    body: {
      email,
      nickname,
      password,
      birthDate,
    },
  });

  return response;
};

export default signUp;
