<script>
  import { fade, fly, slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import {
    trash,
    check,
    refresh,
    pencil,
    times,
    chevronDown
  } from "svelte-awesome/icons";
  import Icon from "svelte-awesome";
  import EditRow from "./TodoItem/EditRow.svelte";
  import EditTextForm from "./TodoItem/EditTextForm.svelte";
  import DeleteItem from "./TodoItem/DeleteItem.svelte";

  export let id;
  export let text;
  export let complete;
  let isEditRowOpen = false;
  let editing = false;
  let deleting = false;
  let value = "";

  const dispatch = createEventDispatcher();

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

  const toggleEditRow = () => {
    isEditRowOpen = !isEditRowOpen;
  };

  const edit = event => {
    const { text } = event.detail;
    dispatch("edit", { id, text });
    editing = false;
  };
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }
  li {
    min-height: 40px;
  }
</style>

<li
  class="pr-2 pl-3 py-1 flex flex-col justify-between items-center border m-2
  shadow-sm rounded text-left"
  in:fly={{ x: 900, duration: 500 }}>
  {#if editing}
    <EditTextForm {text} on:edit={edit} on:close={() => editing == !editing} />
  {:else}
    <div class="flex justify-between w-full items-center">
      <span
        class="{complete ? 'complete' : ''} text-gray-700 font-bold truncate
        flex-1 pr-6">
        {text}
      </span>
      <button
        class="text-gray-700 py-1 px-2 align-text-top focus:outline-none"
        on:click={toggleEditRow}>
        <Icon data={chevronDown} />
      </button>
    </div>
    {#if isEditRowOpen}
      <div
        in:slide
        out:slide
        class="{deleting ? 'justify-end' : 'justify-between'} flex w-full
        items-center mb-1 mt-1">
        {#if deleting}
          <DeleteItem
            on:cancel={() => (deleting = !deleting)}
            on:remove={remove} />
        {:else}
          <EditRow
            on:toggleDelete={() => (deleting = !deleting)}
            on:toggleComplete={toggleStatus}
            on:toggleEdit={toggleEdit} />
        {/if}
      </div>
    {/if}
  {/if}
</li>
