// Graphique pour les revenus des jeux vidéo par catégorie
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['1970', '1980', '1990', '2000', '2010', '2020'],
        datasets: [
            {
                label: 'Arcade   ',
                data: [20, 39, 10, 0, 0, 0],
                backgroundColor: 'rgba(102, 51, 153, 0.6)',
                borderColor: 'rgba(102, 51, 153, 1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Console  ',
                data: [0, 10, 20, 33, 40, 33],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'PC   ',
                data: [0, 0, 0, 20, 30, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Mobile   ',
                data: [0, 0, 0, 0, 60, 85],
                backgroundColor: 'rgba(255, 205, 86, 0.6)',
                borderColor: 'rgba(255, 205, 86, 1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Console Portable   ',
                data: [0, 0, 10, 25, 20, 0],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Cloud    ',
                data: [0, 0, 0, 0, 10, 20],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Revenus (en milliards de dollars)',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Années',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 50, 
                    font: {
                        size: 16
                    },
                    color: 'white'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y} Md de dollars`;
                    }
                }
            }
        }
    }
});

//Top 10 des licences de Jeu Vidéo les plus lucratives
const topLicensesData = {
    labels: [
        'Pokémon (1996)', 
        'Mario (1983)', 
        'Call of Duty (2003)', 
        'Wii (2006)', 
        'Pac-Man (1980)', 
        'Space Invaders (1978)', 
        'Dungeon Fighter Online (2005)', 
        'Street Fighter (1987)', 
        'Final Fantasy (1987)', 
        'Warcraft (1994)'
    ],
    datasets: [{
        data: [90, 30.2, 17, 14.8, 14.1, 13.9, 11.8, 11.3, 10.6, 10.6],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const topLicensesChart = new Chart(document.getElementById('topLicensesChart').getContext('2d'), {
    type: 'bar',
    data: topLicensesData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Revenus (en milliards de dollars)',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Licences',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0,
                    color: 'white',
                    font: {
                        size: 0
                    }
                }
                
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label;
                        const value = tooltipItem.raw;
                        return `: ${value} Md de dollars`;
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1
            }
        }
        
    }
});

// Graphique pour l'évolution du nombre de joueurs
const ctx = document.getElementById('playerChart').getContext('2d');
const playerChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1978', '1985', '1995', '2005', '2015', '2023'],
        datasets: [{
            label: 'Nombre de joueurs',
            data: [0.0002, 0.02, 0.05, 0.1, 2.1, 3.26],
            borderColor: 'rgba(76, 76, 255, 1)', 
            backgroundColor: 'rgba(76, 76, 255, 0.2)', 
            borderWidth: 2,
            fill: false, 
            tension: 0.3, 
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nombre de joueurs (en milliards)',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Années',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0, 
                    font: {
                        size: 0
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label} : ${tooltipItem.parsed.y} Md`;
                    }
                }
            }
        }
    }
});

//Age moyen des joueurs (tracé)
const averageAgeCtx = document.getElementById('averageAgeChart').getContext('2d');

const averageAgeData = {
    labels: ['1999', '2004', '2010', '2014', '2018', '2023'],
    datasets: [{
        label: 'Âge moyen des joueurs',
        data: [30, 33, 34, 35, 34, 35],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        fill: false,
        tension: 0.1
    }]
};

const averageAgeChart = new Chart(averageAgeCtx, {
    type: 'line',
    data: averageAgeData,
    options: {
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Âge moyen',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Années',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y} ans`;
                    }
                }
            }
        }
    }
});


//Age moyen des joueurs (camembert)
const ageCtx = document.getElementById('ageDistributionChart').getContext('2d');
const ageDistributionChart = new Chart(ageCtx, {
    type: 'pie',
    data: {
        labels: [
            'Moins de 18 ans ', 
            '18 à 34 ans ', 
            '35 à 44 ans ', 
            '45 à 54 ans ', 
            '55 à 64 ans ', 
            '65 ans et plus '
        ],
        datasets: [{
            data: [20, 38, 14, 12, 9, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label;
                        const value = tooltipItem.raw;
                        return `: ${value}%`;
                    }
                }
            }
        }
    }
});

//Répartition des joueurs par tranche d'âge et sexe
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('ageGenderChart').getContext('2d');
    const ageGenderChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Moins de 18 ans', '18-24 ans', '25-34 ans', '35-44 ans', '45-54 ans', '55-64 ans', '65 ans et plus'],
            datasets: [
                {
                    label: 'Hommes ',
                    data: [56, 52, 58, 54, 58, 61, 64],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                },
                {
                    label: 'Femmes',
                    data: [44, 48, 42, 46, 42, 39, 36],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Pourcentage (%)',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    },
                    ticks: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Tranche d\'Âge',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    },
                    ticks: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y}%`;
                        }
                    }
                }
            }
        }
    });
});

