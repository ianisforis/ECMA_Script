//1) Дан массив const arr = [1, 5, 7, 9]
// с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
const min = Math.min(...arr);
console.log(min);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let count = 0; // Инициализация счетчика

    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        }
    };
}
console.log(createCounter());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
function findElementByClass(rootElement, className) {
    if (rootElement.classList && rootElement.classList.contains(className)) {
        return rootElement;
    }

    // Рекурсивный поиск среди дочерних элементов
    for (const child of rootElement.children) {
        const found = findElementByClass(child, className);
        if (found) {
            return found;
        }
    }

    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);