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
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
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
                        size: 18 // Taille de police pour le titre Y
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour les ticks Y
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Licences',
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour le titre X
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour les ticks X
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0,
                    color: 'white',
                    font: {
                        size: 0 // Taille de la police de la légende
                    }
                }
                
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label;
                        const value = tooltipItem.raw; // Utilise la valeur brute des revenus
                        return `: ${value} Md de dollars`; // Affiche le nom de la licence et les revenus
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Couleur de fond du tooltip
                titleColor: 'white', // Couleur du titre
                bodyColor: 'white', // Couleur du corps
                borderColor: 'rgba(255, 255, 255, 0.2)', // Couleur de la bordure
                borderWidth: 1 // Épaisseur de la bordure
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
            data: [0.0002, 0.02, 0.05, 0.1, 2.1, 3.0],
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
                        size: 18 // Taille de police pour le titre Y
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour les ticks Y
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Années',
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour le titre X
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour les ticks X
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0, 
                    font: {
                        size: 0 // Taille de la police de la légende
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y} Md`;
                    }
                }
            }
        }
    }
});

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
                label: 'Console Portable    ',
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
                        size: 18 // Taille de police pour le titre Y
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour les ticks Y
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Années',
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour le titre X
                    }
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 18 // Taille de police pour les ticks X
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Couleur de la grille
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 50, 
                    font: {
                        size: 18 // Taille de la police de la légende
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
