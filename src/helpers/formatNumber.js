/**
 * Возвращает двузначне представление числа
 * @param {number|string} n
 */

export default function (n) {
  return ('0' + n).slice(-2)
}
