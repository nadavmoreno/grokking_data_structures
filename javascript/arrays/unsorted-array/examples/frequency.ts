/*
- The Game:
	Mario and Tony play a dice game where Tony wins if the roll is 1, 2, or 3, and Mario wins if it's 4, 5, or 6.
  They bet baseball cards on each roll
- Suspicion:
	Mario notices he keeps losing and suspects the die might be unfair (some numbers come up more often)
- Collecting Data:
	Mario’s father suggests recording the outcome of each roll in an array with six counters (one for each die face). Each time a number comes up,
  the corresponding counter is incremented
- Checking Fairness:
	After many rolls, to check if the die is fair, they:
	1. Find the die face that appeared the most and the least.
	2. Use functions to find the maximum and minimum values in the array, returning both the value and the index (which corresponds to the die face)
- Result:
	They find that one number appears much more often than another, showing a big difference in frequencies
- Conclusion:
	This big difference suggests the die is unfair, explaining why Mario kept losing. Mario’s father decides to speak to Tony’s parents,
  and Mario is likely to get his cards back
- Key Programming Concepts:
	- Using arrays to count occurrences (frequency)
	- Traversing arrays to find maximum and minimum values
	- Understanding how to map array indices to real-world values (die faces)
*/
function maxInArray(arr: number[]) {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return {
    maxIndex,
    maxVal: arr[maxIndex],
  };
}

function minInArray(arr: number[]) {
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  return {
    minIndex,
    minVal: arr[minIndex],
  };
}

function maxAndMinInArray(arr: number[]) {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  return {
    maxIndex,
    maxVal: arr[maxIndex],
    minIndex,
    minVal: arr[minIndex],
  };
}
console.log(maxInArray([50, 2, 1, 220, 221, 222]));
console.log(minInArray([50, 2, 1, 220, 221, 222]));
console.log(minInArray([50, 2, 1, 220, 221, 222]));
