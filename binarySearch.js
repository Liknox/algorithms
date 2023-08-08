const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 999]

// function binarySearch(array, item) {
// 	let start = 0
// 	let end = array.length
// 	let middle
// 	let found = false
// 	let position = -1

// 	while (!found && start <= end) {
// 		middle = Math.floor((start + end) / 2)
// 		if (array[middle] === item) {
// 			position = middle
// 			return position
// 		}
// 		if (array[middle] > item) {
// 			end = middle - 1
// 		} else {
// 			start = middle + 1
// 		}
// 	}

// 	return position
// }

// console.log(binarySearch(arr, 999))

function recursiveBinarySearch(array, item, start, end) {
	let middle = Math.floor((start + end) / 2)

	if (array[middle] === item) {
		return middle
	}

	if (array[middle] > item) {
		return recursiveBinarySearch(array, item, start, middle - 1)
	} else {
		return recursiveBinarySearch(array, item, middle + 1, end)
	}
}

console.log(recursiveBinarySearch(arr, 999, 0, arr.length))