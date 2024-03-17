// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID)
// в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.
// Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.
// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера.
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json()
// и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
function getUserData(userId) {
    return fetch(`https://example.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        });
}

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента
// и использует fetch для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения.
// Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json
// и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify().
// Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщениeм
function saveUserData(userData) {
    return fetch('https://example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save user data');
            }
        });
}

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах)
// в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            // Изменить стиль здесь, например, цвет фона
            element.style.backgroundColor = 'yellow';
        }
    }, delay);
}

getUserData('123')
    .then(userData => console.log(userData))
    .catch(error => console.log(error.message));

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => console.log('User data saved successfully'))
    .catch(error => console.log(error.message));

changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
