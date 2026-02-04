let votes = {
    partyA: 0,
    partyB: 0,
    partyC: 0,
    nota: 0
};

function vote(party) {
    votes[party]++;
    alert("Vote cast successfully for " + party);
}

function showResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';

    let total = votes.partyA + votes.partyB + votes.partyC + votes.nota;

    resultsDiv.innerHTML = `
        <p>Party A: ${votes.partyA}</p>
        <p>Party B: ${votes.partyB}</p>
        <p>Party C: ${votes.partyC}</p>
        <p>NOTA: ${votes.nota}</p>
        <p><strong>Total Votes: ${total}</strong></p>
    `;
}
