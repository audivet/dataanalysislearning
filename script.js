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
                            qrCodeImage: "python-basics.png",
                            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            shortDayDetails: "Complete 2 exercises, Watch for 30 minutes",
                            longDayDetails: "Complete 4 exercises, Watch for 60 minutes",
                            extraPoints: 10
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            qrCodeImage: "w3schools-python-exercises.png",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            shortDayDetails: "Finish 3 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 6 exercises, Spend 60 minutes",
                            extraPoints: 10
                        }
                    ]
                },
                {
                    title: "Week 2: Python Intermediate",
                    tasks: [
                        {
                            description: "Learn about data structures",
                            qrCodeImage: "python-data-structures.png",
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            shortDayDetails: "Complete 1 tutorial, Spend 30 minutes",
                            longDayDetails: "Complete 2 tutorials, Spend 60 minutes",
                            extraPoints: 15
                        },
                        {
                            description: "Work on small projects",
                            qrCodeImage: "python-projects.png",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            shortDayDetails: "Start 1 project, Spend 30 minutes",
                            longDayDetails: "Complete 1 project, Spend 60 minutes",
                            extraPoints: 15
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
                            qrCodeImage: "pandas-basics.png",
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 20
                        },
                        {
                            description: "Complete Pandas exercises",
                            qrCodeImage: "pandas-exercises.png",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            shortDayDetails: "Finish 2 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            extraPoints: 20
                        }
                    ]
                },
                {
                    title: "Week 4: Data Cleaning with Pandas",
                    tasks: [
                        {
                            description: "Practice data cleaning techniques",
                            qrCodeImage: "kaggle-pandas.png",
                            link: "https://www.kaggle.com/learn/pandas",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 25
                        },
                        {
                            description: "Work on a data cleaning project",
                            qrCodeImage: "data-cleaning-project.png",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            shortDayDetails: "Start project, Spend 30 minutes",
                            longDayDetails: "Complete project, Spend 60 minutes",
                            extraPoints: 25
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
                            qrCodeImage: "matplotlib-basics.png",
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 30
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            qrCodeImage: "matplotlib-exercises.png",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            shortDayDetails: "Finish 2 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            extraPoints: 30
                        }
                    ]
                },
                {
                    title: "Week 6: Data Visualization with Seaborn",
                    tasks: [
                        {
                            description: "Learn Seaborn basics",
                            qrCodeImage: "seaborn-basics.png",
                            link: "https://seaborn.pydata.org/",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 35
                        },
                        {
                            description: "Complete Seaborn exercises",
                            qrCodeImage: "seaborn-exercises.png",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Finish 2 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            extraPoints: 35
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 4: Advanced SQL",
            weeks: [
                {
                    title: "Week 7: SQL Basics",
                    tasks: [
                        {
                            description: "Learn SQL basics",
                            qrCodeImage: "sql-basics.png",
                            link: "https://www.w3schools.com/sql/",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 40
                        },
                        {
                            description: "Complete SQL exercises",
                            qrCodeImage: "sql-exercises.png",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            shortDayDetails: "Finish 2 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            extraPoints: 40
                        }
                    ]
                },
                {
                    title: "Week 8: Intermediate SQL",
                    tasks: [
                        {
                            description: "Learn intermediate SQL",
                            qrCodeImage: "intermediate-sql.png",
                            link: "https://www.mode.com/sql-tutorial/",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 45
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            qrCodeImage: "intermediate-sql-exercises.png",
                            link: "https://www.mode.com/sql-tutorial/",
                            shortDayDetails: "Finish 2 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            extraPoints: 45
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 5: Machine Learning Introduction",
            weeks: [
                {
                    title: "Week 9: Introduction to Machine Learning",
                    tasks: [
                        {
                            description: "Watch Andrew Ng's Machine Learning course",
                            qrCodeImage: "machine-learning-course.png",
                            link: "https://www.coursera.org/learn/machine-learning",
                            shortDayDetails: "Watch 1 lesson, Spend 45 minutes",
                            longDayDetails: "Watch 2 lessons, Spend 90 minutes",
                            extraPoints: 50
                        },
                        {
                            description: "Continue the Machine Learning course",
                            qrCodeImage: "machine-learning-continue.png",
                            link: "https://www.coursera.org/learn/machine-learning",
                            shortDayDetails: "Watch 1 lesson, Spend 45 minutes",
                            longDayDetails: "Watch 2 lessons, Spend 90 minutes",
                            extraPoints: 50
                        }
                    ]
                },
                {
                    title: "Week 10: Python for Machine Learning",
                    tasks: [
                        {
                            description: "Read Scikit-learn documentation",
                            qrCodeImage: "scikit-learn-docs.png",
                            link: "https://scikit-learn.org/stable/",
                            shortDayDetails: "Complete 1 tutorial, Spend 30 minutes",
                            longDayDetails: "Complete 2 tutorials, Spend 60 minutes",
                            extraPoints: 55
                        },
                        {
                            description: "Complete small projects using Scikit-learn",
                            qrCodeImage: "scikit-learn-examples.png",
                            link: "https://scikit-learn.org/stable/auto_examples/index.html",
                            shortDayDetails: "Start 1 project, Spend 30 minutes",
                            longDayDetails: "Complete 1 project, Spend 60 minutes",
                            extraPoints: 55
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 6: Advanced Topics & Capstone Project",
            weeks: [
                {
                    title: "Week 11: Big Data & Spark",
                    tasks: [
                        {
                            description: "Learn about Big Data",
                            qrCodeImage: "big-data.png",
                            link: "https://spark.apache.org/docs/latest/",
                            shortDayDetails: "Complete 1 lesson, Spend 30 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 60 minutes",
                            extraPoints: 60
                        },
                        {
                            description: "Start a project using Spark",
                            qrCodeImage: "spark-project.png",
                            link: "https://spark.apache.org/examples.html",
                            shortDayDetails: "Start project, Spend 30 minutes",
                            longDayDetails: "Complete project, Spend 60 minutes",
                            extraPoints: 60
                        }
                    ]
                },
                {
                    title: "Week 12: Capstone Project",
                    tasks: [
                        {
                            description: "Start the capstone project",
                            qrCodeImage: "capstone-start.png",
                            link: "https://www.kaggle.com/competitions",
                            shortDayDetails: "Plan project, Spend 60 minutes",
                            longDayDetails: "Start working on project, Spend 120 minutes",
                            extraPoints: 100
                        },
                        {
                            description: "Continue the capstone project",
                            qrCodeImage: "capstone-continue.png",
                            link: "https://www.kaggle.com/competitions",
                            shortDayDetails: "Continue working on project, Spend 60 minutes",
                            longDayDetails: "Make significant progress on project, Spend 120 minutes",
                            extraPoints: 100
                        }
                    ]
                }
            ]
        }
    ];

    const container = document.getElementById('learning-plan');
    let iframeContainer;
    let points = 0;

    function updatePointsDisplay() {
        document.getElementById('points-display').textContent = `Points: ${points}`;
    }

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
                taskDetails.textContent = `Details: ${task.shortDayDetails}`;
                taskDiv.appendChild(taskDetails);

                const qrCodeImg = document.createElement('img');
                qrCodeImg.src = `./qr-codes/${task.qrCodeImage}`;
                qrCodeImg.alt = "QR Code Unavailable";
                qrCodeImg.onerror = function() {
                    this.src = './qr-codes/fallback-image.png';
                };
                taskDiv.appendChild(qrCodeImg);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskDiv.appendChild(taskLink);

                const calendarDiv = document.createElement('div');
                calendarDiv.classList.add('calendar');

                const shortDayButton = document.createElement('button');
                shortDayButton.textContent = "Short Day";
                shortDayButton.classList.add('short-day-button');
                shortDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.shortDayDetails}`;
                    points += task.extraPoints;
                    updatePointsDisplay();
                });

                const longDayButton = document.createElement('button');
                longDayButton.textContent = "Long Day";
                longDayButton.classList.add('long-day-button');
                longDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.longDayDetails}`;
                    points += task.extraPoints * 1.5;
                    updatePointsDisplay();
                });

                taskDiv.appendChild(shortDayButton);
                taskDiv.appendChild(longDayButton);

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

    // Initialize points display
    updatePointsDisplay();
});
