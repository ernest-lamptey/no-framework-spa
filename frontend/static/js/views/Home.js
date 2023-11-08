import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `
            <h1>Homepage</h1>
            <p>This is the homepage</p>
            <p><a href="/work" class="nav__link" data-link>Work</a></p>
        `
    }
}