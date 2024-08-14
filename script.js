HEAD
document.getElementById('toggle-console').addEventListener('click', function() {
    const consoleContainer = document.getElementById('console-container');
    if (consoleContainer.classList.contains('minimized')) {
        consoleContainer.classList.remove('minimized');
        consoleContainer.classList.add('expanded');
    } else {
        consoleContainer.classList.remove('expanded');
        consoleContainer.classList.add('minimized');
    }
});

document.getElementById('toggle-notepad').addEventListener('click', function() {
    const notepadContainer = document.getElementById('notepad-container');
    if (notepadContainer.classList.contains('minimized')) {
        notepadContainer.classList.remove('minimized');
        notepadContainer.classList.add('expanded');
    } else {
        notepadContainer.classList.remove('expanded');
        notepadContainer.classList.add('minimized');
    }
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

document.getElementById('toggle-console').addEventListener('click', function() {
    const consoleContainer = document.getElementById('console-container');
    consoleContainer.classList.toggle('minimized');
});

document.getElementById('toggle-notepad').addEventListener('click', function() {
    const notepadContainer = document.getElementById('notepad-container');
    notepadContainer.classList.toggle('minimized');
});
// Toggle Sidebar on Hamburger Menu Click
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});
