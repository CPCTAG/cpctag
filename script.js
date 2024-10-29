function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";
}

  
  // Tracking Form Submission
  document.getElementById("trackingForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const trackingNumber = document.getElementById("trackingNumber").value;
    const trackingResult = document.getElementById("trackingResult");
  
    trackingResult.innerHTML = `<p>Searching for tracking number: <strong>${trackingNumber}</strong></p>`;
  
    // Simulate API request (Replace this part with an actual API call if needed)
    setTimeout(() => {
      trackingResult.innerHTML = `
        <p>Status: In Transit</p>
        <p>Last Location: New York, NY</p>
        <p>Estimated Delivery: Oct 30, 2024</p>
      `;
    }, 2000);  // Simulated delay
  });
  