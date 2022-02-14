export function romanToInteger(str) {
    let result = 0;
    let rim = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let ar = [1, 5, 10, 50, 100, 500, 1000];
    let sumRes = []; // массив после перевода в арабские цифры
    if (str.length) {
        // проверка на входное значение. Должна быть строка
        let indLen = 0; // индекс длины строки
        for (let a = 0; str.length > a; a++) {
            let point = 0; // 1 - нашли значение в массиве римских цифр; 0 - продолжаем поиск
            for (let i = 0; point != 1; i++) {
                if (str[indLen] === rim[i]) {
                    point = 1;
                    sumRes[indLen] = ar[i];
                } else {
                    point = 0;
                    if (str.length < i) {
                        return 'Ошибка в записи римских цифр. На вход работают только: I, V, X, L, C, D, M';
                    }
                }
            }
            indLen++;
        }
        result = sumRes[sumRes.length - 1];
        for (let i = sumRes.length - 1; i > 0; i--) {
            if (sumRes[i] > sumRes[i - 1] >= sumRes[i - 2]) {
                // не допускается запись римского числа вот такого характера  IIV
                return 'Ошибочное записание римского числа. Уменьшение значения два раза повторяется';
            }
            if (
                // не допускается запись римского числа вот такого характера  IIII
                sumRes[i] === sumRes[i - 1] &&
                sumRes[i] === sumRes[i - 2] &&
                sumRes[i] === sumRes[i - 3]
            ) {
                return 'Ошибочное записание римского числа. Четыре раза повторяется одно и тоже значение';
            }
            if (sumRes[i] > sumRes[i - 1]) {
                // суммирую масив переведенных чисел
                result = result - sumRes[i - 1];
            } else {
                result = result + sumRes[i - 1];
            }
        }
    } else {
        return 'На входе не строка';
    }
    return result;
}
