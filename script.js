const API_URL = 'https://sheetdb.io/api/v1/bx7655veox10d';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('jobs-container');
    data.forEach(job => {
      const card = document.createElement('div');
      card.className = 'job-card';
      card.innerHTML = `
        <strong>From:</strong> ${job.from}<br>
        <strong>To:</strong> ${job.to}<br>
        <strong>Cargo:</strong> ${job.cargo}<br>
        <strong>Contact:</strong> ${job.contact}<br>
        <strong>Status:</strong> ${job.status}
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error fetching data:', err);
  });
