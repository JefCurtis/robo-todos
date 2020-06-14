<script>
  import TodoItem from "./todoItem.svelte";
  import Loading from "./Loading.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  export let uid;

  let text = "";
  let loading = true;
  let completedTodos = [];
  let incompleteTodos = [];

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  collectionData(query, "id")
    .pipe(startWith([]))
    .subscribe(todos => {
      completedTodos = todos.filter(t => t.complete);
      incompleteTodos = todos.filter(t => !t.complete);
      setTimeout(() => {
        loading = false;
      }, 1000);
    });

  const edit = event => {
    const { id, text } = event.detail;

    db.collection("todos")
      .doc(id)
      .update({ text });
  };

  const updateStatus = event => {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  };

  const removeItem = event => {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  };
</script>

{#if loading}
  <Loading />
{:else}
  {#if incompleteTodos.length > 0}
    <ul
      class="border border-gray-500 rounded shadow-md mb-4 p-1 bg-white text-xs">
      {#each incompleteTodos as todo}
        <TodoItem
          {...todo}
          on:remove={removeItem}
          on:toggle={updateStatus}
          on:edit={edit} />
      {/each}
    </ul>
  {:else}no tasks{/if}

  {#if completedTodos.length > 0}
    <ul
      class="border border-gray-500 rounded shadow-md mb-4 p-1 bg-white text-xs">
      <h1 class="text-gray-700 font-bold text-center text-sm">Completed</h1>
      {#each completedTodos as todo}
        <TodoItem
          {...todo}
          on:remove={removeItem}
          on:toggle={updateStatus}
          on:edit={edit} />
      {/each}
    </ul>
  {/if}
{/if}
