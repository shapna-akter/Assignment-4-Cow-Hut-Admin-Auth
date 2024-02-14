export type ILoginUser = {
  phoneNumber: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  // needsPasswordChange?: boolean | undefined;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

// export type IVerifiedLoginUser = {
//   userId: string;
//   role: ENUM_USER_ROLE;
// };
