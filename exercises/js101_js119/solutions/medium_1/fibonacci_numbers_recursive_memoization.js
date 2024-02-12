// took 50 minutes to figure out

/*
Thinking process:

Need to use object to store the already
computed result.
key as n, value as the computed value
so other iterations can just access
the already computed value for a specific
key/n


How:
SET memo = {}

recursive func:
how to retrive?
return memo[n] OR fibonacci(n - 1) + fibonacci(n - 2)
because if there is nothing it will be undefined
and undefined is falsy which means that it
will return the computation instead if memo
doesn't have that value

How to store?


 */

let memo = {};

function fibonacci(n) {
  if (n <= 2) return 1;

  if (memo[n]) {
    let result = memo[n];
    return result;
  } else {
    let result = fibonacci(n - 1) + fibonacci(n - 2);
    memo[n] = result;
    return result;
  }

}
console.log(fibonacci(9));
/*
root
input n = 5
memo[5] is undefined
goes to else: compute
result = fib(4) + fib(3)

---
root > left
input n = 4
memo[4] is undefined
goes to else: compute else stmt
produce result = fib(3) + fib(2)
---
root > left > left
fib(3)
n = 3
memo[3] is undefined
goes to else: compute
produce result = fib(2) + fib(1)
---
root > left > left > left
fib(2)
n = 2
return 1
---
root > left > left
fib(3)
result = 1 + fib(1)
---
root > left > left > right
fib(1)
n = 1
return 1
---
root > left > left
fib(3)
n = 3
result = 1 + 1 (2)
should memoize here
obj[3] = result(2)
---
root > left
fib(4)
n = 4
result = 2 + fib(2)
---
root > left > right
fib(2)
n = 2
return 1
---
root > left
fib(4)
n = 4
result = 2 + 1 = 3
memo[4] = 3
return 3
---
root
fib(5)
n = 5
result = 3 + fib(3)
---
root > right
fib(3)
n = 3
memo[3] is in memo:
  return 2
---
root
fib(5)
n = 5
result = 3 + 2 = 5
---
Answer is 5

// note, highlighted part in
Visualizing memoization hint
fib(2) and fib(1) was previously computed
which are highlighted, but it wasn't
stored as part of memoization


 */

// n = 4 will give the most min memoization
// 1 1 2 3 5 8 13 21 34