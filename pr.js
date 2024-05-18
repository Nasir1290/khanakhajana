// let input1 = { "a": 1, "b": 2, "c": 3 }



// let input2 = { "a": 13, "b": 2, "c": 3 }


// const findMatches = (input1, input2) => {
//     let matches = {};
//     for (let i in input1) {
//         for (let j in input2) {
//             console.log({ i }, { j })
//             console.log(input1[i], input2[j])
//             if(i===j && input1[i] === input2[j]){
//                 matches[i] =input1[i]; 
//             }
//         }
//     }
//     console.log(matches)
// };
// findMatches(input1, input2)


// find second largest number...


// let arr = [1, 1, 1, 1]
// const findSecondLargestNumber = (inputArr) => {
//     if (inputArr.length <= 1) {
//         return null
//     }
//     let sortedArr = [...new Set(inputArr.sort((a, b) => b - a))];

//     if (sortedArr.length <= 1) {
//         return null
//     }

//     return sortedArr[1];

// }

// console.log(findSecondLargestNumber(arr));


// let arr = [2, 4, 4]

// const secondLargestNumber = (inputArr) => {
//     let secondLargest = null;
//     let largest = null;
//     for (let num of inputArr) {
//         if (largest === null || num > largest) {
//             largest = num;
//             secondLargest = largest;
//         } else if (num !== largest && (secondLargest === null || num > secondLargest)) {
//             secondLargest = num;
//         }
//         console.log({ largest }, { secondLargest })

//     }
//     return secondLargest;

// };

// console.log(secondLargestNumber(arr))



const arr = [2, 7, 11, 4, -2]
let output = [11, 7, 2, 4, -2]

const rotatingArray = (inputArr) => {
    let sortedArray = [...inputArr].sort((a, b) => a - b);
    const maxValue = sortedArray[sortedArray.length - 1];
    const maxValueIndex = inputArr.indexOf(maxValue);
    const indexToRemove = maxValueIndex -2
    
    console.log();
};

rotatingArray(arr);