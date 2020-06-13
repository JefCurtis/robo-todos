<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "svelte-awesome";
  import { check, times } from "svelte-awesome/icons";

  const dispatch = createEventDispatcher();
  export let text;

  const edit = () => dispatch("edit", { text });
  const close = () => dispatch("close");
</script>

<form
  class="flex flex-1 justify-between w-full py-2"
  on:submit|preventDefault={edit}>
  <textarea
    rows="3"
    type="text"
    class="bg-white focus:outline-none focus:shadow-outline border
    border-gray-500 text-sm rounded-lg py-1 px-2 block w-full appearance-none
    leading-normal flex-1 mr-2"
    autofocus
    bind:value={text} />
  <div class="flex flex-col">
    <button
      class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-1 inline
      px-3 border border-gray-500 rounded shadow mb-2"
      submit>
      <Icon class="align-text-bottom" data={check} />
    </button>
    <button
      class="bg-white hover:bg-gray-100 text-gray-700 font-semibold inline py-1
      px-3 border border-gray-500 rounded shadow"
      on:click={close}>
      <Icon class="align-text-bottom" data={times} />
    </button>
  </div>
</form>
