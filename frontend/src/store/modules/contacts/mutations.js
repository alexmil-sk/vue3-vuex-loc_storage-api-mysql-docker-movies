export default {
	getUsersMutation(getters, payload) {

		getters.isLoadingContacts = true;
		setTimeout(() => {
			getters.isLoadingContacts = false;
			getters.contactsUsers = payload;
		}, 2000);



	},
	getUserItemMutation(getters, payload) {
		getters.contactsUserItem = payload;
	},
	removeUserItemMutation(getters) {
		getters.contactsUserItem = null;
	}
}