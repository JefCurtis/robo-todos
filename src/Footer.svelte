<script>
  import { db } from "./firebase";

  export let uid;
  let text = "";
  let empty = false;

  const add = () => {
    if (text) {
      db.collection("todos").add({
        uid,
        text,
        complete: false,
        created: Date.now()
      });
      text = "";
    } else {
      empty = true;
      setTimeout(() => (empty = false), 1500);
    }
  };
</script>

<style>
  .empty {
    animation: flash linear 0.75s 2 forwards;
  }

  @keyframes flash {
    50% {
      border: 2px solid red;
    }
  }
</style>

<form
  class="flex p-4 border border-gray-500 shadow-md rounded bg-white sticky
  bottom-0"
  on:submit|preventDefault={add}>
  <input
    class="{empty ? 'empty' : ''} invalid bg-white focus:outline-none
    focus:shadow-outline border border-gray-500 rounded-lg py-1 px-2 block
    w-full appearance-none leading-normal flex-1 mr-4"
    autofocus
    bind:value={text}
    type="text"
    placeholder="Add a new task.." />
  <button
    class="bg-white hover:bg-gray-100 text-sm text-gray-700 font-semibold py-1
    px-3 border border-gray-500 rounded shadow"
    submit>
    Add
  </button>
</form>
