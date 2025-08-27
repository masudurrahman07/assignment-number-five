1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference between getElementById, getElementsByClassName, and querySelector and querySelectorAll is , the method (function) called getElementById finds and gets an element by its ID. where getElementsByClassName is used when someone wants to find the all elements that shares the same class name. unlike getElementById it gives you a group of elements.

2.How do you create and insert a new element into the DOM?

Ans : To create and insert a new element into the page, you will first have to create the element you want, like for example a paragraph. Then you're gonna add text to it. After which, you will choose where on the page it should be and then attach it there, so it appears in the browser. This way, you can dynamically add elements to your webpage without having to write it in the HTML file directly. and to do so there's a JS method called 'createElement'.

3.What is Event Bubbling and how does it work?

Ans : Event Bubbling is behavior of events in the browser. and it happens when, for example you 'click' on an element and the event starts on that element you just clicked and then moves up to its parent elements one by one. It's like it's going up like a bubble through the page.another example is, when you click a button inside a div, the click happens on the button first, then the div, then the body, and so on. 

4.What is Event Delegation in JavaScript? Why is it useful?

Ans : Event Delegation is a design pattern in JavaScript where you attach one event listener on a parent element and by doing so you can manage events for all of its child elements. so you don't have to keep adding it to every child element. The parent element then “grabs” events from its children. and Event Delegation is a very useful technique in JS because programmers use it to handle events efficiently. the code remains clean and using it will also save up memory.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans. preventDefault() and stopPropagation() these are two different methods that is used to control the behavior of events in JS. for example,preventDefault() method stops the browser’s default action for an event, like preventing a form from submitting.just like when you click an anchor tag, the default action for the browser is to navigate to the URL in the href attribute. but if you use event.preventDefault() it will stop the browser from navigating. and the method stopPropagation() stops an event from bubbling up the DOM tree. to put it in simple words, preventDefault() affects on the browser's action and stopPropagation() affects how the event spreads through the DOM tree.
