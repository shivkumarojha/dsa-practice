export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0
    let hi = haystack.length
    do {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[m]

        if (v === needle) {
            return true
        } else if (v > needle) {
            hi = m
        } else {
            lo = m + 1
        }
    } while (lo < hi)

    return false
}

const array = [1, 3, 4, 5, 6, 7, 8]
const result = bs_list(array, 1)
console.log(result)