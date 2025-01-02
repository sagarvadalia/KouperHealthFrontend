type User = {
  userName: string;
};

export const getUserApi = async (): Promise<{ user: User | undefined }> => {
  const response = await fetch("/api/user/currentUser", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  return response.json();
};
