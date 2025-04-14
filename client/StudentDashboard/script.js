document.addEventListener("DOMContentLoaded", () => {
  fetch("StudentData.json")
    .then(response => response.json())
    .then(data => {
      populateStudentData(data);
    })
    .catch(error => {
      console.error("Error loading student data:", error);
    });
});

function populateStudentData(studentData) {
  document.getElementById("studentName").innerText = studentData.name;
  document.getElementById("studentAge").innerText = studentData.age;
  document.getElementById("studentHostel").innerText = studentData.hostel || "N/A";
  document.getElementById("studentHall").innerText = studentData.hall;
  document.getElementById("studentRoom").innerText = studentData.room;
  document.getElementById("studentFloor").innerText = studentData.floor;
  document.getElementById("studentCourse").innerText = studentData.course;
  document.getElementById("studentDepartment").innerText = studentData.department;
  document.getElementById("studentYear").innerText = studentData.year;
  document.getElementById("studentId").innerText = studentData.studentId;
  document.getElementById("studentPhone").innerText = studentData.phone;
  document.getElementById("studentEmail").innerText = studentData.email;
  document.getElementById("studentGuardianName").innerText = studentData.guardianName;
  document.getElementById("studentGuardianPhone").innerText = studentData.guardianPhone;

  // 🔒 Hide the Leave Button if hostel is not assigned
  if (!studentData.hostel || studentData.hostel.trim() === "") {
    const leaveBtn = document.getElementById("requestLeaveBtn");
    if (leaveBtn) leaveBtn.style.display = "none";
  }


  // Check if hostel is assigned
  if (studentData.hostel && studentData.hall) {
    document.getElementById("studentHostel").textContent = studentData.hostel;
    document.getElementById("studentHall").textContent = studentData.hall;
    document.getElementById("studentRoom").textContent = studentData.room;
    document.getElementById("studentFloor").textContent = studentData.floor;
  } else {
    // Hide hostel-related fields
    document.querySelector('[data-for-hostel]').style.display = "none";
    document.querySelector('[data-for-hall]').style.display = "none";
    document.querySelector('[data-for-room]').style.display = "none";
    document.querySelector('[data-for-floor]').style.display = "none";
    const leaveBtn = document.getElementById('requestLeaveBtn');
    if (leaveBtn) leaveBtn.style.display = 'none';

    // Show Apply for Hostel Button
    const applyDiv = document.createElement('div');
    applyDiv.className = "apply-hostel-container";
    applyDiv.innerHTML = `
      <a href="./HostelApplication/hostel_application.html" class="apply-hostel-btn">
        <i class="fas fa-bed"></i> Apply for Hostel
      </a>
    `;
    document.querySelector('.info').appendChild(applyDiv);
    }

}


document.addEventListener("DOMContentLoaded", function () {
  // Leave modal logic
  const modal = document.getElementById("leaveModal");
  const btn = document.getElementById("requestLeaveBtn");
  const span = document.querySelector(".close");

  const notification = document.getElementById("notification");

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  document.getElementById("leaveForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Show notification
    notification.style.display = "block";

    // Hide the notification after 3 seconds
    setTimeout(function() {
      notification.style.display = "none";
    }, 3000);

    // Close the modal after form submission
    modal.style.display = "none";
  });
});
