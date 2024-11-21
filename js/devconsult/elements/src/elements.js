import {Type} from 'main.core';
import {BitrixVue} from 'ui.vue3';
import {Dom, Loc} from 'main.core';
import ElementsList from "./components/ElementsList.js";
import ElementAddList from "./components/ElementAddForm.js";

export class Elements
{
	#application;
	constructor(rootNode): void
	{
		this.rootNode = document.querySelector(rootNode);
	}
	start(): void
	{
		const context = this;
		this.#application = BitrixVue.createApp({
			name: 'Elements',
			components: {
				ElementsList,
				ElementAddList
			},
			beforeCreate(): void
			{
				this.$bitrix.Application.set(context);
			},
			template: `
				<ElementAddList />
				<br/>
				<ElementsList />
			`
		});
		this.#application.mount(this.rootNode)
	}
}
