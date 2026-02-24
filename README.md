## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

		getElementById         gets the html element by using its id, usually it uses when we want to select one most specific element.
		getElementByClassName  gets the html element by using its class name, it uses to select multiple elements that has the same class name.
		querySelector          will select the html element that matches the given tag name, id or class name. for id and class we need to use # and . before the selector. if it has many element it will chose the first element
		querySelectorAll       is same as querySelector but it will select all of the element that matches.
		
### 2. How do you create and insert a new element into the DOM?

		Suppose we get an parent element - let parent = document.getElementById('parent-section');
		to create an element use - let newElement = document.createElement('div');
		and to add content in it - newElement.innerText = "i learnt dom in just two weeks";
		to insert it we need to append in its existing parent - parent.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?

  		it means an event happens to the child and execute after that it moves up to parent then another parent then another one eventually to the document

		let parent = document.getElementById("parent");
		let child = document.getElementById("child");
		parent.addEventListener("click", function() {
		  console.log("Parent clicked");
		});
		child.addEventListener("click", function() {
		  console.log("Button clicked");
		});

		if we click the child the parent element will be also clicked bcuz the child element is in the parent element

### 4. What is Event Delegation in JavaScript? Why is it useful?

		when we use event listener in the parent of the specefic element instead of using it in the specefic element we want.

	 	its useful bcuz you can use one code to add same event listener for all of the children and you can keep track where the user occuring an event and act upon it
		simply to say events happen within the child bubles up to the parent then another parent if exists

### 5. What is the difference between preventDefault() and stopPropagation() methods?
		
		stopPropagation() method uses to stop bubling - it wont go to its parent after occuring an event
		preventDefault() method uses to stop doing from the default action that the html has while occuring an event 

