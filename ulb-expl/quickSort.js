/* prettier-ignore */
const array = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23]

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}

	const pivot = arr[0]
	const less = []
	const great = []

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			less.push(arr[i])
		} else {
			great.push(arr[i])
		}
	}
	return [...quickSort(less), pivot, ...quickSort(great)]
}

console.log(quickSort(array))