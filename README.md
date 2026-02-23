##1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

##Answer: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
I. getElementById selects an element using its ID and returns only one element.
II. getElementsByClassName selects elements using their class name and returns multiple elements under the same class name.
III. querySelector uses in CSS selectors, and it returns only the first matching element.
IV. querySelectorAll uses in CSS selectors, and it returns all matching elements.


##2. How do you create and insert a new element into the DOM?

##Answer: To create and insert a new element into the DOM, first we have to declare a const like:-
Const div = document.createElement(“div”);

And then we can add content in it like:-
div.textContent = “ Hello JavaScript “;

And then need to append to the DOM like:-
document.body.appendChild(div);

This is how we can create and insert a new element into the DOM.

##3. What is Event Bubbling? And how does it work?

##Answer: When you click a child element and then the event moves up to its parent, then the grandparent, and it continues is called Event Bubbling.

It flows from Child to parent to grandParent to Document.


##4. What is Event Delegation in JavaScript? Why is it useful?

##Answer: When you add one event listener to a parent instead of adding to many child elements is called Event Delegation.

It is useful because it provides better performance and cleaner code, and it works for dynamically added elements.


##5. What is the difference between preventDefault() and stopPropagation() methods?

##Answer: The difference between preventDefault() and stopPropagation() methods is
preventDefault() stops the browser’s default action and stopPropagation() stops the event from moving to parent elements.
