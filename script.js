document.addEventListener('DOMContentLoaded', function () {
    const learningPlan = [
        // Month 1: Python Basics
        {
            month: "Month 1: Python Basics",
            weeks: [
                {
                    title: "Week 1: Python Basics",
                    tasks: [
                        {
                            description: "Watch Python basics tutorials",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.youtube.com/watch?v=kqtD5dpn9C8&chs=180x180",
                            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            duration: 3,
                            details: "Complete 2 exercises, Watch for 30 minutes per day"
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.w3schools.com/python/python_exercises.asp&chs=180x180",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            duration: 4,
                            details: "Finish 3 exercises, Spend 30 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Python Intermediate",
                    tasks: [
                        {
                            description: "Learn about data structures",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://docs.python.org/3/tutorial/datastructures.html&chs=180x180",
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            duration: 3,
                            details: "Complete 2 tutorials, Spend 45 minutes"
                        },
                        {
                            description: "Work on small projects",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.pythonforbeginners.com/projects/15-python-projects-beginners/&chs=180x180",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            duration: 4,
                            details: "Finish 1 project per day, Spend 60 minutes"
                        }
                    ]
                }
            ]
        },
        // Month 2: Data Analysis with Python
        {
            month: "Month 2: Data Analysis with Python",
            weeks: [
                {
                    title: "Week 3: Pandas Introduction",
                    tasks: [
                        {
                            description: "Learn the basics of Pandas",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html&chs=180x180",
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete Pandas exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.w3resource.com/python-exercises/pandas/index.php&chs=180x180",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Data Cleaning with Pandas",
                    tasks: [
                        {
                            description: "Practice data cleaning techniques",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.kaggle.com/learn/pandas&chs=180x180",
                            link: "https://www.kaggle.com/learn/pandas",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Work on a data cleaning project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html&chs=180x180",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            duration: 4,
                            details: "Finish 1 project, Spend 60 minutes per day"
                        }
                    ]
                }
            ]
        },
        // Month 3: Data Visualization
        {
            month: "Month 3: Data Visualization",
            weeks: [
                {
                    title: "Week 5: Introduction to Matplotlib",
                    tasks: [
                        {
                            description: "Learn Matplotlib basics",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://matplotlib.org/stable/users/getting_started/&chs=180x180",
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.w3resource.com/python-exercises/matplotlib/index.php&chs=180x180",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 6: Data Visualization with Seaborn",
                    tasks: [
                        {
                            description: "Learn Seaborn basics",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://seaborn.pydata.org/&chs=180x180",
                            link: "https://seaborn.pydata.org/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete Seaborn exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.kaggle.com/learn/data-visualization&chs=180x180",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                }
            ]
        },
        // Month 4: Advanced SQL
        {
            month: "Month 4: Advanced SQL",
            weeks: [
                {
                    title: "Week 7: SQL Basics",
                    tasks: [
                        {
                            description: "Learn SQL basics",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.w3schools.com/sql/&chs=180x180",
                            link: "https://www.w3schools.com/sql/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete SQL exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.w3schools.com/sql/sql_exercises.asp&chs=180x180",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 8: Intermediate SQL",
                    tasks: [
                        {
                            description: "Learn intermediate SQL",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.mode.com/sql-tutorial/&chs=180x180",
                            link: "https://www.mode.com/sql-tutorial/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.mode.com/sql-tutorial/&chs=180x180",
                            link: "https://www.mode.com/sql-tutorial/",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                }
            ]
        },
        // Month 5: Machine Learning Introduction
        {
            month: "Month 5: Machine Learning Introduction",
            weeks: [
                {
                    title: "Week 9: Introduction to Machine Learning",
                    tasks: [
                        {
                            description: "Watch Andrew Ng's Machine Learning course",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.coursera.org/learn/machine-learning&chs=180x180",
                            link: "https://www.coursera.org/learn/machine-learning",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Continue the Machine Learning course",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.coursera.org/learn/machine-learning&chs=180x180",
                            link: "https://www.coursera.org/learn/machine-learning",
                            duration: 4,
                            details: "Finish 2 exercises, Spend 60 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 10: Python for Machine Learning",
                    tasks: [
                        {
                            description: "Read Scikit-learn documentation",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://scikit-learn.org/stable/user_guide.html&chs=180x180",
                            link: "https://scikit-learn.org/stable/user_guide.html",
                            duration: 3,
                            details: "Complete 2 tutorials, Spend 45 minutes"
                        },
                        {
                            description: "Complete Scikit-learn exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.w3schools.com/python/python_ml_getting_started.asp&chs=180x180",
                            link: "https://www.w3schools.com/python/python_ml_getting_started.asp",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                }
            ]
        },
        // Month 6: Advanced Machine Learning & Capstone Project
        {
            month: "Month 6: Advanced Machine Learning & Capstone Project",
            weeks: [
                {
                    title: "Week 11: Advanced Machine Learning Techniques",
                    tasks: [
                        {
                            description: "Learn about Deep Learning",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.deeplearning.ai/&chs=180x180",
                            link: "https://www.deeplearning.ai/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Implement a Deep Learning project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.kaggle.com/learn/deep-learning&chs=180x180",
                            link: "https://www.kaggle.com/learn/deep-learning",
                            duration: 4,
                            details: "Finish 1 project, Spend 60 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 12: Capstone Project",
                    tasks: [
                        {
                            description: "Work on your capstone project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https://www.github.com/&chs=180x180",
                            link: "https://www.github.com/",
                            duration: 7,
                            details: "Complete your capstone project"
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
                taskDetails.textContent = `Details: ${task.details}`;
                taskDiv.appendChild(taskDetails);

                const qrCodeImg = document.createElement('img');
                qrCodeImg.src = task.qrCode;
                qrCodeImg.alt = "QR Code";
                qrCodeImg.onerror = function() {
                    qrCodeImg.src = 'fallback-image.png';
                    qrCodeImg.alt = "QR Code Unavailable";
                };
                taskDiv.appendChild(qrCodeImg);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskDiv.appendChild(taskLink);

                const calendarDiv = document.createElement('div');
                calendarDiv.classList.add('calendar');

                for (let i = 0; i < task.duration; i++) {
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
                                container.appendChild(iframeContainer);
                            }
                            iframeContainer.innerHTML = `<iframe src="${this.dataset.link}" width="100%" height="600px"></iframe>`;
                            iframeContainer.scrollIntoView({ behavior: 'smooth' });
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
                        // Increment points
                        const pointsDisplay = document.getElementById('points');
                        let points = parseInt(localStorage.getItem('points')) || 0;
                        points += dayDiv.classList.contains('long-day') ? 10 : 5;
                        localStorage.setItem('points', points);
                        pointsDisplay.textContent = `Points: ${points}`;
                    });

                    dayDiv.appendChild(checkbox);
                    dayDiv.appendChild(completeButton);
                    calendarDiv.appendChild(dayDiv);
                }

                taskDiv.appendChild(calendarDiv);

                // Add day type selection buttons
                const shortDayButton = document.createElement('button');
                shortDayButton.textContent = "Short Day";
                shortDayButton.classList.add('short-day-btn');
                shortDayButton.addEventListener('click', function() {
                    dayDiv.classList.remove('long-day');
                    dayDiv.classList.add('short-day');
                });

                const longDayButton = document.createElement('button');
                longDayButton.textContent = "Long Day";
                longDayButton.classList.add('long-day-btn');
                longDayButton.addEventListener('click', function() {
                    dayDiv.classList.remove('short-day');
                    dayDiv.classList.add('long-day');
                });

                taskDiv.appendChild(shortDayButton);
                taskDiv.appendChild(longDayButton);
                section.appendChild(taskDiv);
            });
        });

        container.appendChild(section);
    });

    // Initialize points display
    const pointsDisplay = document.createElement('div');
    pointsDisplay.id = 'points';
    pointsDisplay.textContent = `Points: ${localStorage.getItem('points') || 0}`;
    document.body.insertBefore(pointsDisplay, document.body.firstChild);

    // Add a disclaimer regarding ownership of resources
    const disclaimer = document.createElement('p');
    disclaimer.classList.add('disclaimer');
    disclaimer.textContent = "Disclaimer: All external resources are owned by their respective creators. The links provided are for educational purposes, and all content is credited to the original authors or creators.";
    container.appendChild(disclaimer);
});
