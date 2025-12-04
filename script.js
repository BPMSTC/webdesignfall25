document.addEventListener('DOMContentLoaded', () => {

    // The "Bad" examples need JavaScript to function at all, 
    // because they use non-interactive elements like <div>s.
    // This script simulates that "broken" functionality.

    // 1. Bad Navigation Logic
    // We don't need to add listeners here because we used inline onclick="..." 
    // in the HTML to make it obvious to students reading the source code.
    // (See index.html lines ~35-38)

    // 2. Bad Checkbox Logic
    // Similarly, the bad checkboxes use inline onclick to toggle a class.
    // This is a common anti-pattern: using JS for state instead of native inputs.

    console.log("Accessibility Demo Loaded. Inspector removed as requested.");
    console.log("Try tabbing through the 'Bad' examples - you can't!");

});
