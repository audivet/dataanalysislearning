// Toggle Sidebar on Hamburger Menu Click
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});

// Sidebar Toggle Indicator Click
document.querySelector('.toggle-indicator').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '🌙';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, footer, .sidebar, button, #notepad, #code-console')
        .forEach(element => element.classList.toggle('dark-mode'));

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
    } else {
        darkModeToggle.innerHTML = '🌙';
    }
});

// Initial Setup for Sidebar Indicator and Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    
    // Add Sidebar Toggle Indicator if not present
    if (!document.querySelector('.sidebar .toggle-indicator')) {
        const toggleIndicator = document.createElement('div');
        toggleIndicator.className = 'toggle-indicator';
        sidebar.appendChild(toggleIndicator);
    }
    
    // Check and apply dark mode from local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('header, footer, .sidebar, button, #notepad, #code-console')
            .forEach(element => element.classList.add('dark-mode'));
        darkModeToggle.innerHTML = '☀️';
    } else {
        darkModeToggle.innerHTML = '🌙';
    }
});

// Save Dark Mode Preference
darkModeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Minimize/Expand Console
document.getElementById('toggle-console').addEventListener('click', function() {
    const consoleContainer = document.getElementById('console-container');
    consoleContainer.classList.toggle('minimized');
});

// Minimize/Expand Notepad
document.getElementById('toggle-notepad').addEventListener('click', function() {
    const notepadContainer = document.getElementById('notepad-container');
    notepadContainer.classList.toggle('minimized');
});

// Code running functionality (example)
document.getElementById('run-code').addEventListener('click', function() {
    const code = document.getElementById('code-console').value;
    try {
        const result = eval(code); // Note: eval() is dangerous if used with untrusted input.
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
});

// Save notes functionality
document.getElementById('save-notes').addEventListener('click', function() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('userNotes', notes);
    alert('Notes saved!');
});

// Load saved notes
window.onload = function() {
    const savedNotes = localStorage.getItem('userNotes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
};
