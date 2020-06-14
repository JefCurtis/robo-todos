<script>
  import Icon from "svelte-awesome";
  import { createEventDispatcher } from "svelte";
  import { pencil, refresh, check, trash } from "svelte-awesome/icons";
  const dispatch = createEventDispatcher();

  const toggleDelete = () => dispatch("toggleDelete");
</script>

<button
  class="text-red-700 outline-none appearance-none px-3 py-1 border rounded
  border-gray-300"
  on:click={toggleDelete}>
  <Icon data={trash} />
</button>
