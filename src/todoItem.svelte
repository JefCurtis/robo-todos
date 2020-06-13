<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { trash, check, refresh, pencil, times } from "svelte-awesome/icons";
  import Icon from "svelte-awesome";

  export let id;
  export let text;
  export let complete;
  let editing = false;
  let deleting = false;
  let value = "";

  const dispatch = createEventDispatcher();

  const toggleConfirm = () => {
    deleting = true;
  };

  const remove = () => {
    deleting = true;
    dispatch("remove", { id });
  };

  const toggleStatus = () => {
    const newStatus = !complete;
    dispatch("toggle", { id, newStatus });
  };

  const toggleEdit = () => {
    editing = !editing;
    value = "";
  };

  const edit = () => {
    dispatch("edit", { id, text });
    editing = false;
  };
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }
</style>

<li
  class="pr-2 pl-3 py-1 flex justify-between items-center border m-2 shadow-sm
  rounded text-left"
  in:fly={{ x: 900, duration: 500 }}>
  {#if editing}
    <form
      class="flex flex-1 justify-between w-full py-2"
      on:submit|preventDefault={edit}>
      <textarea
        rows="3"
        type="text"
        class="bg-white focus:outline-none focus:shadow-outline border
        border-gray-500 text-sm rounded-lg py-1 px-2 block w-full
        appearance-none leading-normal flex-1 mr-2"
        autofocus
        bind:value={text} />
      <div class="flex flex-col">
        <button
          class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-1
          inline px-3 border border-gray-500 rounded shadow mb-2"
          submit>
          <Icon class="align-text-bottom" data={check} />
        </button>
        <button
          class="bg-white hover:bg-gray-100 text-gray-700 font-semibold inline
          py-1 px-3 border border-gray-500 rounded shadow"
          on:click={toggleEdit}>
          <Icon class="align-text-bottom" data={times} />
        </button>
      </div>
    </form>
  {:else}
    <span
      class="{complete ? 'complete' : ''} text-gray-700 font-bold truncate
      flex-1 pr-6">
      {text}
    </span>
    <div>
      {#if deleting}
        <button
          class="btn bg-white hover:bg-gray-100 text-gray-700 font-semibold py-0
          px-3 border border-gray-500 rounded shadow"
          on:click={remove}>
          <Icon class="align-text-bottom" data={check} />
        </button>
        <button
          class="btn bg-white hover:bg-gray-100 text-gray-700 font-semibold py-0
          px-3 border border-gray-500 rounded shadow"
          on:click={() => (deleting = !deleting)}>
          <Icon class="align-text-bottom" data={times} />
        </button>
      {:else}
        <button
          class="text-xl text-blue-700 mr-2 outline-none appearance-none "
          on:click={toggleEdit}>
          <Icon data={pencil} />
        </button>
        {#if complete}
          <button
            class="text-xl text-blue-700 mr-2 outline-none appearance-none"
            on:click={toggleStatus}>
            <Icon data={refresh} />
          </button>
        {:else}
          <button
            class="text-xl text-green-700 mr-2 outline-none appearance-none"
            on:click={toggleStatus}>
            <Icon data={check} />
          </button>
        {/if}
        <button
          class="text-xl text-red-700 mr-2 outline-none appearance-none"
          on:click={() => (deleting = !deleting)}>
          <Icon data={trash} />
        </button>
      {/if}
    </div>
  {/if}
</li>
