// список объектов комментариев
// будет проинициализирован с помощью конструктора CommentsList
let listOfComments;

// конструктор списка комментариев
/**
 * Этот объект будет хранить список комментариев
 * @constructor
 */
function CommentsList (){
    /**
     *
     * @type {*[]} объекты типа Comment
     */
    this.listComm = [];
    /**
     * @returns {number} количество комметарие в списке
     */
    this.getLength = function () {
        return this.listComm.length;
    }
    /**
     * @param объект типа Comment
     */
    this.pushComm = function (val) {
        this.listComm.push(val);
    }
    /**
     * @param i порядковый номер комментария
     * @returns {*} вернуть имя
     */
    this.getName = function (i) {
        return this.listComm[i].name;
    }
    /**
     * @param i порядковый номер комментария
     * @returns {*} вернуть текст
     */
    this.getText = function (i) {
        return this.listComm[i].text;
    }
}

// объект комментарий
/**
 * @param name имя комментария
 * @param text текст комментария
 * @constructor
 */
function Comment (name, text){
    this.name = name;
    this.text = text;
}

/**
 * Добавить комментарий при нажатии button
 */
function addComment (){
    // данные комментария
    let name = userName.value;
    let comm = text_comment.value;
    // содаем обект
    let commElem = new Comment(name,comm);
    listOfComments.pushComm(commElem);
    // элемент html который буде обновлять
    let allist = document.getElementById('commentsList');

    updateListComms(allist);
}


/**
 * Позволяет обновить отображение
 * после выполнения будут выведен новый список
 * вместо старого
 * @param allist элемент html который хотим обновить
 */
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
    // при загрузке страницы инициализируем
    // listOfComments как объект типа CommentsList
    // то есть сам список комментариев
    listOfComments = new CommentsList();
    // обновим
    updateListComms ();
}