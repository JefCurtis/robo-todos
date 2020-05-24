<script>
  import Profile from "./profile.svelte"
  import { auth, googleProvider } from "./firebase"
  import { authState } from "rxfire/auth"

  let user
  const login = () => {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {$user}
  {#if $user}
    <Profile {...$user}></Profile>
    <hr>
    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      on:click={() => auth.signout()}
      >
      Sign out
    </button>
  {:else}
    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      on:click={login}
      >
      Sign in with Google
    </button>
  {/if}
</section>