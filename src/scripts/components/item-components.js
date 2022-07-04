class ItemElement extends HTMLElement {
	set food(food) {
		this._food = food;
		this.render();
	}

	render() {
		this.innerHTML = `
            <div class="list_item" tabindex="0">
                <img tabindex="0" class="list_item_thumb" src="${this._food["pictureId"]}" alt="${this._food["name"]} picture" title="${this._food["name"]}">
                <div tabindex="0" class="city">${this._food["city"]}</div>
                <div class="list_item_content">
                    <p class="list_item_rating" tabindex="0">
                        Rating : <span tabindex="-1" class="list_item_rating_value">${this._food["rating"]}<span>
                    </p>
                    <h1 class="list_item_title" tabindex="0">${this._food["name"]}</h1>
                    <div class="list_item_desc" tabindex="0">${this._food["description"].slice(0,150)}...</div>
                </div>
            </div>
        `;
	}
}

customElements.define("item-element", ItemElement);
