import getUsers from "../../../utils/getUsers.js";
import getUserItem from "../../../utils/getUserItem.js";

export default {
	async getUsersAction({
		commit
	}) {
		const users = await getUsers();
		commit('getUsersMutation', users);
	},
	async getUserItemAction({
		commit
	}, id) {
		const user = await getUserItem(id);
		commit('getUserItemMutation', user);
	}
}