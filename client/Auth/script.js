document.addEventListener("DOMContentLoaded", () => {
    const featuresData = [
        {
            title: "Easy Booking",
            description: "Streamlined process to book rooms with just a few clicks",
            icon: "📅",
        },
        {
            title: "Room Management",
            description: "Efficiently manage room availability and occupancy",
            icon: "🏠",
        },
        {
            title: "Payment Processing",
            description: "Secure and flexible payment options for guests",
            icon: "💳",
        },
        {
            title: "Guest Profiles",
            description: "Maintain detailed guest information for personalized service",
            icon: "👤",
        },
    ];

    const container = document.getElementById("features-container");
    featuresData.forEach((feature) => {
        const div = document.createElement("div");
        div.className = "feature-card";
        div.innerHTML = `
        <div class="feature-icon">${feature.icon}</div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      `;
        container.appendChild(div);
    });

    // Toggle menu on mobile
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
