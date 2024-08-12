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
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                            shortDayDetails: "Complete 2 exercises, Watch for 30 minutes",
                            longDayDetails: "Complete 4 exercises, Watch for 60 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3schools.com/python/python_exercises.asp",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
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
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://docs.python.org/3/tutorial/datastructures.html",
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            shortDayDetails: "Complete 1 tutorial, Spend 30 minutes",
                            longDayDetails: "Complete 2 tutorials, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Work on small projects",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
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
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://docs.python.org/3/tutorial/modules.html",
                            link: "https://docs.python.org/3/tutorial/modules.html",
                            shortDayDetails: "Complete 1 module, Spend 30 minutes",
                            longDayDetails: "Complete 2 modules, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Practice with advanced Python exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            link: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
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
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.python.org/about/gettingstarted/",
                            link: "https://www.python.org/about/gettingstarted/",
                            shortDayDetails: "Plan project, Spend 30 minutes",
                            longDayDetails: "Plan and start project, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Work on your Python project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.github.com/",
                            link: "https://www.github.com/",
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
                {
                    title: "Week 5: Pandas Introduction",
                    tasks: [
                        {
                            description: "Learn the basics of Pandas",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete Pandas exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3resource.com/python-exercises/pandas/index.php",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 6: Data Cleaning with Pandas",
                    tasks: [
                        {
                            description: "Practice data cleaning techniques",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/learn/pandas",
                            link: "https://www.kaggle.com/learn/pandas",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Work on a data cleaning project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            shortDayDetails: "Start project, Spend 45 minutes",
                            longDayDetails: "Start and continue project, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        }
                    ]
                },
                {
                    title: "Week 7: Exploratory Data Analysis with Pandas",
                    tasks: [
                        {
                            description: "Learn exploratory data analysis techniques",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.analyticsvidhya.com/blog/2021/06/understanding-exploratory-data-analysis/",
                            link: "https://www.analyticsvidhya.com/blog/2021/06/understanding-exploratory-data-analysis/",
                            shortDayDetails: "Read tutorial, Spend 45 minutes",
                            longDayDetails: "Read tutorial and start analysis, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Apply EDA to a dataset",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/datasets",
                            link: "https://www.kaggle.com/datasets",
                            shortDayDetails: "Perform EDA on dataset, Spend 45 minutes",
                            longDayDetails: "Perform detailed EDA on dataset, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 8: Data Analysis Project",
                    tasks: [
                        {
                            description: "Plan your data analysis project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/datasets",
                            link: "https://www.kaggle.com/datasets",
                            shortDayDetails: "Plan project, Spend 45 minutes",
                            longDayDetails: "Plan project thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Start working on your data analysis project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/learn/data-visualization",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Start project, Spend 45 minutes",
                            longDayDetails: "Work on project, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 3: Data Visualization",
            weeks: [
                {
                    title: "Week 9: Introduction to Matplotlib",
                    tasks: [
                        {
                            description: "Learn Matplotlib basics",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://matplotlib.org/stable/users/getting_started/",
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 10: Data Visualization with Seaborn",
                    tasks: [
                        {
                            description: "Learn Seaborn basics",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://seaborn.pydata.org/",
                            link: "https://seaborn.pydata.org/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete Seaborn exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/learn/data-visualization",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 11: Advanced Visualization Techniques",
                    tasks: [
                        {
                            description: "Learn advanced data visualization techniques",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/learn/data-visualization",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Apply advanced visualization techniques",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/datasets",
                            link: "https://www.kaggle.com/datasets",
                            shortDayDetails: "Apply techniques, Spend 45 minutes",
                            longDayDetails: "Apply techniques thoroughly, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 12: Data Visualization Project",
                    tasks: [
                        {
                            description: "Plan your data visualization project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/datasets",
                            link: "https://www.kaggle.com/datasets",
                            shortDayDetails: "Plan project, Spend 45 minutes",
                            longDayDetails: "Plan project thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Work on your data visualization project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/learn/data-visualization",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Start project, Spend 45 minutes",
                            longDayDetails: "Work on project, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 4: Advanced SQL",
            weeks: [
                {
                    title: "Week 13: SQL Basics",
                    tasks: [
                        {
                            description: "Learn SQL basics",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3schools.com/sql/",
                            link: "https://www.w3schools.com/sql/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Complete SQL exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3schools.com/sql/sql_exercises.asp",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 14: Intermediate SQL",
                    tasks: [
                        {
                            description: "Learn intermediate SQL",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.mode.com/sql-tutorial/",
                            link: "https://www.mode.com/sql-tutorial/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.mode.com/sql-tutorial/",
                            link: "https://www.mode.com/sql-tutorial/",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 15: Advanced SQL",
                    tasks: [
                        {
                            description: "Learn advanced SQL",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.mode.com/sql-tutorial/",
                            link: "https://www.mode.com/sql-tutorial/",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Complete advanced SQL exercises",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.mode.com/sql-tutorial/",
                            link: "https://www.mode.com/sql-tutorial/",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 16: SQL Joins and Subqueries",
                    tasks: [
                        {
                            description: "Learn SQL joins and subqueries",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3schools.com/sql/sql_join.asp",
                            link: "https://www.w3schools.com/sql/sql_join.asp",
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Practice SQL joins and subqueries",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.w3schools.com/sql/sql_join.asp",
                            link: "https://www.w3schools.com/sql/sql_join.asp",
                            shortDayDetails: "Finish 4 exercises, Spend 45 minutes",
                            longDayDetails: "Finish 8 exercises, Spend 90 minutes",
                            shortDayDuration: 3,
                            longDayDuration: 6,
                            embeddable: true
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 5: Machine Learning Introduction",
            weeks: [
                {
                    title: "Week 17: Introduction to Machine Learning",
                    tasks: [
                        {
                            description: "Watch Andrew Ng's Machine Learning course",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.coursera.org/learn/machine-learning",
                            link: "https://www.coursera.org/learn/machine-learning",
                            shortDayDetails: "Complete 1 lesson, Spend 45 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Continue the Machine Learning course",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.coursera.org/learn/machine-learning",
                            link: "https://www.coursera.org/learn/machine-learning",
                            shortDayDetails: "Complete 1 lesson, Spend 45 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 18: Python for Machine Learning",
                    tasks: [
                        {
                            description: "Read Scikit-learn documentation",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://scikit-learn.org/stable/",
                            link: "https://scikit-learn.org/stable/",
                            shortDayDetails: "Complete 2 sections, Spend 45 minutes",
                            longDayDetails: "Complete 4 sections, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete small projects using Scikit-learn",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://scikit-learn.org/stable/auto_examples/index.html",
                            link: "https://scikit-learn.org/stable/auto_examples/index.html",
                            shortDayDetails: "Finish 1 project, Spend 45 minutes",
                            longDayDetails: "Finish 2 projects, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        }
                    ]
                },
                {
                    title: "Week 19: Introduction to Deep Learning",
                    tasks: [
                        {
                            description: "Watch the Deep Learning Specialization",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.coursera.org/specializations/deep-learning",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            shortDayDetails: "Complete 1 lesson, Spend 45 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Continue the Deep Learning Specialization",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.coursera.org/specializations/deep-learning",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            shortDayDetails: "Complete 1 lesson, Spend 45 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 20: Deep Learning Projects",
                    tasks: [
                        {
                            description: "Start working on deep learning projects",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/",
                            link: "https://www.kaggle.com/",
                            shortDayDetails: "Start 1 project, Spend 45 minutes",
                            longDayDetails: "Start 2 projects, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Continue working on deep learning projects",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/",
                            link: "https://www.kaggle.com/",
                            shortDayDetails: "Work on project, Spend 45 minutes",
                            longDayDetails: "Work on projects thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        }
                    ]
                }
            ]
        },
        {
            month: "Month 6: Capstone Project",
            weeks: [
                {
                    title: "Week 21: Project Planning",
                    tasks: [
                        {
                            description: "Choose a project topic and plan the steps",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/datasets",
                            link: "https://www.kaggle.com/datasets",
                            shortDayDetails: "Plan steps, Spend 45 minutes",
                            longDayDetails: "Plan steps thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Gather and prepare the dataset",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            shortDayDetails: "Gather data, Spend 45 minutes",
                            longDayDetails: "Clean and prepare data, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        }
                    ]
                },
                {
                    title: "Week 22: Project Implementation",
                    tasks: [
                        {
                            description: "Implement the analysis or model",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.kaggle.com/learn/data-visualization",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            shortDayDetails: "Complete 1 phase, Spend 45 minutes",
                            longDayDetails: "Complete 2 phases, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Continue the analysis or model building",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://machinelearningmastery.com/how-to-evaluate-machine-learning-models/",
                            link: "https://machinelearningmastery.com/how-to-evaluate-machine-learning-models/",
                            shortDayDetails: "Complete 1 phase, Spend 45 minutes",
                            longDayDetails: "Complete 2 phases, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        }
                    ]
                },
                {
                    title: "Week 23: Project Finalization",
                    tasks: [
                        {
                            description: "Finalize the project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.dataquest.io/blog/data-science-portfolio/",
                            link: "https://www.dataquest.io/blog/data-science-portfolio/",
                            shortDayDetails: "Finalize 1 part, Spend 45 minutes",
                            longDayDetails: "Finalize 2 parts, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Present the project",
                            qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.dataquest.io/blog/data-science-portfolio/",
                            link: "https://www.dataquest.io/blog/data-science-portfolio/",
                            shortDayDetails: "Prepare presentation, Spend 45 minutes",
                            longDayDetails: "Prepare presentation in detail, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                }
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

                taskDiv.appendChild(shortDayButton);
                taskDiv.appendChild(longDayButton);

                const qrCodeImg = document.createElement('img');
                qrCodeImg.src = task.qrCode;
                qrCodeImg.alt = "QR Code";
                qrCodeImg.onerror = function() {
                    this.style.display = 'none';
                    taskLink.textContent = "Go to Resource (QR Code Unavailable)";
                };
                taskDiv.appendChild(qrCodeImg);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskLink.addEventListener('click', () => {
                    updatePoints(10);
                });
                taskDiv.appendChild(taskLink);

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
                            } else {
                                alert('This resource cannot be embedded. Please use the QR code or link to access it directly.');
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
        const taskDetails = taskDiv.querySelector('.task-details');
        taskDetails.textContent = `Details: ${details}`;
        taskDetails.classList.add('selected');
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

    // Points for using external links
    document.querySelectorAll('.external-link').forEach(link => {
        link.addEventListener('click', () => {
            updatePoints(50);
        });
    });
});
