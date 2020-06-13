<script>
  import Login from "./login.svelte";
  import TodoList from "./todoList.svelte";
  import Footer from "./Footer.svelte";
  import { authState } from "rxfire/auth";
  import { auth } from "./firebase";

  let user = authState(auth);
</script>

<style>
  .body {
    max-width: 700px;
    min-width: 375px;
  }
</style>

<svelte:head>
  <link
    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
    rel="stylesheet" />
</svelte:head>

<div class="body mx-auto">
  <main class="mx-2 w-full">
    <Login />
    {#if $user}
      <TodoList uid={$user.uid} />
      <Footer uid={$user.uid} />
    {/if}
  </main>
</div>
