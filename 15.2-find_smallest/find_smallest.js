function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmalest(52, 66, 2);

// 1. line 10 - findSmalest is not defined
// 2. quokka
// 3. mispel "findsmallest", and wrong syntax (argument > argument > argument)