document.addEventListener('DOMContentLoaded', () => {
    // Get the element where we will display the count
    const reviewCountSpan = document.getElementById('review-count');

    // 1. Get the current count from localStorage.
    // Use the nullish coalescing operator (??) to default to 0 if the item doesn't exist.
    let currentCount = Number(localStorage.getItem('reviewCount')) ?? 0;

    // 2. Increment the count by 1.
    currentCount++;

    // 3. Store the new count back into localStorage.
    localStorage.setItem('reviewCount', currentCount);

    // 4. Display the new count on the page.
    reviewCountSpan.textContent = currentCount;
});