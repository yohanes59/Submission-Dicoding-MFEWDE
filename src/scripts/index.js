import "regenerator-runtime"; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "../styles/index.scss";

import "./views/components/component";
import App from "./views/app";
import swRegister from './utils/sw-register';

const app = new App({
	menu: document.querySelector("#menu a"),
	hero: document.querySelector(".hero-section"),
	main: document.querySelector("main"),
	drawer: document.querySelector("#drawer"),
	content: document.querySelector('#maincontent'),
});

window.addEventListener("hashchange", () => {
	app.renderPage();
});

window.addEventListener("load", () => {
	app.renderPage();
	swRegister();
});
