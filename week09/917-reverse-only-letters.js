/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const STR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    let left = 0, right = S.length - 1, arr = S.split('')

    while (left < right) {
      if (STR.indexOf(arr[left]) === -1) left++
      if (STR.indexOf(arr[right]) === -1) right--

      if (STR.indexOf(arr[left]) !== -1 && STR.indexOf(arr[right]) !== -1) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
      }
    }

    return arr.join('')
};