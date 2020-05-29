<script>
  import TodoItem from "./todoItem"
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let uid;
  let text = "some task";

  const query = db.collection("todos").where("uid", "==", uid).orderBy("created");
  const todos = collectionData(query, "id").pipe(startWith([]));
</script>