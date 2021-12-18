var arr = [5, 50, 2, 1, 9, 78];


function largestPossibleInteger(inputArray) {
    const arrayOfStrings = inputArray.map(a => a.toString())
    const sortedArray = arrayOfStrings.sort((a, b) => parseInt(b + a) - parseInt(a + b))
    return parseInt(sortedArray.join(''))
}
console.log(largestPossibleInteger(arr))
