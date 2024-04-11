document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/user-selected-answers')
        .then(response => response.json())
        .then(data => {
            const userSelectedAnswers = data.userSelectedAnswers;
            displayUserSelectedAnswers(userSelectedAnswers);
        })
        .catch(error => {
            console.error('Error fetching user-selected answers:', error);
        });
});

function displayUserSelectedAnswers(userSelectedAnswers) {
    const container = document.getElementById('user-selected-answers-container');
    userSelectedAnswers.forEach((userSelection, index) => {
        const answerElement = document.createElement('div');
        answerElement.innerHTML = `
            <h3>User ${index + 1} </h3>
            <h3> Name: ${userSelection.name}</h3>
            <h3> Email: ${userSelection.email} </h3>
            <h3> Selected Answers:</h3>
            <h4><pre>${JSON.stringify(userSelection.selectedAnswers, null, 2)}</pre></h4><br>
        `;
        container.appendChild(answerElement);
    });
}