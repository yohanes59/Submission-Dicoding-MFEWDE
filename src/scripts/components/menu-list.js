class MenuList extends HTMLElement {
    connectedCallback() {
		this.render();
	}

    render() {
		this.innerHTML = `
        <!-- Mobile Navbar -->
        <div class="menu">
            <div class="burger" id="menu"><a tabindex="0" href="#">&#9776;</a></div>
            <div class="logo">Resto Book</div>
            <div class="logo">&nbsp;</div>
        </div>
        <nav id="drawer">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a target="_blank" href="https://github.com/yohanes59">About Us</a></li>
            </ul>
        </nav>
        <!-- Desktop Navbar -->
        <nav>
            <a class="logo" href="">Resto Book</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a target="_blank" href="https://github.com/yohanes59">About Us</a></li>
            </ul>
        </nav>
    `;
	}
}

customElements.define("menu-list", MenuList);