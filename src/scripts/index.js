import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";

import "./components/menu-list.js";
import "./components/list-components.js";
import "./components/jumbo-tron.js";

import dataRes from "../DATA.json";

const main = () => {
	const listElement = document.querySelector("list-element");
	listElement.foods = dataRes.restaurants;

	// Off Canvas
	const menu = document.querySelector("#menu");
	const hero = document.querySelector(".hero-section");
	const main = document.querySelector("main");
	const drawer = document.querySelector("#drawer");

	menu.addEventListener("click", function (event) {
		drawer.classList.toggle("open");
		event.stopPropagation();
	});

	hero.addEventListener("click", function () {
		drawer.classList.remove("open");
	});

	main.addEventListener("click", function () {
		drawer.classList.remove("open");
	});

};

document.addEventListener("DOMContentLoaded", main);
