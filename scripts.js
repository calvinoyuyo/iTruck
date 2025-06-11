const API_URL = 'https://sheetdb.io/api/v1/bx7655veox10d';

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("jobs-container");
    if (data.length === 0) {
      container.innerHTML = "<p class='text-muted'>No jobs yet.</p>";
      return;
    }

    data.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.className = "col-md-4 mb-4";
      jobCard.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Cargo: ${job.cargo}</h5>
            <p class="card-text"><strong>From:</strong> ${job.from} → <strong>To:</strong> ${job.to}</p>
            <p class="card-text"><strong>Contact:</strong> ${job.contact}</p>
            <p class="text-muted"><em>Status: ${job.status}</em></p>
          </div>
        </div>
      `;
      container.appendChild(jobCard);
    });
  });
