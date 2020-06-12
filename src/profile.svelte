<script>
  export let displayName;
  export let photoURL;
</script>

<div class="flex justify-center items-center">
  <img
    src={photoURL}
    alt="avatar"
    class="object-cover h-12 w-12 p-1 border-2 border-gray-600 rounded-full mr-2
    shadow-xl" />
  <p class="font-bold text-xl text-gray-700">{displayName}</p>
</div>
