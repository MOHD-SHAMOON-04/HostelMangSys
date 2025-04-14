const userRole = "Warden"; // Change to "Provost" to see the provost version

// Sample data
const profileData = {
  name: "John Doe",
  email: "admin@example.com",
  phone: "+91-9876543210",
  department: "Computer Engineering",
  faculty: "Engineering & Technology",
  photo: "https://via.placeholder.com/120",
  hostels: userRole === "Warden"
    ? ["A.M KHWAJA HOSTEL"]
    : ["A.M KHWAJA HOSTEL", "FRK HOSTEL", "BR AMBEDKAR HOSTEL"]
};
const complaints = [
    {
      student: "Aman Verma",
      room: "101",
      message: "The fan in my room is not working."
    },
    {
      student: "Fatima Khan",
      room: "104",
      message: "Water supply issue in the washroom."
    },
    {
      student: "Ritika Sharma",
      room: "107",
      message: "Wi-Fi is down since morning."
    },
    {
      student: "Zaid Ali",
      room: "108",
      message: "Broken window glass in the room."
    }
  ];
  const samplePhotos = [
    "https://randomuser.me/api/portraits/men/11.jpg",
    "https://randomuser.me/api/portraits/women/21.jpg",
    "https://randomuser.me/api/portraits/men/31.jpg",
    "https://randomuser.me/api/portraits/women/41.jpg"
  ];
  const randomIndex = Math.floor(Math.random() * samplePhotos.length);
  profileData.photo = samplePhotos[randomIndex];
  
  
const students = [
    { name: "Mohd Shamoon", room: "101", department: "Computer Engineering" },
    { name: "Reyyan Khan", room: "102", department: "Information Technology" },
    { name: "Mohd Saif", room: "103", department: "Electrical Engineering" },
    { name: "Tanzeer Ahmed", room: "104", department: "Mechanical Engineering" },
    { name: "Aatir Jawed", room: "101", department: "Computer Engineering" },
    { name: "Priya Singh", room: "102", department: "Information Technology" },
    { name: "Ravi Patel", room: "103", department: "Electrical Engineering" },
    { name: "Fatima Khan", room: "104", department: "Mechanical Engineering" },
    { name: "Sahil Raza", room: "106", department: "Civil Engineering" },
    { name: "Mohd Shamoon", room: "107", department: "Electronics Engineering" },
    { name: "Zaid Ali", room: "108", department: "Information Technology" },
    { name: "Kiran Joshi", room: "109", department: "Computer Engineering" },
    { name: "Tanmay Jain", room: "114", department: "Electronics Engineering" }
  ];
// Render sidebar
const sidebarMenu = document.getElementById("sidebar-menu");
const menuItems = ["Dashboard", "Students", "Hostel Details", "Complaints", "Logout"];
menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.onclick = () => loadContent(item);
  sidebarMenu.appendChild(li);
});

// Render user role
document.getElementById("user-role").innerText = userRole;

