# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)


### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Solution URL](https://github.com/noob-coder6/faq-accordion.git)
- Live Site URL: [Live site URL](https://noob-coder6.github.io/faq-accordion/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- CSS pseudo-elements for icons
- ARIA attributes for accessibility

### What I learned

This project helped me strengthen my understanding of creating accessible interactive components. I implemented a fully keyboard-navigable accordion with proper ARIA attributes:

```html
<button class="faq-question" aria-expanded="false" aria-controls="faq1-answer">
  What is Frontend Mentor, and how will it help me?
</button>
```

I learned how to use CSS pseudo-elements to dynamically change icons based on state:

```css
.faq-question::after {
  content: '';
  background-image: url('./assets/images/icon-plus.svg');
}

.faq-question[aria-expanded="true"]::after {
  background-image: url('./assets/images/icon-minus.svg');
}
```

I also improved my JavaScript skills by implementing keyboard navigation that allows users to move between questions using arrow keys:

```js
function handleKeyboardNavigation(e, currentIndex) {
  let nextIndex;
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      nextIndex = (currentIndex + 1) % questions.length;
      questions[nextIndex].focus();
      break;
    // Additional cases for ArrowUp, Home, and End keys
  }
}
```

### Continued development

In future projects, I want to focus on:

- Adding smooth animations for accordion expand/collapse transitions
- Implementing more advanced ARIA live regions for better screen reader announcements
- Exploring CSS animations and transitions for more polished user interactions
- Writing reusable JavaScript modules for common UI patterns

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)