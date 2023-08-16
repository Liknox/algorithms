export default function bs_list(haystack: number[], needle: number): boolean {
	let start = 0
	let end = haystack.length

	do {
		let middle = Math.floor(start + (end - start) / 2)
		let value = haystack[middle]

		if (value === needle) return true
		else if (value > needle) end = middle
		else start = middle + 1
	} while (start < end)

	return false
}

console.log(bs_list([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 69))
