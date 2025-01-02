export const getAllPatients = async () => {
  const response = await fetch("/api/patient", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
