<template>
	<div class="container-contacts">
		<div class="container-content">
			<h1>Contacts Page</h1>
			<div class="container-users">

				<div v-if="$store.state.contacts.isLoadingContacts" class="loader">
					<LoaderComp />
				</div>

				<div v-for="user in contactsUsers?.filter(i => i.id < 15)" :key="user.id" v-else>
					<ContactsItem :user="user" />
				</div>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ContactsItem from "../components/ContactsItem/ContactsItem.vue";
import LoaderComp from '../components/LoaderComp/LoaderComp.vue';


export default {
	name: "Contacts",
	components: { ContactsItem, LoaderComp },
	mounted() {
		this.getUsersAction()
	},
	computed: {
		...mapState('contacts', ['contactsUsers']),
	},
	methods: {
		...mapActions('contacts', ['getUsersAction'])
	}
}
</script>

<style lang="css" scoped>
.container-contacts {
	display: flex;
	min-height: 300px;
	min-width: 420px;
	border: 5px solid rgba(255, 255, 255, 0.7);
	border-radius: 40px;
	box-shadow: 0px 0px 10px 15px rgba(225, 229, 234, 0.3);
	padding: 25px;
	background-color: #1f2937;
}

.container-content {
	display: flex;
	flex-direction: column;
	flex: 1 1 50%;
	min-height: 430px;
	height: 100%;
	border-radius: 25px;
	border: 3px solid rgba(255, 255, 255, 0.8);
	box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
	padding: 25px;
	color: var(--vt-c-white);
	text-align: center;
	font-weight: 900;
	margin: 0 10px;
}

.container-users {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex: 0 0 100%;
	gap: 10px;
}

.loader {
	margin: 120px auto;
	transform: scale(1.2);
}
</style>
