<template>
	<div class="card-main">
		<div class="card-container">
			<!-- Avatar -->
			<div class="card-one">
				<img :src="contactsUserItem.avatar" alt="avatar">
				<div class="card-ul-list-container">
					<ul>
						<li>Id:</li>
						<li>Gender:</li>
					</ul>
					<ul>
						<li>{{ contactsUserItem.id }}</li>
						<li>{{ contactsUserItem.gender }}</li>
					</ul>
				</div>



			</div>
			<!-- Personal & Company`s Info -->
			<div class="card-two">
				<!--  -->
				<h2>Personal Info</h2>
				<div class="card-ul-list-container">
					<ul>
						<li>First Name:</li>
						<li>Last Name:</li>
						<li>Birthdate: </li>
						<li>Phone:</li>
					</ul>
					<ul>
						<li>{{ contactsUserItem.first_name }}</li>
						<li>{{ contactsUserItem.last_name }}</li>
						<li>{{ contactsUserItem.birthdate }}</li>
						<li>{{ contactsUserItem.phone }}</li>
					</ul>
				</div>
				<hr />
				<!--  -->
				<h2>Company Info</h2>
				<div class="card-ul-list-container">
					<ul>
						<li>Company Name:</li>
						<li>Department:</li>
						<ul>Job Title:</ul>
						<li>Email:</li>
					</ul>
					<ul>
						<li>{{ contactsUserItem.company_name }}</li>
						<li>{{ contactsUserItem.department }}</li>
						<li>{{ contactsUserItem.job_title }}</li>
						<li>{{ contactsUserItem.email }}</li>
					</ul>
				</div>
			</div>
			<!-- Address -->
			<div class="card-three">
				<h2>Address:</h2>
				<div v-for="addr in contactsUserItem.address" class="card-ul-list-container">
					<ul>
						<li v-for="(key) in Object.keys(addr)">{{ key }} :</li>
					</ul>
					<ul>
						<li v-for="(value) in Object.values(addr)">{{ value }}</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "MemberCardInfo",
	props: {
		contactsUserItem: Object
	},
}
</script>

<style lang="css" scoped>
.card-main {
	display: flex;
	flex-direction: column;
	flex: 1 1 100%;
	min-height: 430px;
	border-radius: 25px;
	border: none;
	color: var(--vt-c-white);
	text-align: center;
	font-weight: 900;

	animation: show-member 600ms linear forwards;

}

.card-container {
	display: flex;
	flex-direction: row;
	flex: 1 1 100%;
}

.card-container span {
	color: lightgreen;
}


.card-one,
.card-two,
.card-three {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 10px;
}

.card-one {
	flex: 1 1 20%;
}

.card-two {
	flex: 1 1 40%;
}

.card-three {
	flex: 1 1 25%;

}


.card-one img {
	border-radius: 10px;
	border: 1px solid #fff;
	margin-bottom: 20px;
}

.card-one,
.card-two {
	text-align: left;
}

.card-three {
	border-left: 1px solid #fff;
}

.card-ul-list-container {
	display: flex;
	flex: 1 1 100%;
	justify-content: flex-start;
	gap: 20px;
}

.card-ul-list-container ul {
	display: flex;
	flex-direction: column;
	padding: 0;
	text-align: left;
}

.card-ul-list-container>ul {
	flex: 0 0 40%;
}

.card-ul-list-container ul:nth-child(2) {
	flex: 0 0 55%;
	color: lightgreen;
}



@keyframes show-member {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
}
</style>