// Load content dynamically
function loadContent(section) {
  const dashboard = document.getElementById("dashboard-content");
  if (section === "Dashboard") {
    dashboard.innerHTML = `
      <div class="card">
        <h2>${userRole} Dashboard</h2>
        <div class="profile-card">
          <img src="${profileData.photo}" alt="Admin Photo" class="profile-img" />
          <h3>${profileData.name}</h3>
          <p><strong>Email:</strong> ${profileData.email}</p>
          <p><strong>Phone:</strong> ${profileData.phone}</p>
          <p><strong>Department:</strong> ${profileData.department}</p>
          <p><strong>Faculty:</strong> ${profileData.faculty}</p>
          <p><strong>${userRole === "Warden" ? "Hostel" : "Halls"}:</strong></p>
          <ul>
            ${profileData.hostels.map(h => `<li><a href="#">${h}</a></li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  } else if (section === "Students") {
    dashboard.innerHTML = `
      <div class="card">
        <h2>Students</h2>
        <table class="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Room No</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            ${students.map(s => `
              <tr>
                <td>${s.name}</td>
                <td>${s.room}</td>
                <td>${s.department}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  else if (section === "Hostel Details") {
    dashboard.innerHTML = `
      <div class="card">
        <h2>Hostel Details</h2>
        <p><strong>Name:</strong>A.M KHWAJA HOSTEL</p>
        <p><strong>Warden:</strong> Dr. Sameer Sharma</p>
        <p><strong>Capacity:</strong> 120 students</p>
        <p><strong>Rooms:</strong> 60 (Tripple sharing)</p>
        <p><strong>Occupied:</strong> 105</p>
  
        <h3>Facilities</h3>
        <ul>
          <li>🛏️ Furnished Rooms</li>
          <li>📶 Wi-Fi Access</li>
          <li>🛁 Attached Washrooms</li>
          <li>🧺 Laundry Room</li>
          <li>🏋️ Gym</li>
          <li>📚 Reading Room</li>
          <li>🧹 Daily Cleaning</li>
        </ul>
  
        <h3>Mess Info</h3>
        <p><strong>Timings:</strong> Breakfast (8–10am), Lunch (1–2pm), Dinner (7–9pm)</p>
        <p><strong>Mess In-charge:</strong> Mr. Rajesh Kumar</p>
        <p><strong>Meal Plan:</strong> Veg & Non-Veg Available</p>
  
        <h3>Rules & Regulations</h3>
        <ul>
          <li>🔒 Entry closes at 10:00 PM</li>
          <li>🚫 Smoking & Alcohol are strictly prohibited</li>
          <li>🧾 Guests must be registered at the reception</li>
          <li>📞 Contact warden in case of emergency</li>
        </ul>
  
        <h3>Emergency Contacts</h3>
        <p><strong>Warden Contact:</strong> +91-98765-43210</p>
        <p><strong>Security:</strong> +91-91234-56789</p>
        <p><strong>Clinic:</strong> Campus Health Center (+91-90000-00000)</p>
  
        <h3>Hostel Gallery</h3>
        <div style="display: flex; gap: 10px;">
          <img src="" alt="Room" />
          <img src="" alt="Hostel" />
          <img src="" alt="Mess" />
        </div>
      </div>
    `;
  }
  else if (section === "Complaints") {
    dashboard.innerHTML = `
      <div class="card">
        <h2>Student Complaints</h2>
        <ul class="complaints-list">
          ${complaints.map(c => `
            <li>
              <strong>${c.student} (Room ${c.room}):</strong> ${c.message}
            </li>
          `).join("")}
        </ul>
      </div>
    `;
//   } else if (section === "Profile") {
//     dashboard.innerHTML = `
//       <div class="profile-card">
//         <img id="admin-photo" src="${profileData.photo}" alt="Admin Photo" class="profile-img" />
//         <input type="file" id="upload-photo" accept="image/*" />

//         <h2><input type="text" id="admin-name" value="${profileData.name}" class="profile-input" /></h2>
//         <p><strong>Email:</strong> <input type="email" id="admin-email" value="${profileData.email}" class="profile-input" /></p>
//         <p><strong>Phone:</strong> <input type="text" id="admin-phone" value="${profileData.phone}" class="profile-input" /></p>
//         <p><strong>Department:</strong> <input type="text" id="admin-dept" value="${profileData.department}" class="profile-input" /></p>
//         <p><strong>Faculty:</strong> <input type="text" id="admin-faculty" value="${profileData.faculty}" class="profile-input" /></p>
//         <button onclick="saveProfile()">Save</button>
//       </div>
//     `;

    setTimeout(() => {
      const fileInput = document.getElementById("upload-photo");
      const photo = document.getElementById("admin-photo");

      fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            photo.src = reader.result;
            profileData.photo = reader.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }, 100);
  } else if (section === "Logout") {
    alert("Logging out...");
    // Add logout logic here
  }
}

function saveProfile() {
  profileData.name = document.getElementById("admin-name").value;
  profileData.email = document.getElementById("admin-email").value;
  profileData.phone = document.getElementById("admin-phone").value;
  profileData.department = document.getElementById("admin-dept").value;
  profileData.faculty = document.getElementById("admin-faculty").value;

  alert("Profile updated successfully!");
  loadContent("Dashboard"); // Refresh dashboard view with updated info
}

// Load default section
loadContent("Dashboard");
