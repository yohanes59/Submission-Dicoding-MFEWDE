class JumboTron extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        	<div class="hero-section">
				<div class="hero-text">
					<h1>Resto Book</h1>
					<h2>Discover the best of the best restaurants you want to visit</h2>
				</div>
			</div>
        `;
	}
}

customElements.define("jumbo-tron", JumboTron);
