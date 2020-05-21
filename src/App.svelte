<script>
	import { fade, fly } from "svelte/transition"
	export let name;
	
	let rando;
	$: result = Math.round(rando * 100)
	
	function setRando() {
		rando = Math.random()
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>This random number is {rando}</p>
	<p>Your score is {result}</p>

	{#if result > 75}
		<p transition:fade>Big winner! Top 25% 🎉🎉🎉🎉🎉</p>

	{:else if result > 50}
		<p>Decent, top 50%</p>
	{:else}
		<p
			in:fly={{ x: 100, duration: 500 }}
			out:fly={{ x: -100, duration: 500 }}
			>
			Loser 💩💩💩💩
		</p>
	{/if}
	
	<button on:click={setRando}>Random number</button>

	<input bind:value={rando}>
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