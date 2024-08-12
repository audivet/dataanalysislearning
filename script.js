body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
}

.sidebar {
    width: 200px;
    background-color: #333;
    color: #fff;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.sidebar h3 {
    margin-top: 0;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar ul li {
    margin-bottom: 10px;
}

.sidebar ul li a {
    color: #fff;
    text-decoration: none;
}

.sidebar ul li a:hover {
    text-decoration: underline;
}

.container {
    flex: 1;
    margin-left: 220px;
    margin-right: 320px;
    padding: 20px;
    background-color: #fff;
    overflow-y: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container header {
    text-align: center;
    margin-bottom: 20px;
}

.notepad {
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    padding: 20px;
    background-color: #f4f4f4;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.notepad h3 {
    margin-top: 0;
}

.notepad textarea {
    width: 100%;
    height: 80%;
    resize: none;
    margin-bottom: 10px;
}

.notepad button {
    width: 100%;
    padding: 10px;
    background-color: #4285F4;
    color: #fff;
    border: none;
    cursor: pointer;
}

.notepad button:hover {
    background-color: #357ae8;
}

.console {
    margin-top: 20px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
}

.console h3 {
    margin-top: 0;
}

.console textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
}

.console button {
    display: inline-block;
    padding: 10px 15px;
    background-color: #28a745;
    color: #fff;
    border: none;
    cursor: pointer;
}

.console button:hover {
    background-color: #218838;
}

.console pre {
    margin-top: 20px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 8px;
}

.task-details {
    margin-bottom: 20px;
}

.iframe-container {
    margin-top: 30px;
    width: 100%;
}
