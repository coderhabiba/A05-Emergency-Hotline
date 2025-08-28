1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Answer: # getElementById: Used to access a spasific element by set uniqe id, not for multiple elements  # getElementsByClassName: Used to access multiple elements by giving comun classes and that function gives a html collection in console(not array, but looks similar),not for single element # querySelector: Used to access single or multiple element by Id,class or tag name anything. # querySelectorAll: Used to access multiple elements by class name or tages,and it's give a Nodelist in console like array and it's also allow loop.
2. How do you create and insert a new element into the DOM?
## Answer: To create a new element in DOM used createElement() method and for insert an element in DOM parent div used appendChild()  
3. What is Event Bubbling and how does it work?
## Answer: It's a toggling or bubbling events (upper waise or under waise) with there parents dives and child dives.
4. What is Event Delegation in JavaScript? Why is it useful?
## Answer: Where you attach a single event listener to a parent element to handle events from child elements using event bubbling.
5. What is the difference between preventDefault() and stopPropagation() methods?
## Answer: preventDefault() stop working to browser's default events, not in DOM. #stopPropagation() stop working to events in DOM, not in browser's events.