<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  
  export let text;
  export let complete;
  
  const dispatch = createEventDispatcher();

  const remove = () => {
    dispatch("remove", { id });
  };
  
  const toggleStatus = () => {
    const newStatus = !complete;
    dispatch("toggle", { id, newStatus });
  }
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }
</style>

<li in:fly="{{ x: 900, duration: 500 }}">
  <span class:complete>{text}</span>
  <button on:click={remove}>🗑</button>
  {#if complete}
    <button on:click={toggleStatus}>❌</button>
  {:else}
    <button on:click={toggleStatus}>✅</button>
  {/if}

</li>