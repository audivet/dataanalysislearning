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
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 exercises, Watch for 30 minutes",
                            longDayDetails: "Complete 4 exercises, Watch for 60 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete exercises on W3Schools",
                            link: "https://www.w3schools.com/python/python_exercises.asp",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
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
                            link: "https://docs.python.org/3/tutorial/datastructures.html",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 tutorial, Spend 30 minutes",
                            longDayDetails: "Complete 2 tutorials, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Work on small projects",
                            link: "https://www.pythonforbeginners.com/projects/15-python-projects-beginners/",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://docs.python.org/3/tutorial/modules.html",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 module, Spend 30 minutes",
                            longDayDetails: "Complete 2 modules, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Practice with advanced Python exercises",
                            link: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://www.python.org/about/gettingstarted/",
                            extraLink: "https://www.github.com/",
                            extraPoints: 20,
                            shortDayDetails: "Plan project, Spend 30 minutes",
                            longDayDetails: "Plan and start project, Spend 60 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Work on your Python project",
                            link: "https://www.github.com/",
                            extraLink: "https://www.github.com/",
                            extraPoints: 20,
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
                            link: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete Pandas exercises",
                            link: "https://www.w3resource.com/python-exercises/pandas/index.php",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/learn/pandas",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Work on a data cleaning project",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://www.analyticsvidhya.com/blog/2021/06/understanding-exploratory-data-analysis/",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Read tutorial, Spend 45 minutes",
                            longDayDetails: "Read tutorial and start analysis, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Apply EDA to a dataset",
                            link: "https://www.kaggle.com/datasets",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/datasets",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Plan project, Spend 45 minutes",
                            longDayDetails: "Plan project thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Start working on your data analysis project",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://matplotlib.org/stable/users/getting_started/",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete Matplotlib exercises",
                            link: "https://www.w3resource.com/python-exercises/matplotlib/index.php",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
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
                            link: "https://seaborn.pydata.org/",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete Seaborn exercises",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/learn/data-visualization",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Apply advanced visualization techniques",
                            link: "https://www.kaggle.com/datasets",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/datasets",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
                            shortDayDetails: "Plan project, Spend 45 minutes",
                            longDayDetails: "Plan project thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Work on your data visualization project",
                            link: "https://www.kaggle.com/learn/data-visualization",
                            extraLink: "https://www.codecademy.com/learn/learn-python-3",
                            extraPoints: 20,
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
                            link: "https://www.w3schools.com/sql/",
                            extraLink: "https://www.codecademy.com/learn/learn-sql",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Complete SQL exercises",
                            link: "https://www.w3schools.com/sql/sql_exercises.asp",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-sql",
                            extraPoints: 20,
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
                            link: "https://www.mode.com/sql-tutorial/",
                            extraLink: "https://www.codecademy.com/learn/learn-sql",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Complete intermediate SQL exercises",
                            link: "https://www.mode.com/sql-tutorial/",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-sql",
                            extraPoints: 20,
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
                            link: "https://www.mode.com/sql-tutorial/",
                            extraLink: "https://www.codecademy.com/learn/learn-sql",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: false
                        },
                        {
                            description: "Complete advanced SQL exercises",
                            link: "https://www.mode.com/sql-tutorial/",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-sql",
                            extraPoints: 20,
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
                            link: "https://www.w3schools.com/sql/sql_join.asp",
                            extraLink: "https://www.codecademy.com/learn/learn-sql",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 lessons, Spend 45 minutes",
                            longDayDetails: "Complete 4 lessons, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Practice SQL joins and subqueries",
                            link: "https://www.w3schools.com/sql/sql_join.asp",
                            extraLink: "https://www.hackerrank.com/domains/tutorials/10-days-of-sql",
                            extraPoints: 20,
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
                            link: "https://www.coursera.org/learn/machine-learning",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 lesson, Spend 45 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Continue the Machine Learning course",
                            link: "https://www.coursera.org/learn/machine-learning",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
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
                            link: "https://scikit-learn.org/stable/",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Complete 2 sections, Spend 45 minutes",
                            longDayDetails: "Complete 4 sections, Spend 90 minutes",
                            shortDayDuration: 2,
                            longDayDuration: 4,
                            embeddable: true
                        },
                        {
                            description: "Complete small projects using Scikit-learn",
                            link: "https://scikit-learn.org/stable/auto_examples/index.html",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
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
                            link: "https://www.coursera.org/specializations/deep-learning",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 lesson, Spend 45 minutes",
                            longDayDetails: "Complete 2 lessons, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Continue the Deep Learning Specialization",
                            link: "https://www.coursera.org/specializations/deep-learning",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Start 1 project, Spend 45 minutes",
                            longDayDetails: "Start 2 projects, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Continue working on deep learning projects",
                            link: "https://www.kaggle.com/",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/datasets",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Plan steps, Spend 45 minutes",
                            longDayDetails: "Plan steps thoroughly, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Gather and prepare the dataset",
                            link: "https://www.kdnuggets.com/2019/06/data-cleaning-tutorial-python.html",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
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
                            link: "https://www.kaggle.com/learn/data-visualization",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Complete 1 phase, Spend 45 minutes",
                            longDayDetails: "Complete 2 phases, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Continue the analysis or model building",
                            link: "https://machinelearningmastery.com/how-to-evaluate-machine-learning-models/",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
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
                            link: "https://www.dataquest.io/blog/data-science-portfolio/",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Finalize 1 part, Spend 45 minutes",
                            longDayDetails: "Finalize 2 parts, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        },
                        {
                            description: "Present the project",
                            link: "https://www.dataquest.io/blog/data-science-portfolio/",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Prepare presentation, Spend 45 minutes",
                            longDayDetails: "Prepare presentation in detail, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: false
                        }
                    ]
                },
                {
                    title: "Week 24: Project Presentation",
                    tasks: [
                        {
                            description: "Create the presentation materials",
                            link: "https://www.canva.com/",
                            extraLink: "https://www.kaggle.com/",
                            extraPoints: 20,
                            shortDayDetails: "Create materials, Spend 45 minutes",
                            longDayDetails: "Create and refine materials, Spend 90 minutes",
                            shortDayDuration: 1,
                            longDayDuration: 2,
                            embeddable: true
                        },
                        {
                            description: "Rehearse and present your project",
                            link: "https://www.kaggle.com/learn/presentations",
                            extraLink: "https://www.codecademy.com/learn/machine-learning",
                            extraPoints: 20,
                            shortDayDetails: "Rehearse presentation, Spend 45 minutes",
                            longDayDetails: "Rehearse and present, Spend 90 minutes",
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

                const buttonGroup = document.createElement('div');
                buttonGroup.classList.add('button-group');

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

                buttonGroup.appendChild(shortDayButton);
                buttonGroup.appendChild(longDayButton);
                taskDiv.appendChild(buttonGroup);

                const taskLink = document.createElement('a');
                taskLink.href = task.link;
                taskLink.target = "_blank";
                taskLink.textContent = "Go to Resource";
                taskLink.classList.add('resource-link');
                taskLink.addEventListener('click', () => {
                    updatePoints(10);
                });

                const extraLink = document.createElement('a');
                extraLink.href = task.extraLink;
                extraLink.target = "_blank";
                extraLink.textContent = "Try this for extra points!";
                extraLink.classList.add('extra-link');
                extraLink.addEventListener('click', () => {
                    updatePoints(task.extraPoints);
                });

                taskDiv.appendChild(taskLink);
                taskDiv.appendChild(extraLink);

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
                                iframeContainer.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                alert('This resource cannot be embedded. Please use the link to access it directly.');
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
        const taskDetails = document.querySelector('.task-details.selected');
        if (taskDetails) {
            taskDetails.classList.remove('selected');
        }
        const taskDiv = document.querySelector(`.task:contains(${task.description}) .task-details`);
        taskDiv.textContent = `Details: ${details}`;
        taskDiv.classList.add('selected');
        taskDiv.scrollIntoView({ behavior: 'smooth' });
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
});
