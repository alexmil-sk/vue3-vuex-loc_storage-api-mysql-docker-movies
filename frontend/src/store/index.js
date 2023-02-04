import {
	createStore
} from 'vuex';
import delete_icon from "../assets/icons/delete.png";
import download_icon from "../assets/icons/download.png";
import join_right from "../assets/mode/join_right_red.png";
import join_left from "../assets/mode/join_left_green.png";




const store = createStore({
	state() {
		return {
			deleteIcon: delete_icon,
			downloadIcon: download_icon,
			joinRight: join_right,
			joinLeft: join_left,
			modalNumberStart: 0,
			modalNumberEnd: 0,
			isChanged: false,
			isLoading: false,
			isOpenModal: false,
			films: [],
			chosenMovies: [],
		}
	},
	mutations: {

	}
});

export default store;