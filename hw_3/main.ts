// Створити функцію, яка робить запити на апі, та віддає результат свого запиту.
// Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді,
// url – ваш ендпоінт, з якого чекаємо відповідь

async function foobar<T>(url:string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}
