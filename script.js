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
                            duration: 7, // 7 days
                            details: "Complete 2 exercises, Watch for 30 minutes per day"
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            duration: 7, // 7 days
                            details: "Finish 3 exercises, Spend 30 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Python Intermediate",
                    tasks: [
                        {
                            description: "Learn about data structures",
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            duration: 7, // 7 days
                            details: "Complete 2 tutorials, Spend 45 minutes per day"
                        },
                        {
                            description: "Work on small projects",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            duration: 7, // 7 days
                            details: "Finish 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 3: Python Advanced Topics",
                    tasks: [
                        {
                            description: "Dive into Python's standard library",
                            link: "https://docs.python.org/3/library/",
                            duration: 7, // 7 days
                            details: "Explore modules, Spend 45 minutes per day"
                        },
                        {
                            description: "Implement a project using Python’s advanced features",
                            link: "https://realpython.com/intermediate-python-project-ideas/",
                            duration: 7, // 7 days
                            details: "Work on a project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Python Testing and Debugging",
                    tasks: [
                        {
                            description: "Learn about unit testing and debugging",
                            link: "https://realpython.com/python-testing/",
                            duration: 7, // 7 days
                            details: "Write tests, Spend 30 minutes per day"
                        },
                        {
                            description: "Apply debugging techniques to a project",
                            link: "https://realpython.com/python-debugging-pdb/",
                            duration: 7, // 7 days
                            details: "Debug code, Spend 1 hour per day"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 2: Data Analysis with Python",
            weeks: [
                {
                    title: "Week 1: Pandas Introduction",
                    tasks: [
                        {
                            description: "Learn the basics of Pandas",
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Complete Pandas exercises",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            duration: 7, // 7 days
                            details: "Finish 4 exercises, Spend 60 minutes per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Data Cleaning with Pandas",
                    tasks: [
                        {
                            description: "Practice data cleaning techniques",
                            link: "https://www.kaggle.com/learn/pandas",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Work on a data cleaning project",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            duration: 7, // 7 days
                            details: "Finish 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 3: Data Aggregation and Grouping",
                    tasks: [
                        {
                            description: "Learn how to aggregate and group data",
                            link: "https://pandas.pydata.org/pandas-docs/stable/user_guide/groupby.html",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Complete aggregation exercises",
                            link: "https://www.datacamp.com/courses/pandas-foundations",
                            duration: 7, // 7 days
                            details: "Finish 4 exercises, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Advanced Data Manipulation",
                    tasks: [
                        {
                            description: "Advanced data manipulation with Pandas",
                            link: "https://www.datacamp.com/courses/manipulating-dataframes-with-pandas",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Work on a data manipulation project",
                            link: "https://realpython.com/python-data-cleaning-numpy-pandas/",
                            duration: 7, // 7 days
                            details: "Finish 1 project, Spend 1 hour per day"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 3: Data Visualization",
            weeks: [
                {
                    title: "Week 1: Introduction to Matplotlib",
                    tasks: [
                        {
                            description: "Learn Matplotlib basics",
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            duration: 7, // 7 days
                            details: "Finish 4 exercises, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Data Visualization with Seaborn",
                    tasks: [
                        {
                            description: "Learn Seaborn basics",
                            link: "https://seaborn.pydata.org/",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Complete Seaborn exercises",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 7, // 7 days
                            details: "Finish 4 exercises, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 3: Advanced Data Visualization",
                    tasks: [
                        {
                            description: "Advanced visualization techniques",
                            link: "https://realpython.com/python-data-visualization-bokeh/",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Create advanced visualizations",
                            link: "https://www.datacamp.com/courses/introduction-to-data-visualization-with-python",
                            duration: 7, // 7 days
                            details: "Finish 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Data Visualization Projects",
                    tasks: [
                        {
                            description: "Work on a comprehensive visualization project",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 7, // 7 days
                            details: "Complete project, Spend 1.5 hours per day"
                        },
                        {
                            description: "Enhance project with advanced techniques",
                            link: "https://www.datacamp.com/courses/intermediate-data-visualization-with-seaborn",
                            duration: 7, // 7 days
                            details: "Finish enhancements, Spend 1 hour per day"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 4: Machine Learning Introduction",
            weeks: [
                {
                    title: "Week 1: Introduction to Machine Learning",
                    tasks: [
                        {
                            description: "Understand machine learning basics",
                            link: "https://www.coursera.org/learn/machine-learning",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Start with linear regression",
                            link: "https://scikit-learn.org/stable/supervised_learning.html",
                            duration: 7, // 7 days
                            details: "Complete 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Classification Techniques",
                    tasks: [
                        {
                            description: "Learn classification algorithms",
                            link: "https://scikit-learn.org/stable/supervised_learning.html#classification",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Apply classification on a dataset",
                            link: "https://www.kaggle.com/learn/classification",
                            duration: 7, // 7 days
                            details: "Complete 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 3: Clustering Techniques",
                    tasks: [
                        {
                            description: "Learn clustering algorithms",
                            link: "https://scikit-learn.org/stable/unsupervised_learning.html#clustering",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Apply clustering on a dataset",
                            link: "https://www.kaggle.com/learn/unsupervised-learning",
                            duration: 7, // 7 days
                            details: "Complete 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Machine Learning Projects",
                    tasks: [
                        {
                            description: "Work on a comprehensive ML project",
                            link: "https://www.kaggle.com/learn/machine-learning",
                            duration: 7, // 7 days
                            details: "Complete project, Spend 1.5 hours per day"
                        },
                        {
                            description: "Enhance project with additional techniques",
                            link: "https://www.datacamp.com/courses/machine-learning-for-everyone",
                            duration: 7, // 7 days
                            details: "Finish enhancements, Spend 1 hour per day"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 5: Deep Learning",
            weeks: [
                {
                    title: "Week 1: Introduction to Neural Networks",
                    tasks: [
                        {
                            description: "Understand the basics of neural networks",
                            link: "https://www.coursera.org/learn/neural-networks-deep-learning",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Build your first neural network",
                            link: "https://www.tensorflow.org/tutorials",
                            duration: 7, // 7 days
                            details: "Complete 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Convolutional Neural Networks",
                    tasks: [
                        {
                            description: "Learn about CNNs",
                            link: "https://www.coursera.org/learn/convolutional-neural-networks",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Apply CNNs to image data",
                            link: "https://www.tensorflow.org/tutorials/images/cnn",
                            duration: 7, // 7 days
                            details: "Complete 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 3: Recurrent Neural Networks",
                    tasks: [
                        {
                            description: "Learn about RNNs",
                            link: "https://www.coursera.org/learn/nlp-sequence-models",
                            duration: 7, // 7 days
                            details: "Complete 2 lessons, Spend 45 minutes per day"
                        },
                        {
                            description: "Apply RNNs to sequential data",
                            link: "https://www.tensorflow.org/tutorials/text/text_generation",
                            duration: 7, // 7 days
                            details: "Complete 1 project, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Deep Learning Projects",
                    tasks: [
                        {
                            description: "Work on a comprehensive DL project",
                            link: "https://www.kaggle.com/learn/deep-learning",
                            duration: 7, // 7 days
                            details: "Complete project, Spend 1.5 hours per day"
                        },
                        {
                            description: "Enhance project with additional techniques",
                            link: "https://www.datacamp.com/courses/deep-learning-in-python",
                            duration: 7, // 7 days
                            details: "Finish enhancements, Spend 1 hour per day"
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 6: Capstone Project",
            weeks: [
                {
                    title: "Week 1: Project Planning",
                    tasks: [
                        {
                            description: "Plan your capstone project",
                            link: "https://www.coursera.org/learn/data-science-project",
                            duration: 7, // 7 days
                            details: "Outline project scope, Spend 1 hour per day"
                        },
                        {
                            description: "Gather data for the project",
                            link: "https://www.kaggle.com/datasets",
                            duration: 7, // 7 days
                            details: "Collect data, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 2: Project Implementation",
                    tasks: [
                        {
                            description: "Start implementing your project",
                            link: "https://www.kaggle.com/learn/python",
                            duration: 7, // 7 days
                            details: "Develop project, Spend 1.5 hours per day"
                        },
                        {
                            description: "Test and validate your project",
                            link: "https://www.datacamp.com/courses/machine-learning-with-scikit-learn",
                            duration: 7, // 7 days
                            details: "Run tests, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 3: Project Finalization",
                    tasks: [
                        {
                            description: "Finalize your project",
                            link: "https://www.coursera.org/learn/data-science-methodology",
                            duration: 7, // 7 days
                            details: "Complete final touches, Spend 1 hour per day"
                        },
                        {
                            description: "Prepare project presentation",
                            link: "https://www.coursera.org/learn/presentation-skills",
                            duration: 7, // 7 days
                            details: "Prepare slides, Spend 1 hour per day"
                        }
                    ]
                },
                {
                    title: "Week 4: Project Presentation",
                    tasks: [
                        {
                            description: "Present your project",
                            link: "https://www.coursera.org/learn/presentation-skills",
                            duration: 7, // 7 days
                            details: "Practice presentation, Spend 1 hour per day"
                        },
                        {
                            description: "Submit your project",
                            link: "https://www.kaggle.com/",
                            duration: 7, // 7 days
                            details: "Submit project, Spend 1 hour per day"
                        }
                    ]
                }
            ]
        }
    ];

    // Points and interactivity features
    let points = 0;
    const container = document.getElementById('learning-plan');
    const pointsDisplay = document.getElementById('points-display');
    let currentTaskLink = "";

    function updatePoints(value) {
        points += value;
        pointsDisplay.textContent = `Points: ${points}`;
    }

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

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskDiv.appendChild(taskLink);

                const shortDayButton = document.createElement('button');
                shortDayButton.textContent = "Short Day";
                shortDayButton.classList.add('short-day-button');
                taskDiv.appendChild(shortDayButton);

                const longDayButton = document.createElement('button');
                longDayButton.textContent = "Long Day";
                longDayButton.classList.add('long-day-button');
                taskDiv.appendChild(longDayButton);

                const calendarDiv = document.createElement('div');
                calendarDiv.classList.add('calendar');

                for (let i = 0; i < task.duration; i++) {
                    const taskDate = new Date();
                    taskDate.setDate(taskDate.getDate() + i);

                    const dayDiv = document.createElement('div');
                    dayDiv.classList.add('day');
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
                            currentTaskLink = this.dataset.link;
                            iframeContainer.innerHTML = `<iframe src="${currentTaskLink}" width="100%" height="600px"></iframe>`;
                            window.scrollTo({
                                top: iframeContainer.offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    });

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.dataset.date = taskDate.toISOString().slice(0, 10);
                    checkbox.disabled = true;

                    checkbox.addEventListener('change', function() {
                        if (this.checked) {
                            updatePoints(10);
                            dayDiv.classList.add('checked');
                        } else {
                            updatePoints(-10);
                            dayDiv.classList.remove('checked');
                        }
                    });

                    const completeButton = document.createElement('button');
                    completeButton.textContent = "Complete Day";
                    completeButton.classList.add('complete-day-button');
                    completeButton.disabled = true;

                    completeButton.addEventListener('click', function() {
                        checkbox.checked = true;
                        checkbox.dispatchEvent(new Event('change'));
                        completeButton.disabled = true;
                    });

                    dayDiv.appendChild(checkbox);
                    dayDiv.appendChild(completeButton);
                    calendarDiv.appendChild(dayDiv);
                }

                shortDayButton.addEventListener('click', function() {
                    shortDayButton.classList.add('active');
                    longDayButton.classList.remove('active');
                    taskDiv.querySelectorAll('.complete-day-button').forEach(button => button.disabled = false);
                    updatePoints(5);
                });

                longDayButton.addEventListener('click', function() {
                    longDayButton.classList.add('active');
                    shortDayButton.classList.remove('active');
                    taskDiv.querySelectorAll('.complete-day-button').forEach(button => button.disabled = false);
                    updatePoints(10);
                });

                taskDiv.appendChild(calendarDiv);
                section.appendChild(taskDiv);
            });
        });

        container.appendChild(section);
    });

    // Add disclaimer regarding ownership of resources
    const disclaimer = document.createElement('p');
    disclaimer.classList.add('disclaimer');
    disclaimer.textContent = "Disclaimer: All external resources are owned by their respective creators. The links provided are for educational purposes, and all content is credited to the original authors or creators.";
    container.appendChild(disclaimer);
});
