<script>
  import Icon from "svelte-awesome";
  import { createEventDispatcher } from "svelte";
  import { check, times } from "svelte-awesome/icons";
  const dispatch = createEventDispatcher();

  const cancel = () => dispatch("cancel");
  const remove = () => dispatch("remove");
</script>

<div>
  <button
    class="text-gray-700 mr-1 outline-none appearance-none px-3 py-1 border
    rounded border-gray-300"
    on:click={remove}>
    <Icon class="align-text-bottom" data={check} />
  </button>
  <button
    class="text-gray-700 outline-none appearance-none px-3 py-1 border rounded
    border-gray-300"
    on:click={cancel}>
    <Icon class="align-text-bottom" data={times} />
  </button>
</div>
