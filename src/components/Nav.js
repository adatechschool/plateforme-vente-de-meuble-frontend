import sortListByType from '../utils/Filter'

function logo(title, url) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    a.href = url;
    div.className = 'self-start rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900';
    a.textContent = title;
    div.appendChild(a);
    return (div);
}

function searchBar() {
    const div = document.createElement('div');
    div.className = 'flex-grow flex items-center justify-center space-x-2';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Recherche...';
    input.className = 'rounded-lg px-3 py-2 text-slate-700 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500';
    input.onkeyup = function() { sortListByType(this.value)};
    div.appendChild(input);
    return div;
  }



function rigthtNave() {
    const div = document.createElement('div');
    div.className = 'self-end rounded-lg px-3 py-2 text-slate-700 font-medium';
    const links = [
        ['🩵', '/like'],
        ['🛒', '/shopping-cart'],
        ['👤', '/dashboard'],
      ];

    links.forEach(([title, url]) => {
        const a = document.createElement('a');
        
        a.href = url;
        a.className = 'self-end rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900';
        a.textContent = title;
        div.appendChild(a);
    });
    return (div);
}

function Nav() {
    const nav = document.createElement('nav');
    nav.className = 'flex items-center justify-between px-4 py-2 bg-white shadow-md';
    nav.appendChild(logo("meublio", '/index'));
    nav.appendChild(searchBar());
    nav.appendChild(rigthtNave());
    return nav;
  }

export default Nav;
  