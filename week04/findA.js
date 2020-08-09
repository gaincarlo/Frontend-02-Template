const log = console.log.bind(console)
//
// const findA = function (str) {
//     const s = str
//     if (typeof s !== "string" || s.length === 0) {
//         return -1
//     }
//     for (let i = 0; i < s.length;i += 1) {
//         if (s[i] === 'a') {
//             return i
//         }
//     }
//     return -1
// }
//
//
// const ensure = function(condition, message) {
//     // 在条件不成立的时候, 输出 message
//     if (!condition) {
//         log('*** 测试失败:', message)
//     } else {
//         log('||| 测试成功')
//     }
// }
//
// const test_findA = function() {
//     ensure(findA('hello') === -1, 'find 1')
//     ensure(findA('helloa') === 5, 'find 2')
//     ensure(findA('ahello') === 0, 'find 3')
// }
// test_findA()
//
// const findAB = function (str) {
//     const s = str
//     if (typeof s !== "string" || s.length === 0) {
//         return false
//     }
//     for (let i = 0; i < s.length;i += 1) {
//         if (s[i] === 'a' && s[i + 1] === 'b') {
//             return true
//         }
//     }
//     return false
// }
// const log = console.log.bind(console)
// const ensure = function(condition, message) {
//     // 在条件不成立的时候, 输出 message
//     if (!condition) {
//         log('*** 测试失败:', message)
//     } else {
//         log('||| 测试成功')
//     }
// }
// const test_findAB = function() {
//     ensure(findAB('hello') === false, 'find 1')
//     ensure(findAB('helloab') === true, 'find 2')
//     ensure(findAB('aheabllo') === true, 'find 3')
// }
//
// test_findAB()

// const match = function (str) {
//     let findA = false
//     let findB = false
//     let findC = false
//     let findD = false
//     let findE = false
//     for (let i = 0;i < str.length;i +=1) {
//         if (str[i] === 'a') {
//             findA = true
//         } else if (findA && str[i] === 'b') {
//             findB = true
//         } else if (findB && str[i] === 'c') {
//             findC = true
//         } else if (findC && str[i] === 'd') {
//             findD = true
//         } else if (findD && str[i] === 'e') {
//             findE = true
//         } else if (findE && str[i] === 'f') {
//             return true
//         } else {
//             findA = false
//             findB = false
//             findC = false
//             findD = false
//             findE = false
//         }
//     }
//     return false
// }
//
//
// const match = function (string) {
//     let state = start
//     for (let c of string) {
//         state = state(c)
//     }
//     return state === end
// }
//
// const start = function (c) {
//     if (c === 'a') {
//         return findA
//     } else {
//         return start
//     }
// }
//
// const end = function(c) {
//     return end
// }
//
// const findA = function(c) {
//     if (c === 'b') {
//         return findB
//     } else {
//         return start(c)
//     }
// }
//
// const findB = function(c) {
//     if (c === 'c') {
//         return findC
//     } else {
//         return start(c)
//     }
// }
//
// const findC = function(c) {
//     if (c === 'a') {
//         return findA2
//     } else {
//         return start(c)
//     }
// }
//
// const findA2 = function(c) {
//     if (c === 'b') {
//         return findB2
//     } else {
//         return start(c)
//     }
// }
//
// const findB2 = function(c) {
//     if(c === 'x') {
//         return end
//     } else {
//         return findB(c)
//     }
// }
//
// console.log(match('ababcabx'))

const match = function (string) {
    let state = start
    for (let c of string) {
        state = state(c)
    }
    return state === end
}

const start = function (c) {
    if (c === 'a') {
        return findA
    } else {
        return start
    }
}

const end = function(c) {
    return end
}

const findA = function(c) {
    if (c === 'b') {
        // 1 ab
        return findB
    } else {
        return start(c)
    }
}

const findB = function(c) {
    if (c === 'a') {
        return findA2
    } else {
        return start(c)
    }
}

const findA2 = function (c) {
    if (c === 'b') {
        // 2 ab
        return findB2
    } else {
        return start(c)
    }
}

const findB2 = function (c) {
    if (c === 'a') {
        return findA3
    } else {
        return findB(c)
    }
}

const findA3 = function (c) {
    if (c === 'b') {
        // 3 ab
        return findB3
    } else {
        return findB2(c)
    }
}

const findB3 =function (c) {
    if (c === 'x') {
        // 3 ab
        return end
    } else {
        return findB2(c)
    }
}

console.log(match('abxabababx'))