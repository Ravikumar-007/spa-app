import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Post');
    }
    async getHtml() {
        return `
        <h1>Post</h1>
            <p> You are vieing post</p>
            <a href= "/" data-link>Dashboard</a>
        `;
    }
}