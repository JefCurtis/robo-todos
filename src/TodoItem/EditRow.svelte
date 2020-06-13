<script>
  import Icon from "svelte-awesome";
  import { createEventDispatcher } from "svelte";
  import { pencil, refresh, check, trash } from "svelte-awesome/icons";
  const dispatch = createEventDispatcher();

  export let complete;
  const toggleEdit = () => dispatch("toggleEdit");
  const toggleComplete = () => dispatch("toggleComplete");
  const toggleDelete = () => dispatch("toggleDelete");
</script>

<button
  class="text-xl text-blue-700 mr-2 outline-none appearance-none "
  on:click={toggleEdit}>
  <Icon data={pencil} />
</button>
{#if complete}
  <button
    class="text-xl text-blue-700 mr-2 outline-none appearance-none"
    on:click={toggleComplete}>
    <Icon data={refresh} />
  </button>
{:else}
  <button
    class="text-xl text-green-700 mr-2 outline-none appearance-none"
    on:click={toggleComplete}>
    <Icon data={check} />
  </button>
{/if}
<button
  class="text-xl text-red-700 mr-2 outline-none appearance-none"
  on:click={toggleDelete}>
  <Icon data={trash} />
</button>
