function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This line is incorrect, should handle the case when one of them is zero and another is not
  }
  return a / b;
}