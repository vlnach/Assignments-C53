/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-1-the-odd-ones-out

The `doubleEvenNumbers` function returns only the even numbers in the array 
passed as the `numbers` parameter and doubles them.

Let's rewrite it (or _refactor_ it, as experienced developers would call it):

- Using the `map` and `filter` functions, rewrite the function body of
`doubleEvenNumbers`.
------------------------------------------------------------------------------*/
// ! Function to be tested
function doubleEvenNumbers(numbers) {
  const newNumbers = numbers.filter((number) => number % 2 === 0);
  return newNumbers.map((number) => number * 2);
}

// ! Unit test (using Jest)
describe('js-wk3-ex1-doubleEvenNumbers', () => {
  test('doubleEvenNumbers should take the even numbers and double them', () => {
    const actual = doubleEvenNumbers([1, 2, 3, 4]);
    const expected = [4, 8];
    expect(actual).toEqual(expected);
  });
});
