document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            toggleAnswer(question);
        });

        question.addEventListener('keydown', (e) => {
            handleKeyboardNavigation(e, index);
        });
    });

    function toggleAnswer(question) {
        const answer = document.getElementById(question.getAttribute('aria-controls'));
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other open items for a classic accordion feel
        questions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                const otherAnswer = document.getElementById(q.getAttribute('aria-controls'));
                otherAnswer.hidden = true;
            }
        });

        // Toggle the clicked item
        question.setAttribute('aria-expanded', !isExpanded);
        answer.hidden = isExpanded;
    }

    function handleKeyboardNavigation(e, currentIndex) {
        let nextIndex;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                nextIndex = (currentIndex + 1) % questions.length;
                questions[nextIndex].focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                nextIndex = (currentIndex - 1 + questions.length) % questions.length;
                questions[nextIndex].focus();
                break;
            case 'Home':
                e.preventDefault();
                questions[0].focus();
                break;
            case 'End':
                e.preventDefault();
                questions[questions.length - 1].focus();
                break;
        }
    }
});