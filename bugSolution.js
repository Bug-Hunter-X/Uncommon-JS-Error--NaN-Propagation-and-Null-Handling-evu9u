function foo(a, b) {
  // Handle null values
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b; 

  //Handle NaN values
  if(isNaN(a) || isNaN(b)){
    return 0;
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(NaN,5)); //Output: 0