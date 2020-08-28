import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }
    async getHtml() {
        return `
        <h1>Welcome Back, Ravi</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vitae quaerat dolores similique. Delectus animi repellendus ab provident numquam sequi harum earum, possimus obcaecati minus quae commodi facilis recusandae. Ipsa?
            </p>
            <a href= "/posts" data-link>Posts</a>
        `;
    }
}