//Les jeux vidéos isolent socialement
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('communitiesChart');
    const ctx = canvas.getContext('2d');

    const communitiesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2007', '2015', '2020', '2023'],
            datasets: [
                {
                    label: 'Taux de joueurs se faisant des amis ',
                    data: [50, 55, 60, 70, 74],
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    fill: true,
                    tension: 0.1,
                    yAxisID: 'y'
                },
                {
                    label: 'Nombre de joueurs en ligne ',
                    data: [10, 30, 150, 300, 1500],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Taux de joueurs se faisant des amis',
                        color: 'rgba(153, 102, 255, 1)',
                        font: {
                            size: 16
                        }
                    },
                    grid: {
                        drawOnChartArea: true,
                        color: 'rgba(200, 200, 200, 0.5)',
                        lineWidth: 1
                    },
                    ticks: {
                        color: 'rgba(153, 102, 255, 1)',
                        font: {
                            size: 16
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Nombre de joueurs en ligne (en millions)',
                        color: 'rgba(75, 192, 192, 1)',
                        font: {
                            size: 16
                        }
                    },
                    grid: {
                        drawOnChartArea: true,
                        color: 'rgba(200, 200, 200, 0.5)',
                        lineWidth: 1
                    },
                    ticks: {
                        color: 'rgba(75, 192, 192, 1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Années',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    },
                    grid: {
                        drawOnChartArea: true,
                        color: 'rgba(200, 200, 200, 0.5)',
                        lineWidth: 1
                    },
                    ticks: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            const datasetLabel = tooltipItem.dataset.label;
                            const value = tooltipItem.parsed.y;

                            // Affiche le label avec le format approprié
                            return `${datasetLabel}: ${value}${tooltipItem.dataset.yAxisID === 'y' ? '%' : ' millions'}`;
                        }
                    }
                }
            }
        }
    });
});


// Évolution des Genres de Jeux Vidéo
var chartCtx = document.getElementById('genreEvolutionChart').getContext('2d');

// Données ajustées pour que chaque décennie totalise 100%
const evolutionData = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [
        {
            label: 'Action ',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            data: [20, 25, 30, 35, 25] // Ajusté pour chaque décennie
        },
        {
            label: 'Aventure ',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            data: [10, 7, 8, 10, 15]
        },
        {
            label: 'RPG ',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            data: [15, 20, 25, 15, 10]
        },
        {
            label: 'Shooters ',
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            data: [5, 10, 20, 25, 30]
        },
        {
            label: 'Plateforme ',
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            data: [30, 25, 10, 5, 5]
        },
        {
            label: 'Course/Sport ',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            data: [10, 5, 5, 5, 5]
        },
        {
            label: 'Stratégie ',
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
            data: [5, 5, 2, 3, 5]
        },
        {
            label: 'Simulation ',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            data: [5, 3, 3, 2, 5]
        }
    ]
};

// Configuration du graphique en barres empilées
const chartConfig = {
    type: 'bar',
    data: evolutionData,
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Décennies',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
            },
            y: {
                stacked: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Pourcentage du marché par genre',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(200, 200, 200, 0.5)',
                    lineWidth: 1
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16
                    },
                    callback: function(value) {
                        return value + '%'; // Ajout d'un symbole de pourcentage
                    }
                },
                max: 100 // Limite à 100%
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            }
        }
    }
};

// Création du graphique
var genreEvolutionChart = new Chart(chartCtx, chartConfig);

//Les jeux vidéos n'ont aucune valeur éducative
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('educationGamesChart').getContext('2d');

    const dataYears = ['2010', '2012', '2014', '2016', '2018', '2020', '2022']; // Years

    const revenueData = [2.1, 2.6, 3.2, 4.0, 5.2, 6.8, 7.5]; // Revenue in billion dollars
    const learnersData = [20, 25, 35, 42, 55, 70, 85]; // Number of learners impacted in millions

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataYears,
            datasets: [
                {
                    label: 'Revenue (en Md de dollars $) ',
                    data: revenueData,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    yAxisID: 'yRevenue',
                },
                {
                    label: 'Apprentis impactés (en Millions) ',
                    data: learnersData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    yAxisID: 'yLearners',
                    color: "white",
                }
            ]
        },
        options: {
            scales: {
                yRevenue: {
                    type: 'linear',
                    position: 'left',
                    grid: {
                        color: 'rgba(54, 162, 235, 0.6)',
                    },
                    ticks: {
                        color: 'rgba(54, 162, 235, 1)',
                        font: {
                            size: 16
                        }
                    },
                    title: {
                        display: true,
                        text: 'Revenue (en Md de $)',
                        color: 'rgba(54, 162, 235, 1)',
                        font: {
                            size: 16
                        }
                    },
                },
                yLearners: {
                    type: 'linear',
                    position: 'right',
                    grid: {
                        color: 'rgba(255, 99, 132, 0.6)',
                    },
                    ticks: {
                        color: 'rgba(255, 99, 132, 1)',
                        font: {
                            size: 16
                        }
                        
                    },
                    title: {
                        display: true,
                        text: 'Apprentis impactés (en Millions)',
                        color: 'rgba(255, 99, 132, 1)',
                        font: {
                            size: 16
                        }
                    },
                },
                x: {
                    grid: {
                        drawOnChartArea: true,
                        color: 'rgba(200, 200, 200, 0.5)',
                        lineWidth: 1
                    },
                    ticks: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                        
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
                
            }
        }
    });
});
