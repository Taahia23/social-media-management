<

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i> JavaScript treats greetign as an undeclared variable because it was not previously defined, and this will lead to a reference error. This output indicates that the variable greeting contains an empty object as its value after the assignment.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: `"12"`

<i>JavaScript is a loosely typed language, which means it will try to perform type coercion when you use the + operator to add them together. there is + operator with a string and a number, JavaScript will convert the number to a string and then concatenate the two strings, rather than performing numeric addition.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b></b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The reason for this output is that,  modified the favoriteFood property of the info object, but it haven't made any changes to the food array. The food array retains its original values, and the assignment to info.favoriteFood does not affect the array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>The output is 'Hi there, undefined'  because the name parameter was not provided when calling the sayHi function, resulting in undefined as its value.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: 3

<i>Inside the callback function, the current num is truthy (not equal to 0). For the elements 1, 2, and 3, this condition is true, so count is incremented for each of these values. The 0 in the array is falsy, so it does not contribute to the incrementing of count.</i>

</p>
</details>
