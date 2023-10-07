/**
 * Wiggle Sort is a sorting algorithm that arranges elements of an array in a "wiggle" pattern.
 * Even-indexed elements are smaller or equal to their adjacent elements, and odd-indexed elements
 * are larger or equal to their adjacent elements.
 *
 * @param {number[]} arr - The array to be sorted in a wiggle pattern.
 * @returns {number[]} - The array sorted in a wiggle pattern.
 */
export function wiggleSort(arr) {
  // Clone the input array to avoid modifying the original array
  const clonedArr = [...arr];

  // Sort the cloned array in ascending order
  clonedArr.sort((a, b) => a - b);

  // Create a new array to store the result
  const result = new Array(clonedArr.length);

  // Initialize pointers
  let left = 0;
  let right = clonedArr.length - 1;

  // Fill the result array with the wiggle-sorted values
  for (let i = 0; i < result.length; i++) {
    if (i % 2 === 0) {
      // Place smaller or equal values at even indices
      result[i] = clonedArr[left];
      left++;
    } else {
      // Place larger or equal values at odd indices
      result[i] = clonedArr[right];
      right--;
    }
  }

  return result;
}
