document.addEventListener('DOMContentLoaded', function() {
    const learningPlan = [
        {
            month: "Month 1: Python Basics",
            weeks: [
                {
                    title: "Week 1: Python Basics",
                    tasks: [
                        {
                            description: "Watch Python basics tutorials",
                            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 exercises, Watch for 30 minutes",
                            longDayDetails: "Complete 4 exercises, Watch for 60 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
                            shortDayDetails: "Finish 3 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 6 exercises, Spend 60 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                // Continue for other weeks and months
            ]
        },
        // Add more months and weeks as needed
    ];

    const container = document.getElementById('learning-plan');
    const pointsDisplay = document.getElementById('points');
    const today = new Date();
    let points = 0;
    let iframeContainer;

    learningPlan.forEach(month => {
        const section = document.createElement('div');
        section.classList.add('section');

        const monthTitle = document.createElement('h2');
        monthTitle.textContent = month.month;
        section.appendChild(monthTitle);

        month.weeks.forEach(week => {
            const weekTitle = document.createElement('h3');
            weekTitle.textContent = week.title;
            section.appendChild(weekTitle);

            week.tasks.forEach(task => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task');

                const taskDescription = document.createElement('h4');
                taskDescription.textContent = task.description;
                taskDiv.appendChild(taskDescription);

                const taskDetails = document.createElement('p');
                taskDetails.classList.add('task-details');
                taskDetails.textContent = `Details: ${task.shortDayDetails}`;
                taskDiv.appendChild(taskDetails);

                const buttonGroup = document.createElement('div');
                buttonGroup.classList.add('button-group');

                const shortDayButton = document.createElement('button');
                shortDayButton.classList.add('short-day');
                shortDayButton.textContent = "Short Day";
                shortDayButton.addEventListener('click', () => {
                    updateTaskDetails(taskDiv, task.shortDayDetails, task.shortDayDuration, task);
                    updateSidebarResources(task);
                });

                const longDayButton = document.createElement('button');
                longDayButton.classList.add('long-day');
                longDayButton.textContent = "Long Day";
                longDayButton.addEventListener('click', () => {
                    updateTaskDetails(taskDiv, task.longDayDetails, task.longDayDuration, task);
                    updateSidebarResources(task);
                });

                buttonGroup.appendChild(shortDayButton);
                buttonGroup.appendChild(longDayButton);
                taskDiv.appendChild(buttonGroup);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskLink.classList.add('resource-link');
                taskLink.addEventListener('click', () => {
                    updatePoints(10);
                });

                const extraLink = document.createElement('a');
                extraLink.href = task.extraLink;
                extraLink.target = "_blank";
                extraLink.textContent = "Try this for extra points!";
                extraLink.classList.add('extra-link');
                extraLink.addEventListener('click', () => {
                    updatePoints(task.extraPoints);
                });

                taskDiv.appendChild(taskLink);
                taskDiv.appendChild(extraLink);

                const calendarDiv = document.createElement('div');
                calendarDiv.classList.add('calendar');
                taskDiv.appendChild(calendarDiv);

                section.appendChild(taskDiv);

                // Initialize the task with the short day details
                updateTaskDetails(taskDiv, task.shortDayDetails, task.shortDayDuration, task);
            });
        });

        container.appendChild(section);
    });

    function updateTaskDetails(taskDiv, details, duration, task) {
        const taskDetails = taskDiv.querySelector('.task-details');
        taskDetails.textContent = `Details: ${details}`;

        const calendarDiv = taskDiv.querySelector('.calendar');
        calendarDiv.innerHTML = '';  // Clear previous calendar

        const today = new Date();
        for (let i = 0; i < duration; i++) {
            const taskDate = new Date(today);
            taskDate.setDate(today.getDate() + i);

            const dayDiv = document.createElement('div');
            const isWeekend = taskDate.getDay() % 6 === 0;
            dayDiv.classList.add('day', isWeekend ? 'weekend' : 'weekday');
            dayDiv.dataset.link = task.link;

            const dayLabel = document.createElement('div');
            dayLabel.textContent = taskDate.toDateString();
            dayDiv.appendChild(dayLabel);

            dayDiv.addEventListener('click', function(e) {
                if (!e.target.matches('input[type="checkbox"], button')) {
                    if (task.embeddable) {
                        if (!iframeContainer) {
                            iframeContainer = document.createElement('div');
                            iframeContainer.classList.add('iframe-container');
                            container.appendChild(iframeContainer);
                        }
                        iframeContainer.innerHTML = `<iframe src="${this.dataset.link}" width="100%" height="600px"></iframe>`;
                        iframeContainer.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        alert('This resource cannot be embedded. Please use the link to access it directly.');
                    }
                }
            });

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.date = taskDate.toISOString().slice(0, 10);
            checkbox.checked = localStorage.getItem(checkbox.dataset.date) === 'done';

            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    localStorage.setItem(this.dataset.date, 'done');
                    dayDiv.classList.add('checked');
                    updatePoints(duration * 10);
                } else {
                    localStorage.removeItem(this.dataset.date);
                    dayDiv.classList.remove('checked');
                }
            });

            if (checkbox.checked) {
                dayDiv.classList.add('checked');
            }

            const completeButton = document.createElement('button');
            completeButton.textContent = "Complete Day";
            completeButton.classList.add('completion-animation');
            completeButton.addEventListener('click', function() {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event('change'));
                showCompletionMessage();
            });

            dayDiv.appendChild(checkbox);
            dayDiv.appendChild(completeButton);
            calendarDiv.appendChild(dayDiv);
        }
    }

    function updateSidebarResources(task) {
        const resourceList = document.getElementById('resource-list');
        resourceList.innerHTML = '';  // Clear the existing list

        // Add main resource link
        const mainResource = document.createElement('li');
        mainResource.innerHTML = `<a href="${task.link}" target="_blank">Main Resource</a>`;
        resourceList.appendChild(mainResource);

        // Add extra resource link
        const extraResource = document.createElement('li');
        extraResource.innerHTML = `<a href="${task.extraLink}" target="_blank">Extra Resource (Extra Points)</a>`;
        resourceList.appendChild(extraResource);
    }

    function showCompletionMessage() {
        const message = document.createElement('div');
        message.classList.add('completion-message');
        message.textContent = "Congratulations on completing the day!";
        container.appendChild(message);
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    function updatePoints(amount) {
        points += amount;
        pointsDisplay.textContent = points;
    }

    // Notepad functionality
    document.getElementById('notepad-text').value = localStorage.getItem('notepad') || '';

    document.getElementById('save-notes').addEventListener('click', function() {
        const notes = document.getElementById('notepad-text').value;
        localStorage.setItem('notepad', notes);
        alert('Notes saved!');
    });

    // Console functionality
    document.getElementById('run-code').addEventListener('click', function() {
        const code = document.getElementById('code-editor').value;

        try {
            const output = eval(code);  // Simple JavaScript console
            document.getElementById('console-output').textContent = output;
        } catch (error) {
            document.getElementById('console-output').textContent = error;
        }
    });
});
