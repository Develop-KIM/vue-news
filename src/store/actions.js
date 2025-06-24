import { fetchAskList, fetchJobsList, fetchNewsList } from "@/api";

export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then(response => {
				context.commit('SET_NEWS', response.data);
			})
			.catch(error => {
				console.error(error);
			})
	},
	FETCH_ASKS({ commit }) {
		fetchAskList()
			.then(({ data }) => {
				commit('SET_ASKS', data);
			})
			.catch(error => {
				console.error(error);
			})
	},
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => {
					commit('SET_JOBS', data);
				}
			)
			.catch(error => {
				console.error(error);
			})
	},
}
