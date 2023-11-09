import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Work");
    }

    async getHtml(){
        return `
            <h1>Work</h1>
            <p>This is the work page</p>
            <p><a href="/contact" data-link>Contact</a></p>
        `
    }
}