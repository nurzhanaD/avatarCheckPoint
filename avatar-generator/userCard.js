const template = document.createElement('template');
template.innerHTML = `
    <style>
    h3{
        color: lightblue;
    }
    avatar{
        width:100px;
        height:100px;
        background-color:purple;
    }
    </style>
    <div class="user-card">
    <div class="avatar">
    </div>
    <div>
    <h3></h3>
    </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        this.shadowRoot.querySelector('avatar').innerText = this.getAttribute('avatar');
    }
}

window.customElements.define('user-card',UserCard);