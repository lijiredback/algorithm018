/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map()

    for (let i = 0; i < strs.length; i++) {
        let itemStr = strs[i].split('').sort().join('')

        if (hash.has(itemStr)) {
            let temp = hash.get(itemStr)
            temp.push(strs[i])
            hash.set(itemStr, temp)
        } else {
            hash.set(itemStr, [strs[i]])
        }
    }

    return [...hash.values()]
};