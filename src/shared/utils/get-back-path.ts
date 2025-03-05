export const getBackPath = (state: Record<string, any> | null, basePath: string) => {
  if (!state) return basePath;

  const params = new URLSearchParams();

  Object.entries(state).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  const queryString = params.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
};
