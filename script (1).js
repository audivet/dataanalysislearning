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
                            dates: ["2024-08-05", "2024-08-06", "2024-08-07"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkqtD5dpn9C8&chs=180x180"
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            dates: ["2024-08-08", "2024-08-09", "2024-08-10", "2024-08-11"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fpython%2Fpython_exercises.asp&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 2: Python Intermediate",
                    tasks: [
                        {
                            description: "Learn about data structures",
                            dates: ["2024-08-12", "2024-08-13", "2024-08-14"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fdocs.python.org%2F3%2Ftutorial%2Fdatastructures.html&chs=180x180"
                        },
                        {
                            description: "Work on small projects",
                            dates: ["2024-08-15", "2024-08-16", "2024-08-17", "2024-08-18"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.pythonforbeginners.com%2Fprojects%2F15-python-projects-beginners%2F&chs=180x180"
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
                            dates: ["2024-08-19", "2024-08-20", "2024-08-21"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fpandas.pydata.org%2Fpandas-docs%2Fstable%2Fgetting_started%2Findex.html&chs=180x180"
                        },
                        {
                            description: "Complete Pandas exercises",
                            dates: ["2024-08-22", "2024-08-23", "2024-08-24", "2024-08-25"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3resource.com%2Fpython-exercises%2Fpandas%2Findex.php&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 4: Data Cleaning with Pandas",
                    tasks: [
                        {
                            description: "Practice data cleaning techniques",
                            dates: ["2024-08-26", "2024-08-27", "2024-08-28"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fpandas&chs=180x180"
                        },
                        {
                            description: "Work on a data cleaning project",
                            dates: ["2024-08-29", "2024-08-30", "2024-08-31", "2024-09-01"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kdnuggets.com%2F2019%2F06%2Fdata-cleaning-tutorial-python.html&chs=180x180"
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
                            dates: ["2024-09-02", "2024-09-03", "2024-09-04"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmatplotlib.org%2Fstable%2Fusers%2Fgetting_started%2F&chs=180x180"
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            dates: ["2024-09-05", "2024-09-06", "2024-09-07", "2024-09-08"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3resource.com%2Fpython-exercises%2Fmatplotlib%2Findex.php&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 6: Data Visualization with Seaborn",
                    tasks: [
                        {
                            description: "Learn Seaborn basics",
                            dates: ["2024-09-09", "2024-09-10", "2024-09-11"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fseaborn.pydata.org%2F&chs=180x180"
                        },
                        {
                            description: "Complete Seaborn exercises",
                            dates: ["2024-09-12", "2024-09-13", "2024-09-14", "2024-09-15"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 7: Advanced Visualization Techniques",
                    tasks: [
                        {
                            description: "Learn advanced visualization techniques",
                            dates: ["2024-09-16", "2024-09-17", "2024-09-18"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180"
                        },
                        {
                            description: "Practice advanced visualization techniques",
                            dates: ["2024-09-19", "2024-09-20", "2024-09-21", "2024-09-22"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180"
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
                            dates: ["2024-09-23", "2024-09-24", "2024-09-25"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2F&chs=180x180"
                        },
                        {
                            description: "Complete SQL exercises",
                            dates: ["2024-09-26", "2024-09-27", "2024-09-28", "2024-09-29"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_exercises.asp&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 9: Intermediate SQL",
                    tasks: [
                        {
                            description: "Learn intermediate SQL",
                            dates: ["2024-09-30", "2024-10-01", "2024-10-02"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180"
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            dates: ["2024-10-03", "2024-10-04", "2024-10-05", "2024-10-06"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 10: Advanced SQL",
                    tasks: [
                        {
                            description: "Learn advanced SQL",
                            dates: ["2024-10-07", "2024-10-08", "2024-10-09"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180"
                        },
                        {
                            description: "Complete advanced SQL exercises",
                            dates: ["2024-10-10", "2024-10-11", "2024-10-12", "2024-10-13"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.mode.com%2Fsql-tutorial%2F&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 11: SQL Joins and Subqueries",
                    tasks: [
                        {
                            description: "Learn SQL joins and subqueries",
                            dates: ["2024-10-14", "2024-10-15", "2024-10-16"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_join.asp&chs=180x180"
                        },
                        {
                            description: "Practice SQL joins and subqueries",
                            dates: ["2024-10-17", "2024-10-18", "2024-10-19", "2024-10-20"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_join.asp&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 12: SQL with Real Data",
                    tasks: [
                        {
                            description: "Practice SQL with real data",
                            dates: ["2024-10-21", "2024-10-22", "2024-10-23"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Fdatasets&chs=180x180"
                        },
                        {
                            description: "Complete a SQL project",
                            dates: ["2024-10-24", "2024-10-25", "2024-10-26", "2024-10-27"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Fdatasets&chs=180x180"
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
                            dates: ["2024-10-28", "2024-10-29", "2024-10-30"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Flearn%2Fmachine-learning&chs=180x180"
                        },
                        {
                            description: "Continue the Machine Learning course",
                            dates: ["2024-10-31", "2024-11-01", "2024-11-02", "2024-11-03"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Flearn%2Fmachine-learning&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 14: Python for Machine Learning",
                    tasks: [
                        {
                            description: "Read Scikit-learn documentation",
                            dates: ["2024-11-04", "2024-11-05", "2024-11-06"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fscikit-learn.org%2Fstable%2F&chs=180x180"
                        },
                        {
                            description: "Complete small projects using Scikit-learn",
                            dates: ["2024-11-07", "2024-11-08", "2024-11-09", "2024-11-10"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fscikit-learn.org%2Fstable%2Fauto_examples%2Findex.html&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 15: Deep Learning Basics",
                    tasks: [
                        {
                            description: "Watch the Deep Learning Specialization",
                            dates: ["2024-11-11", "2024-11-12", "2024-11-13"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fdeep-learning&chs=180x180"
                        },
                        {
                            description: "Continue the Deep Learning Specialization",
                            dates: ["2024-11-14", "2024-11-15", "2024-11-16", "2024-11-17"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fdeep-learning&chs=180x180"
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
                            dates: ["2024-11-18", "2024-11-19", "2024-11-20"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Fdatasets&chs=180x180"
                        },
                        {
                            description: "Gather and prepare the dataset",
                            dates: ["2024-11-21", "2024-11-22", "2024-11-23", "2024-11-24"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kdnuggets.com%2F2019%2F06%2Fdata-cleaning-tutorial-python.html&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 17: Project Implementation",
                    tasks: [
                        {
                            description: "Implement the analysis or model",
                            dates: ["2024-11-25", "2024-11-26", "2024-11-27"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.kaggle.com%2Flearn%2Fdata-visualization&chs=180x180"
                        },
                        {
                            description: "Continue the analysis or model building",
                            dates: ["2024-11-28", "2024-11-29", "2024-11-30", "2024-12-01"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmachinelearningmastery.com%2Fhow-to-evaluate-machine-learning-models%2F&chs=180x180"
                        }
                    ]
                },
                {
                    title: "Week 18: Project Finalization",
                    tasks: [
                        {
                            description: "Finalize the project",
                            dates: ["2024-12-02", "2024-12-03", "2024-12-04"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.dataquest.io%2Fblog%2Fdata-science-portfolio%2F&chs=180x180"
                        },
                        {
                            description: "Present the project",
                            dates: ["2024-12-05", "2024-12-06", "2024-12-07", "2024-12-08"],
                            qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.dataquest.io%2Fblog%2Fdata-science-portfolio%2F&chs=180x180"
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

                const qrCodeImg = document.createElement('img');
                qrCodeImg.src = task.qrCode;
                qrCodeImg.alt = "QR Code";
                taskDiv.appendChild(qrCodeImg);

                const calendarDiv = document.createElement('div');
                calendarDiv.classList.add('calendar');

                task.dates.forEach(date => {
                    const dayDiv = document.createElement('div');
                    const isWeekend = new Date(date).getDay() % 6 === 0;
                    dayDiv.classList.add('day', isWeekend ? 'weekend' : 'weekday');

                    const dayLabel = document.createElement('div');
                    dayLabel.textContent = new Date(date).toDateString();
                    dayDiv.appendChild(dayLabel);

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.dataset.date = date;
                    checkbox.checked = localStorage.getItem(date) === 'done';
                    checkbox.addEventListener('change', function() {
                        if (this.checked) {
                            localStorage.setItem(date, 'done');
                        } else {
                            localStorage.removeItem(date);
                        }
                    });
                    dayDiv.appendChild(checkbox);

                    calendarDiv.appendChild(dayDiv);
                });

                taskDiv.appendChild(calendarDiv);
                section.appendChild(taskDiv);
            });
        });

        container.appendChild(section);
    });
});
