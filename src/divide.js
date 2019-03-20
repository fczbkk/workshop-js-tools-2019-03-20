/**
 * Divides numbers, except when `b` is zero.
 * @param {number} a
 * @param {number} b - Never zero!
 * @return {number}
 * @throws {motherfucker}
 */
export function divide (a, b) {
  if (b === 0 || b === -0) {
    throw new Error('Division by zero, motherfucker!')
  }
  return a / b
}
