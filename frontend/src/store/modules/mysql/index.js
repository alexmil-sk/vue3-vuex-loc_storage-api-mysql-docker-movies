import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
import edit_icon from "../../../assets/icons/edit.png";
import reload_icon from "../../../assets/icons/reload.png";


export default {
	namespaced: true,
	state() {
		return {
			editIcon: edit_icon,
			reloadIcon: reload_icon,
			isLoadingMysql: false,
			mysqlFilms: [	],
			mysqlFilmItem: {
				id: getters.mysqlFilms.length + 1,
				image: "",
				title: "",
				year: null,
				rating: null
			},
			mysqlFilmItemDefault: {
				id: null,
				image: "https://image.shutterstock.com/shutterstock/photos/405329956/display_1500/stock-vector-illustration-of-a-movie-items-on-fancy-background-405329956.jpg",
				title: "Default title",
				rating: 1,
				year: 1900
			},
		}
	},
	mutations,
	actions,
	getters
}