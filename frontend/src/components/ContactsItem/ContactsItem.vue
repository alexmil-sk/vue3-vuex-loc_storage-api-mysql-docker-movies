<template>
	<div class="user-item">
		<div class="user-item-buttons">
			<button>{{ user.id }}</button>
			<router-link :to="{ path: `/contacts/${user.id}` }">
				<button>i</button>
			</router-link>
		</div>
		<img :src="user.avatar">
		<p>{{ user.first_name }}</p>
	</div>
</template>

<script>

export default {
	props: {
		user: Object
	},
}
</script>

<style lang="css" scoped>
.user-item {
	border: 3px solid var(--vt-c-text-dark-2);
	box-shadow: inset 0 0 15px 5px rgba(29, 54, 88, .9);
	padding: 15px;
	border-radius: 15px;
	background-color: #767c87;
}

.user-item img {
	width: 150px;
	border: 1px solid #fff;
	border-radius: 50%;
	background-color: slategray;
}

.user-item p {
	margin: 0 0 5px;
}

.user-item-buttons {
	display: flex;
	justify-content: space-between;
	height: 38px;
	width: 100%;
}

.user-item-buttons a button:nth-child(1),
.user-item-buttons>button {
	width: 38px;
	height: 38px;
	border-radius: 50%;
	font-size: 1.2rem;
}
.user-item-buttons>button {
	background-color: rgb(243, 190, 92);
}

.user-item-buttons a button:nth-child(1) {
	border: 2px solid blue;
	color: blue;
	font-weight: 900;
	background-color: lightblue;
	cursor: pointer;
}

.user-item-buttons a button:nth-child(1):hover {
	background-color: blue;
	color: #fff;
}

.user-item-buttons a button:nth-child(1):active {
	background-color: lightblue;
	color: blue;
}

/* .user-item-buttons a {

	width: 100%;
	height: 100px;
} */

/* .user-item-buttons a button {
	place-items: center;
	width: fit-content;
	background-color: rgb(108, 103, 116);
	border-radius: 99px;
	letter-spacing: 0.05em;
	border: 1px solid #42b983;
	text-decoration: none;
	text-transform: uppercase;
	margin: 0 !important;
	padding: 0.5rem 1.5rem;
	white-space: nowrap;
	font-weight: 700;
	outline: none;
	color: #fff;
	cursor: pointer;
	transition: all 0.22s;
} */

.user-item-buttons a button:hover {
	opacity: 0.8;
}

.user-item-buttons a button:active {
	box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>