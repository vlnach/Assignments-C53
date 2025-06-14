/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
// 1st step - change a text inside spans

document.getElementById('nickname').textContent = 'vlad';
document.getElementById('fav-food').textContent = 'marsh potato';
document.getElementById('hometown').textContent = 'Amsterdam';

// 2d step - add classes
const listItems = document.querySelectorAll('li');
listItems.forEach((li) => li.classList.add('list-item'));
