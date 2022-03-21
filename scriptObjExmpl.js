function Matrix (){
    // пусть по умолчанию при создании
    // элемент типа Matrix будет
    // вот такой матрицей
    this.matrix = [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
    ]
    // с именем - шаблоном
    this.name = 'шаблон матрицы';
    // добавим собственный метод получения размерностей матрицы
    // ибо так удобнее использовать наш объект
    this.getRow =function (){
        return this.matrix.length;
    }
    this.getColumn =function (){
        return this.matrix[0].length;
    }
    // добавим метод подсчета среднего значения
    /**
     *
     * @returns {number} среднее значение
     */
    this.calcAvg = function () {
        let summ = 0;
        let count = 0;
        // идем по строкам
        for (let i = 0; i < this.matrix.length; i++) {
            // идем по элементам строки
            for (let j = 0; j < this.matrix[i].length; j++){
                count++;
                summ += this.matrix[i][j];
            }
        }
        return summ/count;
    }
    /**
     *
     * @param row количество строк
     * @param column количество стробцов
     * @param name новое имя
     * @param min минимальное значение
     * @param max максимальное значение
     */
    this.genRandom = function (row,column,name,min,max) {
        let min_ = Math.ceil(min); // округление вверх
        let max_ = Math.floor(max); // округление вниз
        this.name = name;
        this.matrix = [];
        for (let i = 0; i < row; i++){
            let newRow = [];
            for (let j = 0; j < column; j++){
                newRow.push(Math.floor(Math.random() * (max_ - min_)) + min_);
            }
            this.matrix.push(newRow);
        }
    }
}


/**
 * Тестируем try catch
 * Какая-нибудь функция
 * @param число
 * @returns {count} сколько делятся на 3 и больше 0
 */
function doSomething (par){
    let count = 0;
    for (let i=1; i < par; i++) {
        if (i % 3 == 0) count++;
        console.log(i);
    }
    return count;
}

function runDoSomething () {
// переменная в которой будем засекать время выполнения
    let diff = 0;
    let start = Date.now(); // фиксируем текущее время
    /**
     * Выполнение функции в конструкции try catch finally
     */
    try {
        result = doSomething(22); // пробуем запустить
    } catch (e) {
        result = 0; // если ошибка - результат пуст
    } finally {
        diff = Date.now() - start; // в любом случае замеряем время
    }
// выводим результат
    console.log('Результат - ' + result || 'Возникла ошибка!');
// выводим время
    console.log(`Это заняло ${diff} миллисекунд`);
}

// создадим объект типа Matrix
let randMass = new Matrix();
// посмотрим что получилось
console.log(randMass.matrix); // свойство
console.log(randMass.name); // свойство
console.log(randMass.getRow()); // метод
console.log(randMass.getColumn()); // метод

// размер 4 на 4, имя 'новый', начения в диапазоне (1,20)
randMass.genRandom(4,4, 'новый', 1, 20);

console.log(randMass.matrix);
console.log(randMass.name);
console.log(randMass.calcAvg());
console.log(randMass.getRow());
console.log(randMass.getColumn());

runDoSomething();