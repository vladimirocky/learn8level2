// список объектов комментариев
let listOfComments;

// конструктор списка комментариев
function CommentsList (){
    this.listComm = [];
    this.getLength = function () {
        return this.listComm.length;
    }
    this.pushComm = function (val) {
        return this.listComm.push(val);
    }
    this.getName = function (i) {
        return this.listComm[i].name;
    }
    this.getText = function (i) {
        return this.listComm[i].text;
    }
}

// объект комментарий
function Comment (name, text){
    this.name = name;
    this.text = text;
}

function addComment (){
    let name = userName.value;
    let comm = text_comment.value;
    let commElem = new Comment(name,comm);
    listOfComments.pushComm(commElem);

    let allist = document.getElementById('commentsList');

    updateListComms(allist);
}



function updateListComms (allist) {

    let ul = document.getElementById('removeBle');
    let p = document.getElementById('count');
    if (ul) {
        allist.removeChild(ul);
    }
    if (p){
        allist.removeChild(p);
    }

    let listOfcomm = document.createElement('ul');

    for (let i = 0; i < listOfComments.getLength(); i++) {
        let elIfList = document.createElement('li');
        elIfList.innerHTML = listOfComments.getName(i);

        listOfcomm.appendChild(elIfList);
    }
    listOfcomm.id = 'removeBle';

    let countOfcom = listOfComments.getLength();

    let par = document.createElement('p');
    par.innerHTML = 'Всего комментариев - ' + countOfcom;
    par.id = 'count';

    allist.appendChild(par);
    allist.appendChild(listOfcomm);
}

window.onload = function () {
    listOfComments = new CommentsList();
    updateListComms ();
}