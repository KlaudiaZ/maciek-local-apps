export const addMoviesToList = (type, title, description) => {
    const list = document.getElementById('movies-list');
    list.appendChild(document.createElement('div'));
    list.lastElementChild.setAttribute('class', 'panel-block');
    list.lastElementChild.innerText = title + ', ' + type;
    console.log(type);
    console.log(title);
}