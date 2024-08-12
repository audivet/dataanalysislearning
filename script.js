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
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkqtD5dpn9C8&chs=180x180",
                            link: "https://www.youtube.com/embed/kqtD5dpn9C8",
                            shortDayDetails: "Complete 2 exercises, Watch for 30 minutes",
                            longDayDetails: "Complete 5 exercises, Watch for 60 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 5,
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fpython%2Fpython_exercises.asp&chs=180x180",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            shortDayDetails: "Finish 3 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 6 exercises, Spend 60 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                        }
                    ]
                },
                {
                    title: "Week 2: Python Intermediate",
                    tasks: [
                        {
                            description: "Learn about data structures",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fdocs.python.org%2F3%2Ftutorial%2Fdatastructures.html&chs=180x180",
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            shortDayDetails: "Complete 1 tutorial, Spend 30 minutes",
                            longDayDetails: "Complete 2 tutorials, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                        },
                        {
                            description: "Work on small projects",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.pythonforbeginners.com%2Fprojects%2F15-python-projects-beginners%2F&chs=180x180",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            shortDayDetails: "Finish 1 project, Spend 30 minutes",
                            longDayDetails: "Finish 2 projects, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                        }
                    ]
                }
            ]
        }
    ];

    const container = document.getElementById('learning-plan');
    const today = new Date();
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

                const qrCodeImg = document.createElement('img');
                qrCodeImg.src = task.qrCode;
                qrCodeImg.alt = "QR Code";
                taskDiv.appendChild(qrCodeImg);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskDiv.appendChild(taskLink);

                const calendarDiv = document.createElement('div');
                calendarDiv.classList.add('calendar');

                // Day Selection Buttons
                const daySelectionDiv = document.createElement('div');
                daySelectionDiv.classList.add('day-selection');

                const shortDayButton = document.createElement('button');
                shortDayButton.textContent = "Short Day";
                shortDayButton.classList.add('short-day');
                shortDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.shortDayDetails}`;
                    shortDayButton.classList.add('selected');
                    longDayButton.classList.remove('selected');
                });

                const longDayButton = document.createElement('button');
                longDayButton.textContent = "Long Day";
                longDayButton.classList.add('long-day');
                longDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.longDayDetails}`;
                    longDayButton.classList.add('selected');
                    shortDayButton.classList.remove('selected');
                });

                daySelectionDiv.appendChild(shortDayButton);
                daySelectionDiv.appendChild(longDayButton);
                taskDiv.appendChild(daySelectionDiv);

                // Default to Short Day
                shortDayButton.click();

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
});
