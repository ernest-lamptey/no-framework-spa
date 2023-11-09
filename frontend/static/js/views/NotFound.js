import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("404");
    }

    async getHtml(){
        return `
            <h1>Missing Page</h1>
            <p>Sorry, we could not find that page</p>
            <p><a href="/" data-link>Home</a></p>
        `
    }
}