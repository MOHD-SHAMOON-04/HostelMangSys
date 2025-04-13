
document.addEventListener("DOMContentLoaded", function() {
  const studentData = {
    profilePicture: "profile.jpg",
    name: "John Doe",
    age: "20",
    hostel: "Dragon’s Den",
    hall: "East Wing",
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
  document.getElementById("studentHostel").textContent = studentData.hostel;
  document.getElementById("studentHall").textContent = studentData.hall;
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
});

document.addEventListener("DOMContentLoaded", function () {
  // Leave modal logic
  const modal = document.getElementById("leaveModal");
  const btn = document.getElementById("requestLeaveBtn");
  const span = document.querySelector(".close");

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
    modal.style.display = "none";
  });
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
