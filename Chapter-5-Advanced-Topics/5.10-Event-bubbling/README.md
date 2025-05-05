# Event Bubbling in Javascript

- Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.
- It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.
- In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
- The event bubbles up from parent to parent until it is handled, or until it reaches the document object.

## Avoid Event Bubbling

We can stop `Event Bubbling` by using `event.stopPropagation()` on desired element/event.

- The `stopPropagation()` method of the Event interface prevents further propagation of the current event.
- `stopPropagation()` does not prevent/affect any default behaviors

## Practical Example

![Event Bubbling Example](./event-bubbling.gif)

### :round_pushpin: Reach

[![Shivam Panchal | LinkedIn](https://img.shields.io/badge/Shivam_Panchal-eeeeee?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0A66C2)][reach_linkedin]
[![GodWin1100 | GitHub](https://img.shields.io/badge/Godwin1100-eeeeee?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)][reach_github]
[![shivamjpanchal1 | G Mail](https://img.shields.io/badge/shivamjpanchal1-eeeeee?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335)][reach_gmail]

<!-- Reach  -->

[reach_linkedin]: https://www.linkedin.com/in/shivam-panchal-godwin1100
[reach_gmail]: mailto:shivamjpanchal1@gmail.com?subject=GitHub%20Hello
[reach_github]: https://github.com/GodWin1100
