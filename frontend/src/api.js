const BASE_URL = "http://127.0.0.10:8010/api/v1/posts/";


// Get all posts
export async function getPosts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return await res.json();
}

// Get single post by ID
export async function getPost(id) {
  const res = await fetch(`${BASE_URL}${id}/`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return await res.json();
}

// Create new post
export async function createPost(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return await res.json();
}

// Update post
export async function updatePost(id, data) {
  const res = await fetch(`${BASE_URL}${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update post");
  return await res.json();
}

// Delete post
export async function deletePost(id) {
  const res = await fetch(`${BASE_URL}${id}/`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete post");
  return true;
}
