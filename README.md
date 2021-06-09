# Dynamic DOM

## What is this?

This is a practice exercise.

## What does this code demonstrate?

Dynamic manipulation of the DOM whereby whatever the user types in the input field will be dynamically displayed in two ways:

- Pop out from the center of the screen using `animation`

- A 'rain fall' effect using `animation`

## What coding practices can be found in the code?

1. The `const` and `let` variables;

2. Multiple methods to use the `addEventListener` to give the user a better experience interacting with the input;

3. Use of `Math.random` with the rain fall effect for text placement and speed of decent;

4. `transition` with `scale` to control the pop-out effect;

5. `setInterval`, `setTimeout`, `clearTimeout` to control how long the rain fall will happen, a timer for the rain fall effect, and then stopping (clearing) the interval;

6. Creating (and editing) a new DOM element with `document.createElement` to include adding a class, removing a class, adding the user input to the `textContent`, and then appending the new element to the document using `document.body.appendChild()`;

7. Use of the `if` statement to check for conditions before running code;

8. Using the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) and the ES6 arrow [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
