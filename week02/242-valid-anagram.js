/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const m = s.length, n = t.length

    if (m !== n) return false

    const hash = new Array(26).fill(0)
    const codeA = 'a'.charCodeAt()

    for (let i = 0; i < m; i++) {
        hash[s.charCodeAt(i) - codeA]++
        hash[t.charCodeAt(i) - codeA]--
    }

    for (let i in hash) {
        if (hash[i]) return false
    }

    return true
};