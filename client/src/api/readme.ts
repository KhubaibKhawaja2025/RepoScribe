const API_URL = "http://localhost:5000/api/readme";

export async function generateReadme(data: unknown) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to generate README");
  }

  return response.json();
}