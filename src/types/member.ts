export interface SignupData {
  email: string;
  nickname: string;
  password: string;
  birthDate: string;
  imageUrl: string;
}

export interface ResetPasswordData {
  email: string;
  newPassword: string;
}
