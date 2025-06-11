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
// Form Submission
document.getElementById("cargoForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const cargo = document.getElementById("cargo").value;
  const contact = document.getElementById("contact").value;

  const jobData = {
    job_id: Date.now(), // use timestamp as unique ID
    from: from,
    to: to,
    cargo: cargo,
    contact: contact,
    status: "Pending"
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [jobData] })
  })
    .then(response => {
      if (response.ok) {
        alert("✅ Cargo job submitted!");
        document.getElementById("cargoForm").reset();
      } else {
        alert("❌ Submission failed. Try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("⚠️ Network or API error.");
    });
});
