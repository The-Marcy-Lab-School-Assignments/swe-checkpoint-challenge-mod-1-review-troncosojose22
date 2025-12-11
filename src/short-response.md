# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The **bug** occurs because inside of each `if/else` **block** we are initializing a new **variable** `letter` using the `let` **keyword**, instead of **reassigning** the value of the already initialized `letter` variable. So since no value is ever assigned to `letter` inside the **execution context** of the `getLetterGrade` function, `undefined` is returned.

**Part B:**

Removing the `let` keyword inside all `if/else` statements, this would reassigning a value to our `letter` variable instead of initializing a new one, hence **returning** the new assigned value instead of `undefined`.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

The number `75` will be **logged** to the **console**, this will happen because on the second line of code `const newSettings = originalSettings;` we are passing the reference of the `originalSettings` object to `newSettings`, so they are both pointing to the same space in memory.

**Part B:**

**Corrected Code:**

Using the **spread operator** we can create a new object containing the same properties as `originalSettings` while referencing a different space in memory.

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings };
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

In the first **iteration** of `filter`, the value of `product` would be the first **object** inside the `products` **array**. The **callback function** is returning the `product.inStock` **property** which is a **boolean**, if this property evaluates to `true` it will **pass** the test and the `filter` **method** will add the `product` object to the new filtered array.
