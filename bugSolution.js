function myFunc(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Both are zero
  } else if (a === 0 || b === 0) {
    return Infinity; //one of them is zero 
  }
  return a / b; 
} 