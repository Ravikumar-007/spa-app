import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Viewing Post');
    }
    async getHtml() {
        console.log(this.params.id);
        return `
        <h1>Post View</h1>
            <p> You are vieing post with params ${this.params.id}</p>
            <a href= "/" data-link>Dashboard</a>
        `;
    }
}