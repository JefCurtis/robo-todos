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
    class="btn bg-white hover:bg-gray-100 text-gray-700 font-semibold py-1 px-3
    border border-gray-500 rounded shadow"
    on:click={remove}>
    <Icon class="align-text-bottom" data={check} />
  </button>
  <button
    class="btn bg-white hover:bg-gray-100 text-gray-700 font-semibold py-1 px-3
    border border-gray-500 rounded shadow"
    on:click={cancel}>
    <Icon class="align-text-bottom" data={times} />
  </button>
</div>
