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
                    updateCalendar(task.shortDayDuration);
                });

                const longDayButton = document.createElement('button');
                longDayButton.textContent = "Long Day";
                longDayButton.classList.add('long-day');
                longDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.longDayDetails}`;
                    longDayButton.classList.add('selected');
                    shortDayButton.classList.remove('selected');
                    updateCalendar(task.longDayDuration);
                });

                daySelectionDiv.appendChild(shortDayButton);
                daySelectionDiv.appendChild(longDayButton);
                taskDiv.appendChild(daySelectionDiv);

                // Default to Short Day
                shortDayButton.click();

                function updateCalendar(duration) {
                    calendarDiv.innerHTML = ''; // Clear existing days
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
                                if (!iframeContainer) {
                                    iframeContainer = document.createElement('div');
                                    iframeContainer.classList.add('iframe-container');
                                    dayDiv.appendChild(iframeContainer);
                                }

                                // Try to load the content in an iframe directly below the clicked box
                                iframeContainer.innerHTML = `<iframe src="${this.dataset.link}" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>`;

                                // Handle iframe loading failure
                                const iframe = iframeContainer.querySelector('iframe');
                                iframe.addEventListener('load', function() {
                                    if (iframe.contentDocument.body.innerHTML.includes("error") || iframe.contentDocument.body.innerHTML.trim() === "") {
                                        iframeContainer.innerHTML = `<p>Oops! It seems like this content can't be embedded here. But don't worry! 😊 Click the link or scan the QR code to get there directly. You're doing great, keep it up! 🚀</p>
                                            <p><a href="${dayDiv.dataset.link}" target="_blank">Go to ${dayDiv.dataset.link}</a></p>
                                            <img src="${qrCodeImg.src}" alt="QR Code" />`;
                                    }
                                });

                                // Scroll to the iframe to make it visible
                                iframe.scrollIntoView({ behavior: "smooth", block: "start" });
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

                                // Show a fun animation and message on completion
                                const messageDiv = document.createElement('div');
                                messageDiv.classList.add('completion-message');
                                messageDiv.innerHTML = `<p>🎉 Awesome job! You've completed this task. Keep up the great work! 🚀</p>`;
                                dayDiv.appendChild(messageDiv);

                                // Add a completion animation
                                dayDiv.classList.add('completion-animation');

                                // Remove the message after a few seconds
                                setTimeout(() => {
                                    dayDiv.removeChild(messageDiv);
                                    dayDiv.classList.remove('completion-animation');
                                }, 3000);

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
                        completeButton.addEventListener('click', function() {
                            checkbox.checked = true;
                            checkbox.dispatchEvent(new Event('change'));
                        });

                        dayDiv.appendChild(checkbox);
                        dayDiv.appendChild(completeButton);
                        calendarDiv.appendChild(dayDiv);
                    }
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
});
