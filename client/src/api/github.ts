const API_URL = "http://localhost:5000/api/import-repo";

export async function importRepository(repoUrl: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      repoUrl,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to import repository");
  }

  return response.json();
}