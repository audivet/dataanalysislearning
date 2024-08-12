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
                            duration: 3
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fpython%2Fpython_exercises.asp&chs=180x180",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            duration: 4
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
                            duration: 3
                        },
                        {
                            description: "Work on small projects",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.pythonforbeginners.com%2Fprojects%2F15-python-projects-beginners%2F&chs=180x180",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners",
                            duration: 4
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
                            duration: 3
                        },
                        {
                            description: "Complete Pandas exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3resource.com%2Fpython-exercises%2Fpandas%2Findex.php&chs=180x180",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            duration: 4
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
                            duration: 3
                        },
                        {
                            description: "Work on a data cleaning project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kdnuggets.com%2F2019%2F06%2Fdata-cleaning-tutorial-python.html&chs=180x180",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            duration: 4
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
                            duration: 3
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3resource.com%2Fpython-exercises%2Fmatplotlib%2Findex.php&chs=180x180",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            duration: 4
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
                            duration: 3
                        },
                        {
                            description: "Complete Seaborn exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 7: Advanced Visualization Techniques",
                    tasks: [
                        {
                            description: "Learn advanced visualization techniques",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 3
                        },
                        {
                            description: "Practice advanced visualization techniques",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 4
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 4: Advanced SQL",
            weeks: [
                {
                    title: "Week 8: SQL Basics",
                    tasks: [
                        {
                            description: "Learn SQL basics",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2F&chs=180x180",
                            link: "https://www.w3schools.com/sql/",
                            duration: 3
                        },
                        {
                            description: "Complete SQL exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_exercises.asp&chs=180x180",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 9: Intermediate SQL",
                    tasks: [
                        {
                            description: "Learn intermediate SQL",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180",
                            link: "https://www.mode.com/sql-tutorial/",
                            duration: 3
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180",
                            link: "https://www.mode.com/sql-tutorial/",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 10: Advanced SQL",
                    tasks: [
                        {
                            description: "Learn advanced SQL",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180",
                            link: "https://www.mode.com/sql-tutorial/",
                            duration: 3
                        },
                        {
                            description: "Complete advanced SQL exercises",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180",
                            link: "https://www.mode.com/sql-tutorial/",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 11: SQL Joins and Subqueries",
                    tasks: [
                        {
                            description: "Learn SQL joins and subqueries",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_join.asp&chs=180x180",
                            link: "https://www.w3schools.com/sql/sql_join.asp",
                            duration: 3
                        },
                        {
                            description: "Practice SQL joins and subqueries",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_join.asp&chs=180x180",
                            link: "https://www.w3schools.com/sql/sql_join.asp",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 12: SQL with Real Data",
                    tasks: [
                        {
                            description: "Practice SQL with real data",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Fdatasets&chs=180x180",
                            link: "https://www.kaggle.com/datasets",
                            duration: 3
                        },
                        {
                            description: "Complete a SQL project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Fdatasets&chs=180x180",
                            link: "https://www.kaggle.com/datasets",
                            duration: 4
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 5: Machine Learning Introduction",
            weeks: [
                {
                    title: "Week 13: Introduction to Machine Learning",
                    tasks: [
                        {
                            description: "Watch Andrew Ng's Machine Learning course",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Flearn%2Fmachine-learning&chs=180x180",
                            link: "https://www.coursera.org/learn/machine-learning",
                            duration: 3
                        },
                        {
                            description: "Continue the Machine Learning course",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Flearn%2Fmachine-learning&chs=180x180",
                            link: "https://www.coursera.org/learn/machine-learning",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 14: Python for Machine Learning",
                    tasks: [
                        {
                            description: "Read Scikit-learn documentation",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fscikit-learn.org%2Fstable%2F&chs=180x180",
                            link: "https://scikit-learn.org/stable/",
                            duration: 3
                        },
                        {
                            description: "Complete small projects using Scikit-learn",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fscikit-learn.org%2Fstable%2Fauto_examples%2Findex.html&chs=180x180",
                            link: "https://scikit-learn.org/stable/auto_examples/index.html",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 15: Deep Learning Basics",
                    tasks: [
                        {
                            description: "Watch the Deep Learning Specialization",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fdeep-learning&chs=180x180",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            duration: 3
                        },
                        {
                            description: "Continue the Deep Learning Specialization",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fdeep-learning&chs=180x180",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            duration: 4
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 6: Capstone Project",
            weeks: [
                {
                    title: "Week 16: Project Planning",
                    tasks: [
                        {
                            description: "Choose a project topic and plan the steps",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Fdatasets&chs=180x180",
                            link: "https://www.kaggle.com/datasets",
                            duration: 3
                        },
                        {
                            description: "Gather and prepare the dataset",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kdnuggets.com%2F2019%2F06%2Fdata-cleaning-tutorial-python.html&chs=180x180",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 17: Project Implementation",
                    tasks: [
                        {
                            description: "Implement the analysis or model",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            duration: 3
                        },
                        {
                            description: "Continue the analysis or model building",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmachinelearningmastery.com%2Fhow-to-evaluate-machine-learning-models%2F&chs=180x180",
                            link: "https://machinelearningmastery.com/how-to-evaluate-machine-learning-models/",
                            duration: 4
                        }
                    ]
                },
                {
                    title: "Week 18: Project Finalization",
                    tasks: [
                        {
                            description: "Finalize the project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.dataquest.io%2Fblog%2Fdata-science-portfolio%2F&chs=180x180",
                            link: "https://www.dataquest.io/blog/data-science-portfolio/",
                            duration: 3
                        },
                        {
                            description: "Present the project",
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.dataquest.io%2Fblog%2Fdata-science-portfolio%2F&chs=180x180",
                            link: "https://www.dataquest.io/blog/data-science-portfolio/",
                            duration: 4
                        }
                    ]
                }
            ]
        }
    ];

    const container = document.getElementById('learning-plan');
    const today = new Date();

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

                    const dayLabel = document.createElement('div');
                    dayLabel.textContent = taskDate.toDateString();
                    dayDiv.appendChild(dayLabel);

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

                    dayDiv.appendChild(checkbox);
                    calendarDiv.appendChild(dayDiv);
                }

                taskDiv.appendChild(calendarDiv);
                section.appendChild(taskDiv);
            });
        });

        container.appendChild(section);
    });
});
