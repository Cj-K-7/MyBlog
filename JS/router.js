const routes ={
    404: "../HTML/404.html",
    '/' : '../HTML/home.html',
    '/about' : '../HTML/about.html',
    '/contact' : '../HTML/contact.html',
    '/algorithms' :'../HTML/algorithms.html',
    '/javascript' : '../HTML/javascript.html',
}

// main root 내에 route 내용넣기.
const root = document.querySelector('.root')
root.innerHTML = routes[window.location.pathname];
// nav li click event 페이지 주소 변경 history API
const route = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState(
        {},
        "",
        event.target.href
    )
    handleLocation();
  }

  // 해당하는 route 를 root 에 표시.
const handleLocation = async () =>{
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=>data.text());
    root.innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();