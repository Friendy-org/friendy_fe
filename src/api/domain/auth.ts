import ApiClient from "../ApiClient";

const apiClient = new ApiClient('');

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await apiClient.post({
    path: '/auth/login',
    body: {
      email,
      password,
    },
  });
}

export { login };