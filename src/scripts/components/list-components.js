import "./item-components.js";

class ListElement extends HTMLElement {
	set foods(foods) {
		this._foods = foods;
		this.render();
	}

	render() {
		this.innerHTML = "";
		this._foods.forEach((food) => {
			const itemElement = document.createElement("item-element");

			itemElement.setAttribute("class", "content_item");
			itemElement.food = food;

			this.appendChild(itemElement);
		});
	}
}

customElements.define("list-element", ListElement);
