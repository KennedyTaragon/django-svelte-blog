<script>
  import { onMount } from "svelte";
  import { getPosts } from "../api.js";

  let posts = [];
  let error = "";

  onMount(async () => {
    try {
      posts = await getPosts();
    } catch (err) {
      error = err.message;
    }
  });
</script>

{#if error}
  <p style="color:red;">{error}</p>
{:else if posts.length === 0}
  <p>Loading posts...</p>
{:else}
  <ul>
    {#each posts as post}
      <li>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <small>By: {post.author}</small>
      </li>
    {/each}
  </ul>
{/if}
