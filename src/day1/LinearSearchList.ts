export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle) {
            return true
        }
    }
    return false
}

let haystack = [1,4,5,2,5,5]
let answer = linear_search(haystack, 3)