<script>
  import Profile from "./profile.svelte";
  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user = authState(auth);

  const login = () => {
    auth.signInWithPopup(googleProvider);
  };
</script>

<section class="mb-4 mt-4">
  <div
    class="flex justify-between items-center border border-gray-500 px-4 py-3
    rounded shadow-md bg-white">
    {#if $user}
      <Profile
        displayName={$user.displayName}
        photoURL={$user.photoURL}
        uid={$user.uid} />
      <button
        class="btn bg-white hover:bg-gray-100 text-sm text-gray-700
        font-semibold py-1 px-3 border border-gray-500 rounded shadow"
        on:click={() => auth.signOut()}>
        Sign out
      </button>
    {:else}
      <button
        class="btn bg-white hover:bg-gray-100 text-sm text-gray-700
        font-semibold py-1 px-3 border border-gray-500 rounded shadow"
        on:click={login}>
        Sign in with Google
      </button>
    {/if}
  </div>
</section>
