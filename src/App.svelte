<script>
import Child from "./child.svelte";
import Login from "./login.svelte"

const user = {
	userId: 1234,
	name: "Jef C",
	email: "jef@email.com",
}
</script>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>

<main>	
<Login></Login>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>