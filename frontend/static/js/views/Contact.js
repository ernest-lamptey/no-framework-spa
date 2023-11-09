import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHtml(){
        return `
            <h1>Contact</h1>
            <p>This is the contact page</p>
            <p><a href="/" data-link>Home</a></p>
        `
    }
}