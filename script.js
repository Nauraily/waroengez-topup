document.addEventListener('DOMContentLoaded', function () {
    const diamondOptions = {
        freefire: [
            { amount: 5, price: 1500 },
            { amount: 12, price: 2500 },
            { amount: 50, price: 8500 },
            { amount: 70, price: 11000 },
            { amount: 140, price: 22000 }
        ],
        mobilelegend: [
            { amount: 5, price: 2500 },
            { amount: 25, price: 10000 },
            { amount: 40, price: 14000 },
            { amount: 53, price: 18500 },
            { amount: 77, price: 26000 }
        ]
    };

    function updateDiamondOptions() {
        const game = document.getElementById('game').value;
        const diamondSelect = document.getElementById('diamond');
        diamondSelect.innerHTML = '';

        diamondOptions[game].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.amount;
            opt.textContent = `${option.amount} Diamonds - Rp ${option.price}`;
            diamondSelect.appendChild(opt);
        });
    }

    updateDiamondOptions(); // Initial population based on default game

    document.getElementById('top-up-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const game = document.getElementById('game').value;
        const id = document.getElementById('id').value;
        const zone = document.getElementById('zone').value;
        const email = document.getElementById('email').value;
        const diamond = document.getElementById('diamond').value;
        const payment = document.querySelector('input[name="payment"]:checked').value;

        alert(`Payment confirmed!
            \nGame: ${game}
            \nUser ID: ${id}
            \nZone: ${zone}
            \nEmail: ${email || 'N/A'}
            \nDiamond Amount: ${diamond}
            \nPayment Method: ${payment}`);
    });
});
