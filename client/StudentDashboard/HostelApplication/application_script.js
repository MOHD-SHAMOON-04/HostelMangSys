document.addEventListener("DOMContentLoaded", () => {
  fetch("../StudentData.json")
    .then(response => response.json())
    .then(data => {
      populateStudentData(data);
    })
    .catch(error => {
      console.error("Error loading student data:", error);
    });
});

function populateStudentData(studentData) {
  document.getElementById("studentName").value = studentData.name;
  document.getElementById("studentAge").value = studentData.age;
  document.getElementById("studentCourse").value = studentData.course;
  document.getElementById("studentDepartment").value = studentData.department;
  document.getElementById("studentYear").value = studentData.year;
  document.getElementById("studentId").value = studentData.studentId;
  document.getElementById("studentPhone").value = studentData.phone;
  document.getElementById("studentEmail").value = studentData.email;
  document.getElementById("studentGuardianName").value = studentData.guardianName;
  document.getElementById("studentGuardianPhone").value = studentData.guardianPhone;

  document.getElementById("hostelApplicationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Show loading spinner
    document.getElementById("loadingOverlay").style.display = "flex";

    // Fake server delay
    setTimeout(() => {
      // Hide loading spinner
      document.getElementById("loadingOverlay").style.display = "none";

      // Show "application submitted" popup
      const notification = document.getElementById("submitNotification");
      notification.style.display = "block";

      // After 2 seconds redirect to dashboard
      setTimeout(() => {
        notification.style.display = "none";
        window.location.href = "../student_dashboard.html";
      }, 800);

    }, 800);
  });
}
