
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}, 3500);

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Please enter username and password.");
  }
}

function setLanguage(lang) {
  alert("Language set to: " + lang);
}

function openNutrition() {
  alert("Opening Food and Nutrition...");
}

function openDoctorConsultation() {
  alert("Opening Doctor Consultation...");
}

function openGrowthMonitor() {
  alert("Opening Child Growth Monitor...");
}

function openGPSTracker() {
  document.getElementById("map").style.display = "block";
}

function initMap() {
  const assam = { lat: 26.2006, lng: 92.9376 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: assam
  });
  const marker = new google.maps.Marker({
    position: assam,
    map: map,
    title: "Nearby Govt Hospital"
  });
}
