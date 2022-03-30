const navbar = document.createElement('nav');
navbar.classList.add('navbar-contents');
const list = document.createElement('ul');
list.classList.add('recent-post-list');
document.body.appendChild(navbar);
navbar.appendChild(list);

const addList = (title) =>{
    list.innerHTML = list.innerHTML+`<li><a href="/${title}" onclick="route()">${title}</a></li>`
}

addList('javascript')
addList('algorithms')
