# Uncommon JavaScript Error: NaN Propagation and Null Handling

This repository demonstrates an unusual JavaScript error related to NaN propagation and null value handling in function arguments. The `foo` function adds two numbers, but it doesn't properly handle NaN or null values.  This can lead to unexpected results, especially when dealing with external data sources where null or NaN values can easily creep in.

The `bug.js` file contains the problematic code.  `bugSolution.js` offers a solution that explicitly addresses these edge cases using appropriate checks and handling.

## Learning Points

* **NaN Propagation:**  NaN (Not a Number) is contagious; any arithmetic operation involving NaN will result in NaN.
* **Null Handling:** It's crucial to explicitly check for and handle null values to prevent unexpected behavior or errors.
* **Robust Function Design:** Functions should always consider edge cases, including invalid or unexpected inputs, to ensure reliability.