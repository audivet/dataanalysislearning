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
                            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            duration: 3,
                            details: "Complete 3 exercises, Watch for 45 minutes per day"
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fpython%2Fpython_exercises.asp&chs=180x180",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            duration: 4,
                            details: "Finish 6 exercises, Spend 60 minutes per day"
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
                            duration: 3,
                            details: "Complete 2 tutorials, Spend 45 minutes"
                        },
                        {
                            description: "Work on small projects",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.pythonforbeginners.com%2Fprojects%2F15-python-projects-beginners%2F&chs=180x180",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            duration: 4,
                            details: "Finish 1 project per day, Spend 60 minutes"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 2: Data Analysis with Python",
            weeks: [
                {
                    title: "Week 3: Pandas Introduction",
                    tasks: [
                        {
                            description: "Learn the basics of Pandas",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fpandas.pydata.org%2Fpandas-docs%2Fstable%2Fgetting_started%2Findex.html&chs=180x180",
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete Pandas exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3resource.com%2Fpython-exercises%2Fpandas%2Findex.php&chs=180x180",
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
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fpandas&chs=180x180",
                            link: "https://www.kaggle.com/learn/pandas",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Work on a data cleaning project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kdnuggets.com%2F2019%2F06%2Fdata-cleaning-tutorial-python.html&chs=180x180",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            duration: 4,
                            details: "Finish 1 project, Spend 60 minutes per day"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 3: Data Visualization",
            weeks: [
                {
                    title: "Week 5: Introduction to Matplotlib",
                    tasks: [
                        {
                            description: "Learn Matplotlib basics",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmatplotlib.org%2Fstable%2Fusers%2Fgetting_started%2F&chs=180x180",
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3resource.com%2Fpython-exercises%2Fmatplotlib%2Findex.php&chs=180x180",
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
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fseaborn.pydata.org%2F&chs=180x180",
                            link: "https://seaborn.pydata.org/",
                            duration: 3,
                            details: "Complete 2 lessons, Spend 45 minutes"
                        },
                        {
                            description: "Complete Seaborn exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 4,
                            details: "Finish 4 exercises, Spend 60 minutes per day"
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
});
