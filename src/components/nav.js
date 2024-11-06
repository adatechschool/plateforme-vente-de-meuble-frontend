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
    input.placeholder = 'Search...';
    input.className = 'rounded-lg px-3 py-2 text-slate-700 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500';
  
    div.appendChild(input);
    div.appendChild(filterDropdown());
    return div;
  }

function filterDropdown() {
  const div = document.createElement('div');
  div.className = 'relative';

  const button = document.createElement('button');
  button.className = 'flex items-center px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900';
  button.innerHTML = '▼';

  const dropdown = document.createElement('div');
  dropdown.className = 'absolute right-0 mt-2 w-48 bg-white border border-slate-300 rounded-lg shadow-lg hidden';
  dropdown.innerHTML = `
    <label class="block px-4 py-2">
      <input type="checkbox" class="mr-2"> Filtre 1
    </label>
    <label class="block px-4 py-2">
      <input type="checkbox" class="mr-2"> Filtre 2
    </label>
    <label class="block px-4 py-2">
      <input type="checkbox" class="mr-2"> Filtre 3
    </label>
  `;

  button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });

  div.appendChild(button);
  div.appendChild(dropdown);
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
    nav.appendChild(logo("meublio", '/index-home'));
    nav.appendChild(searchBar());
    nav.appendChild(rigthtNave());
    return nav;
  }

export default Nav;
  