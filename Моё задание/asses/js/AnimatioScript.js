let listOfComments;
let addUser = document.getElementById("userName");
let textComment = document.getElementById("text_comment");
let containerComment = document.getElementById("CommentContainer");
listOfComments = new CommentsList();

function CommentsList (){
    this.listComm = [];
    this.getLength = function () {
        return this.listComm.length;
    }
    this.pushComm = function (val) {
        this.listComm.push(val);
    }
    this.getName = function (i) {
        return this.listComm[i].name;
    }
    this.getText = function (i) {
        return this.listComm[i].text;
    }
}

function Comment (name, text){
    this.name = name;
    this.text = text;
}

let btnComment = () => {
    if (addUser.value === "" || textComment.value === "") return;

    let commElem = new Comment(addUser.value, textComment.value);
    
    listOfComments.pushComm(commElem);
    let allist = document.getElementById('CommentContainer');

    updateListComms(allist);
    textComment.value = "";
}

const updateListComms = (allist) => {
    let ul = document.getElementById('removeBle');
    let p = document.getElementById("count");
    let listOfComm = document.createElement(`ul`);

    if (ul) allist.removeChild(ul);
    if (p) allist.removeChild(p);
    
    let countOfcom = listOfComments.getLength();

    let par = document.createElement('p');
    par.innerHTML = 'Всего комментариев - ' + countOfcom;
    par.id = 'count';


    for (let i = 0; i < listOfComments.getLength(); i++) {
        let elIfList = document.createElement(`li`);
        elIfList.innerHTML = `<span style = "color: green;">Имя пользователя:</span> ${listOfComments.getName(i)}<br>
        <span style = "color: green;">Комментарий:</span> ${listOfComments.getText(i)}<br>`;
        elIfList.className = "li";

        let butDelete = document.createElement('button');
        butDelete.className = 'delete btn btn-success';
        butDelete.textContent = 'Удалить комментарий';

        listOfComm.appendChild(elIfList);
        elIfList.appendChild(butDelete);

        butDelete.addEventListener("click", () => {
            listOfComm.removeChild(elIfList);
            listOfComments.listComm.splice(i);

            countOfcom--;
            par.innerHTML = 'Всего комментариев - ' + countOfcom;
        })
    }

    listOfComm.id = 'removeBle';

    allist.appendChild(par);
    allist.appendChild(listOfComm);
}
