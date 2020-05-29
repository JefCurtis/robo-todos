<script>
  import Profile from "./profile.svelte"
  import { auth, googleProvider } from "./firebase"
  import { authState } from "rxfire/auth"

  let user = authState(auth);
  
  const login = () => {
    console.log("login");
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if $user}
    <Profile
      displayName={$user.displayName}
      photoURL={$user.photoURL}
      uid={$user.uid}
    >
    </Profile>
    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      on:click={() => auth.signOut()}
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