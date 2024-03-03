// JavaScript code​​​​​​‌​‌​‌‌​​‌‌‌​​​‌​‌​‌‌​​‌​​ below
// Write your answer here, then test your code.

/*
Tasks:
1. Remove the last item from the array.
2. Sort the remaining array items aphabetically.
3. Move the last item in the array to the first position.
4. Find the "USB drive" item in the array and move it to the last position.
5. Find "laptop" item in the array and remove it.
*/

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    // Your code goes here
    console.log("0." + newDeskArr);
    newDeskArr.pop();
    console.log("1." + newDeskArr);
    newDeskArr.sort();
    console.log("2." + newDeskArr);
    newDeskArr.unshift(newDeskArr.pop());
    console.log("3." + newDeskArr);
    newDeskArr.splice(newDeskArr.indexOf("USB drive"), 1);
    newDeskArr.push("USB drive");
    console.log("4." + newDeskArr);
    newDeskArr.splice(newDeskArr.indexOf("laptop"), 1);
    

    // Your code ends here

    return newDeskArr;
};


//Construct
const result = processArray(deskArray);

/*
Expected outcome:
[
  'phone',
  'camera',
  'headphones',
  'light bulb',
  'notebook',
  'pen',
  'USB drive'
]
*/