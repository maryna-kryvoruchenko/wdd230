function add_to_list() {
    let input_item = document.querySelector('#input_item').value;
    let li = document.createElement('li');
    li.innerHTML = input_item;

    document.querySelector('#main-list').appendChild(li);
} 

document.getElementById('demo').addEventListener('click', add_to_list);