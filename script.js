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
                {
                    title: "Week 2: Python Intermediate",
                    tasks: [
                        {
                            description: "Learn about data structures",
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 tutorial, Spend 30 minutes",
                            longDayDetails: "Complete 2 tutorials, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Work on small projects",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Finish 1 project, Spend 30 minutes",
                            longDayDetails: "Finish 2 projects, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        }
                    ]
                },
                {
                    title: "Week 3: Python Advanced Topics",
                    tasks: [
                        {
                            description: "Learn about Python modules and packages",
                            link: "https://docs.python.org/3/tutorial/modules.html",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 module, Spend 30 minutes",
                            longDayDetails: "Complete 2 modules, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Practice with advanced Python exercises",
                            link: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Finish 2 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        }
                    ]
                },
                {
                    title: "Week 4: Python Project Week",
                    tasks: [
                        {
                            description: "Start a Python project",
                            link: "https://www.python.org/about/gettingstarted/",
                            extraLink: "https://www.github.com/",
                            extraPoints: 20,
                            shortDayDetails: "Plan project, Spend 30 minutes",
                            longDayDetails: "Plan and start project, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Work on your Python project",
                            link: "https://www.github.com/",
                            extraLink: "https://www.github.com/",
                            extraPoints: 20,
                            shortDayDetails: "Work on project, Spend 30 minutes",
                            longDayDetails: "Work on project and commit progress, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 2: Data Analysis with Python",
            weeks: [
                // Repeat the structure from Month 1 for all tasks and weeks, including the full program
                // Add extraLinks, extraPoints, and embeddable options for each task
            ]
        },
        {
            month: "Month 3: Data Visualization",
            weeks: [
                // Continue the structure for all tasks and weeks
            ]
        },
        {
            month: "Month 4: Advanced SQL",
            weeks: [
                // Continue the structure for all tasks and weeks
            ]
        },
        {
            month: "Month 5: Machine Learning Introduction",
            weeks: [
                // Continue the structure for all tasks and weeks
            ]
        },
        {
            month: "Month 6: Capstone Project",
            weeks: [
                // Continue the structure for all tasks and weeks
            ]
        }
    ];

    const container = document.getElementById('learning-plan');
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
                    showTaskDetails(task, task.shortDayDetails, task.shortDayDuration);
                });

                const longDayButton = document.createElement('button');
                longDayButton.classList.add('long-day');
                longDayButton.textContent = "Long Day";
                longDayButton.addEventListener('click', () => {
                    showTaskDetails(task, task.longDayDetails, task.longDayDuration);
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

                for (let i = 0; i < task.shortDayDuration; i++) {
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
                            updatePoints(isLongDay(taskDiv) ? task.longDayDuration * 20 : task.shortDayDuration * 10);
                        } else {
                            localStorage.removeItem(this.dataset.date);
                            dayDiv.classList.remove('checked');
                            updatePoints(isLongDay(taskDiv) ? -(task.longDayDuration * 20) : -(task.shortDayDuration * 10));
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

                taskDiv.appendChild(calendarDiv);
                section.appendChild(taskDiv);
            });
        });

        container.appendChild(section);
    });

    // Add a disclaimer regarding ownership of resources
    const disclaimer = document.createElement('p');
    disclaimer.classList.add('disclaimer');
    disclaimer.textContent = "Disclaimer: All external resources are owned by their respective creators. The links provided are for educational purposes, and all content is credited to the original authors or creators.";
    container.appendChild(disclaimer);

    const pointsContainer = document.createElement('div');
    pointsContainer.id = 'points';
    pointsContainer.textContent = `Points: ${points}`;
    container.appendChild(pointsContainer);

    function showTaskDetails(task, details, duration) {
        const taskDetails = document.querySelector('.task-details.selected');
        if (taskDetails) {
            taskDetails.classList.remove('selected');
        }
        const taskDiv = document.querySelector(`.task:contains(${task.description}) .task-details`);
        taskDiv.textContent = `Details: ${details}`;
        taskDiv.classList.add('selected');
        taskDiv.scrollIntoView({ behavior: 'smooth' });
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
        const pointsContainer = document.getElementById('points');
        pointsContainer.textContent = `Points: ${points}`;
    }

    function isLongDay(taskDiv) {
        return taskDiv.querySelector('.task-details').textContent.includes("Long Day");
    }
});
