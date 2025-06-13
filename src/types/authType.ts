export type ApiErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export type ForgotPasswordDTO = {
  previewUrl: string;
};
