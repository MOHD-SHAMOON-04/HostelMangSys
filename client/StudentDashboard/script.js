
document.addEventListener("DOMContentLoaded", function() {
  const studentData = {
    profilePicture: "profile.jpg",
    name: "John Doe",
    age: "20",
    hostel: "",  // Empty means hostel is not allotted.
    hall: "", // Empty means hall is not allotted.
    room: "204",
    floor: "2nd",
    course: "Bachelor of Magic",
    department: "Enchantment Sciences",
    year: "2",
    studentId: "123456",
    phone: "+123456789",
    email: "john.doe@example.com",
    guardianName: "Gandalf The White",
    guardianPhone: "+91-9876543210"
  };

  document.getElementById("profilePic").src = studentData.profilePicture;
  document.getElementById("studentName").textContent = studentData.name;
  document.getElementById("studentAge").textContent = studentData.age;
  document.getElementById("studentRoom").textContent = studentData.room;
  document.getElementById("studentFloor").textContent = studentData.floor;
  document.getElementById("studentCourse").textContent = studentData.course;
  document.getElementById("studentDepartment").textContent = studentData.department;
  document.getElementById("studentYear").textContent = studentData.year;
  document.getElementById("studentId").textContent = studentData.studentId;
  document.getElementById("studentPhone").textContent = studentData.phone;
  document.getElementById("studentEmail").textContent = studentData.email;
  document.getElementById("studentGuardianName").textContent = studentData.guardianName;
  document.getElementById("studentGuardianPhone").textContent = studentData.guardianPhone;

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

});


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
