// This QuickSort is the most optimized one.

export default function quick_sort(arr: number[]): number[] {
	if (arr.length <= 1) {
		return arr
	}

	const middle = Math.floor(arr.length / 2)
	const pivot = arr[middle]

	const less: number[] = []
	const great: number[] = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			less.push(arr[i])
		} else if (arr[i] > pivot) {
			great.push(arr[i])
		}
		// Don't include elements equal to the pivot in either array
	}

	return [...quick_sort(less), pivot, ...quick_sort(great)]
}

const array = [5, 2, 3, 4, 1]

console.log(quick_sort(array))

