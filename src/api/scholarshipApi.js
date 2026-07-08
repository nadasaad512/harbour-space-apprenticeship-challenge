

const API_URL = "http://localhost:3001/api/scholarship";
export async function getScholarship( ) {
  try {
const response = await fetch(API_URL, {
  headers: {
    "Accept": "application/json",
  },
});
    if (!response.ok) {
      throw new Error(`Failed to fetch scholarship: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching scholarship:", error);
    throw error;
  }
}
