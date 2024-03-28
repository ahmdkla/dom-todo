//DOM TodoList
var inputText = document.getElementById("textBox"),
    items = document.querySelectorAll("li"),
    tab = [],
    index;

for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
}

for (var i = 0; i < items.length; i++) {

    items[i].onclick = function () {
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index);
        inputText.value = this.innerHTML;
    };

}

function refreshArray() {
    tab.length = 0;
    items = document.querySelectorAll("#list li");
    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }
}

function addList() {
    var listNode = document.getElementById("list"),
        textNode = document.createTextNode(inputText.value),
        liNode = document.createElement("LI");

    if (inputText.value === '') {
        alert('You cannot input blank text!');
    } else {
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);

        refreshArray();

        liNode.onclick = function () {
            index = tab.indexOf(liNode.innerHTML);
            console.log(liNode.innerHTML + " INDEX = " + index);
            inputText.value = liNode.innerHTML;
        };
    }
}

function editList() {
    if (index != null) {
        if (confirm('Are you sure you want to edit todo?') == true) {
            if (items[index].innerHTML == inputText.value) {
                alert('You are not changing anything wkwk')
            }
            items[index].innerHTML = inputText.value;
            refreshArray();
        }
    } else {
        alert("You don't select any to do, please select one")
    }
}

function deleteList() {
    if (index != null) {
        if (confirm('Are you sure you want to delete todo?') == true) {
            items[index].parentNode.removeChild(items[index]);
            refreshArray();
            index = null;
        }
    } else {
        alert("You don't select any to do, please select one")
    }
}

new Sortable(list, {
    group: 'shared', // set both lists to same group
    animation: 200
});

new Sortable(todoListDone, {
    group: 'shared',
    animation: 200
});