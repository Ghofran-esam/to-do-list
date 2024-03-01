let formdata = document.querySelector(".todolist");

formdata.onsubmit = function (e) {
    e.preventDefault();
    const elements = e.target.elements;
    let data = {
        list: elements['newtask'].value,
    }

    let listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox"> ${data.list} `;
    listItem.classList.add("searchhh")
    document.querySelector("ul").appendChild(listItem);
    console.log(listItem)
    let x = listItem.querySelector('input[type="checkbox"]');
    x.onclick = function() {
        if (x.search) {
            listItem.classList.add("searchh");
            listItem.classList.remove("serchok");
        } else {
            listItem.classList.remove("searchh");
            listItem.classList.add("serchok");
        }
    };

}



