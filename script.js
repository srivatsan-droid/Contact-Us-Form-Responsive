document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const queryType = document.querySelector("input[name='queryType']:checked").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;

    // Display form data (Simulating form submission)
    const responseDiv = document.getElementById("formResponse");
    responseDiv.innerHTML = `
      <h4>Form Submitted</h4>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Query Type:</strong> ${queryType}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
    `;

    // Optionally, you can clear the form
    document.getElementById("contactForm").reset();
  });