import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from "@/views/ItemView.vue";
import UserView from "@/views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
	// URL 해시(#) 제거
	mode: "history",
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			// Path: url 주소
			path: '/news',
			// component: url 주소로 갔을 때 표시될 컴포넌트
			component: NewsView,
		},
		{
			path: '/ask',
			component: AskView,
		},
		{
			path: '/jobs',
			component: JobsView,
		},
		{
			path: '/item',
			component: ItemView,
		},
		{
			path: '/user',
			component: UserView,
		}
	]
});
