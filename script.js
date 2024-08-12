document.addEventListener('DOMContentLoaded', function() {
    const pointsDisplay = document.getElementById('points');
    let points = 0;

    function updatePoints(amount) {
        points += amount;
        pointsDisplay.textContent = points;
    }

    // Notepad functionality
    const notepadText = document.getElementById('notepad-text');
    notepadText.value = localStorage.getItem('notepad') || '';

    document.getElementById('save-notes').addEventListener('click', function() {
        const notes = notepadText.value;
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

    // Minimize functionality
    window.toggleMinimize = function(elementId) {
        const element = document.getElementById(elementId);
        if (element.classList.contains('minimized')) {
            element.classList.remove('minimized');
        } else {
            element.classList.add('minimized');
        }
    };

    // Learning Plan Implementation
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
                            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            shortDayDetails: "Complete 2 exercises, Watch for 30 minutes",
                            longDayDetails: "Complete 4 exercises, Watch for 60 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.w3schools.com/python/python_exercises.asp",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            shortDayDetails: "Finish 3 exercises, Spend 30 minutes",
                            longDayDetails: "Finish 6 exercises, Spend 60 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            shortDayDetails: "Complete 2 tutorials, Spend 45 minutes",
                            longDayDetails: "Complete 4 tutorials, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/intermediate-python",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Work on small projects",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://www.practicepython.org/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 3: Python Advanced",
                    tasks: [
                        {
                            description: "Learn about advanced Python topics",
                            link: "https://realpython.com/",
                            shortDayDetails: "Complete 2 advanced tutorials, Spend 45 minutes",
                            longDayDetails: "Complete 4 advanced tutorials, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/advanced-python",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Work on advanced projects",
                            link: "https://www.pythonforbeginners.com/",
                            shortDayDetails: "Complete 1 advanced project, Spend 60 minutes",
                            longDayDetails: "Complete 2 advanced projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://www.kaggle.com/learn/python",
                            extraPoints: 20,
                            embeddable: false
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
                    title: "Week 4: Pandas Introduction",
                    tasks: [
                        {
                            description: "Learn the basics of Pandas",
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/pandas-foundations",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete Pandas exercises",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            shortDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 120 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.kaggle.com/learn/pandas",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 5: Data Cleaning with Pandas",
                    tasks: [
                        {
                            description: "Practice data cleaning techniques",
                            link: "https://www.kaggle.com/learn/pandas",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/cleaning-data-in-python",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Work on a data cleaning project",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://realpython.com/python-data-cleaning-numpy-pandas/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 6: Data Manipulation with Pandas",
                    tasks: [
                        {
                            description: "Learn data manipulation techniques",
                            link: "https://www.kaggle.com/learn/pandas",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/manipulating-dataframes-with-pandas",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Work on a data manipulation project",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://realpython.com/pandas-python-analysis/",
                            extraPoints: 20,
                            embeddable: false
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
                    title: "Week 7: Introduction to Matplotlib",
                    tasks: [
                        {
                            description: "Learn Matplotlib basics",
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/introduction-to-data-visualization-with-matplotlib",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            shortDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 120 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://realpython.com/python-matplotlib-guide/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 8: Data Visualization with Seaborn",
                    tasks: [
                        {
                            description: "Learn Seaborn basics",
                            link: "https://seaborn.pydata.org/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/introduction-to-data-visualization-with-seaborn",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete Seaborn exercises",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 120 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://realpython.com/python-seaborn-data-visualization/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 9: Advanced Data Visualization",
                    tasks: [
                        {
                            description: "Learn advanced visualization techniques",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/advanced-data-visualization-with-seaborn",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Work on a data visualization project",
                            link: "https://www.kdnuggets.com/2021/02/beginners-guide-seaborn-python-visualization-library.html",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://realpython.com/python-data-visualization-bokeh/",
                            extraPoints: 20,
                            embeddable: false
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
                    title: "Week 10: SQL Basics",
                    tasks: [
                        {
                            description: "Learn SQL basics",
                            link: "https://www.w3schools.com/sql/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/intro-to-sql-for-data-science",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete SQL exercises",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            shortDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 120 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://mode.com/sql-tutorial/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 11: Intermediate SQL",
                    tasks: [
                        {
                            description: "Learn intermediate SQL",
                            link: "https://www.datacamp.com/courses/intermediate-sql",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.mode.com/sql-tutorial/",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            link: "https://mode.com/sql-tutorial/",
                            shortDayDetails: "Finish 4 exercises, Spend 60 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 120 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/intermediate-sql",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 12: Advanced SQL",
                    tasks: [
                        {
                            description: "Learn advanced SQL",
                            link: "https://www.datacamp.com/courses/advanced-sql",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://mode.com/sql-tutorial/",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Work on SQL projects",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://www.kaggle.com/learn/advanced-sql",
                            extraPoints: 20,
                            embeddable: false
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
                    title: "Week 13: Introduction to Machine Learning",
                    tasks: [
                        {
                            description: "Watch Andrew Ng's Machine Learning course",
                            link: "https://www.coursera.org/learn/machine-learning",
                            shortDayDetails: "Watch 1 lesson, Spend 45 minutes",
                            longDayDetails: "Watch 2 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/intro-to-machine-learning",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete the Machine Learning course",
                            link: "https://www.coursera.org/learn/machine-learning",
                            shortDayDetails: "Finish 1 assignment, Spend 60 minutes",
                            longDayDetails: "Finish 2 assignments, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://www.kaggle.com/learn/intro-to-machine-learning",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 14: Python for Machine Learning",
                    tasks: [
                        {
                            description: "Read Scikit-learn documentation",
                            link: "https://scikit-learn.org/stable/",
                            shortDayDetails: "Read 2 sections, Spend 45 minutes",
                            longDayDetails: "Read 4 sections, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete small projects using Scikit-learn",
                            link: "https://scikit-learn.org/stable/auto_examples/index.html",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://realpython.com/python-machine-learning/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 15: Deep Learning Basics",
                    tasks: [
                        {
                            description: "Watch the Deep Learning Specialization",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            shortDayDetails: "Watch 1 lesson, Spend 45 minutes",
                            longDayDetails: "Watch 2 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/deep-learning-in-python",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete the Deep Learning Specialization",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            shortDayDetails: "Finish 1 assignment, Spend 60 minutes",
                            longDayDetails: "Finish 2 assignments, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://www.kaggle.com/learn/deep-learning",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                }
            ]
        },
        // Month 6: Advanced Machine Learning and Deployment
        {
            month: "Month 6: Advanced Machine Learning and Deployment",
            weeks: [
                {
                    title: "Week 16: Advanced Machine Learning",
                    tasks: [
                        {
                            description: "Learn advanced machine learning concepts",
                            link: "https://www.coursera.org/learn/advanced-machine-learning",
                            shortDayDetails: "Watch 1 lesson, Spend 45 minutes",
                            longDayDetails: "Watch 2 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/advanced-machine-learning",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Complete advanced machine learning projects",
                            link: "https://www.kaggle.com/learn/advanced-machine-learning",
                            shortDayDetails: "Complete 1 project, Spend 60 minutes",
                            longDayDetails: "Complete 2 projects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://realpython.com/advanced-python-machine-learning/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 17: Model Deployment",
                    tasks: [
                        {
                            description: "Learn about model deployment",
                            link: "https://www.coursera.org/learn/model-deployment",
                            shortDayDetails: "Watch 1 lesson, Spend 45 minutes",
                            longDayDetails: "Watch 2 lessons, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 3,
                            extraLink: "https://www.datacamp.com/courses/deploying-machine-learning-models",
                            extraPoints: 20,
                            embeddable: false
                        },
                        {
                            description: "Deploy machine learning models",
                            link: "https://www.kdnuggets.com/2020/04/guide-deploying-machine-learning-models.html",
                            shortDayDetails: "Deploy 1 model, Spend 60 minutes",
                            longDayDetails: "Deploy 2 models, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://realpython.com/deploying-machine-learning-models/",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 18: Capstone Project",
                    tasks: [
                        {
                            description: "Work on your capstone project",
                            link: "https://www.coursera.org/learn/machine-learning-project",
                            shortDayDetails: "Work on 1 aspect, Spend 60 minutes",
                            longDayDetails: "Work on 2 aspects, Spend 120 minutes",
                            shortDayDuration: 4,
                            longDayDuration: 4,
                            extraLink: "https://www.kaggle.com/learn/intro-to-machine-learning",
                            extraPoints: 20,
                            embeddable: false
                        }
                    ]
                }
            ]
        }
    ];

    const container = document.getElementById('learning-plan');

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
                qrCodeImg.src = task.qrCode ? task.qrCode : "QR Code Unavailable";
                qrCodeImg.alt = "QR Code";
                taskDiv.appendChild(qrCodeImg);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskDiv.appendChild(taskLink);

                const shortDayButton = document.createElement('button');
                shortDayButton.textContent = "Short Day";
                shortDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.shortDayDetails}`;
                });
                taskDiv.appendChild(shortDayButton);

                const longDayButton = document.createElement('button');
                longDayButton.textContent = "Long Day";
                longDayButton.addEventListener('click', function() {
                    taskDetails.textContent = `Details: ${task.longDayDetails}`;
                });
                taskDiv.appendChild(longDayButton);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        updatePoints(task.extraPoints);
                    } else {
                        updatePoints(-task.extraPoints);
                    }
                });
                taskDiv.appendChild(checkbox);

                section.appendChild(taskDiv);
            });
        });

        container.appendChild(section);
    });
});
