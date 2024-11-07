function logo(title, url) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    a.href = url;
    div.className = 'self-start rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900';
    a.textContent = title;
    div.appendChild(a);
    return (div);
}

function rigthtNave() {
    const div = document.createElement('div');
    div.className = 'self-end rounded-lg px-3 py-2 text-slate-700 font-medium';
    const links = [
        ['🛒', '/pagepanier'],
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
    nav.appendChild(rigthtNave());
    return nav;
  }

export default Nav;
  