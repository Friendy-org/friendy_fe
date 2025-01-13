import ApiClient from '../ApiClient';

const apiClient = new ApiClient('/email');

const sendEmail = async ({ email }: { email: string }) => {
  await apiClient.post({
    path: '/send-code',
    body: {
      email,
    },
  });
};

export default sendEmail;
