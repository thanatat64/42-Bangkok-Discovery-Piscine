//array [1,5,2,4,3]
// {
//     key : IDBCursorWithValue
//     "1" : 1
// }


array.forEach(element => {
    if (ele) {
        
    }
});



let arr = [1,5,2,4,3]
let res = arr.filter(checkEven);
res.sort();

res.reduce()
res.reduce((a, v) => ({ ...a, [v.toString()]: v}), {})
function checkEven(num) {
  return num % 2 != 0;
}
