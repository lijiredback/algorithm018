/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []

    const go = (l, r, s) => {
      if (l > r) return 

      if (l === 0 && r === 0) return res.push(s)

      l && go(l - 1, r, s + '(')
      r && go(l, r - 1,s + ')')

    }
    go(n, n, '')

    return res
};