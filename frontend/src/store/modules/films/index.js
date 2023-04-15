import delete_icon from "../../../assets/icons/delete.png";
import download_icon from "../../../assets/icons/download.png";
import join_right from "../../../assets/mode/join_right_red.png";
import join_left from "../../../assets/mode/join_left_green.png";
import logo from "../../../assets/logo/logo.png";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
	namespaced: true,
	state() {
		return {
			deleteIcon: delete_icon,
			downloadIcon: download_icon,
			joinRight: join_right,
			joinLeft: join_left,
			logo: logo,
			modalNumberStart: null,
			modalNumberEnd: null,
			isChanged: false,
			isLoading: false,
			isOpenModal: false,
			films: [],
			chosenMovies: [],
		}
	},
	mutations,
	actions,
	getters
};
