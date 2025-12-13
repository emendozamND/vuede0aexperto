// src/services/apiClient.js

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts?_limit=5`)

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  return await response.json()
}
