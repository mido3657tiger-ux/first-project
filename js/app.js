const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

        datasets: [{
            label: 'AI Analytics',

            data: [12, 19, 3, 5, 2, 20],

            borderWidth: 2
        }]
    },

    options: {
        responsive: true
    }
});