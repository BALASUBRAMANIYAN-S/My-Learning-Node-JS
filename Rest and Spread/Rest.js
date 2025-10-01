let a;
const APP = (...rest) => {
  return rest.map((val, ind) => {
    a = val + ind;
    return a;
  });
};

console.log(APP(1, 2, 3, 4, 5, 6));
console.log(a);

// // Vaipadu table 

const table = (WhichTable, HowManySizeOfTable) => {
  for (let i = 1; i <= HowManySizeOfTable; i++) {
    console.log(`${i} X ${WhichTable} = ${WhichTable * i}`);
  }
};

// Example: table of 10 up to 10
table(2, 10);

