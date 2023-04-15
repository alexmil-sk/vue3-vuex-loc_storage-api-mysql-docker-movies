<template>
	<div class="container-pop-card" :class="isClosed ? 'close' : ''">
		<div class="container-card">
			<div v-if="!contactsUserItem" class="loader">
				<LoaderComp />
			</div>
			<MemberCardInfo :contactsUserItem="contactsUserItem" v-else />
			<button @click="close">&times;</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import LoaderComp from "../components/LoaderComp/LoaderComp.vue";
import MemberCardInfo from "../components/MemberCardInfo/MemberCardInfo.vue";


export default {
	name: "TeamMemberCard",
	components: { LoaderComp, MemberCardInfo },
	props: ["id"],
	data() {
		return {
			isClosed: false
		}
	},
	mounted() {
		this.removeUserItemMutation();
		setTimeout(() => {
			this.getUserItemAction(this.$route.params.id);
		}, 1500);
	},
	computed: {
		...mapState('contacts', ['contactsUserItem']),
	},
	methods: {
		...mapActions('contacts', ['getUserItemAction']),
		...mapMutations('contacts', ['removeUserItemMutation']),
		close() {
			this.isClosed = true;
			setTimeout(() => {
				this.$router.push('/contacts')
			}, 2000);
		}
	}
};
</script>

<style lang="css" scoped>
.loader {
	margin: auto;
	transform: scale(1.2);
}

.container-pop-card {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: start;
	width: 100vw;
	min-height: 100%;
	right: 0;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, .75);
	animation: show-member 600ms linear forwards;
}

.container-pop-card.close {
	animation: hide-member 1000ms linear forwards;
}

.container-card {
	display: flex;
	justify-self: flex-end;
	min-width: 1000px;
	min-height: 471px;
	border: none;
	border: 3px solid rgba(255, 255, 255, 0.7);
	border-radius: 28px;
	padding: 15px;
	margin: 270px 0;

	opacity: 1;
	background-color: #1f2937;
}

.container-card button {
	width: 45px;
	height: 45px;
	position: absolute;
	top: 8px;
	right: 8px;
	font-size: 2rem;
	color: chocolate;
	background-color: #fff;
	border: 2px solid chocolate;
	border-radius: 50%;
	cursor: pointer;
	transition: all 400ms linear;
}

.container-card button:hover {
	background-color: chocolate;
	color: #fff;
}

.container-card button:active {
	background-color: #fff;
	color: chocolate;
}


@keyframes show-member {
	0% {
		transform: translateY(-100%);
	}

	100% {
		transform: translateY(0);
	}
}

@keyframes hide-member {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-100%);
	}
}
</style>

