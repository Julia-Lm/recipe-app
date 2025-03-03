export interface AppUrlParams {
  [key: string]: string;
}

export const toFormatSearchParams = (searchParams: URLSearchParams) => {
  const params: AppUrlParams = {};

  searchParams.forEach((value, key) => (params[key] = value));

  return params;
};
