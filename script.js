// DOM Elements
const buildings = document.querySelectorAll(".building-3d");
const detailsPanel = document.getElementById("detailsPanel");
const detailTitle = document.getElementById("detailTitle");
const routeLine = document.getElementById("routeLine");
const userDot = document.getElementById("userDot");
const typeBadge = document.getElementById("typeBadge");
const floorInfo = document.getElementById("floorInfo");
const floorList = document.getElementById("floorList");
const natureInfo = document.getElementById("natureInfo");
const natureFeatures = document.getElementById("natureFeatures");
const amenityInfo = document.getElementById("amenityInfo");
const amenityFeatures = document.getElementById("amenityFeatures");

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

let isDark = true;

// Theme Toggle Function
themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.body.classList.remove("light-mode");
    
    const mapArea = document.getElementById("mapArea");
    if (mapArea) {
      mapArea.classList.remove("bg-green-100");
      mapArea.classList.add("bg-green-900");
    }
    
    themeIcon.textContent = "🌙";
    themeText.textContent = "Dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.add("light-mode");
    
    const mapArea = document.getElementById("mapArea");
    if (mapArea) {
      mapArea.classList.remove("bg-green-900");
      mapArea.classList.add("bg-green-100");
    }
    
    themeIcon.textContent = "☀️";
    themeText.textContent = "Light";
  }
  
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "light") {
    isDark = false;
    document.documentElement.classList.remove("dark");
    document.body.classList.add("light-mode");
    
    const mapArea = document.getElementById("mapArea");
    if (mapArea) {
      mapArea.classList.remove("bg-green-900");
      mapArea.classList.add("bg-green-100");
    }
    
    themeIcon.textContent = "☀️";
    themeText.textContent = "Light";
  }
});

// Floor Data
const floorData = {
  "Bhavans College": [
    { floor: "Ground Floor", rooms: "Principal Office, Reception, Account Section" },
    { floor: "1st Floor", rooms: "Commerce Department, Staff Room" },
    { floor: "2nd Floor", rooms: "Science Department, Chemistry Lab" },
    { floor: "3rd Floor", rooms: "Arts Department, History Museum" }
  ],
  "SPIT College": [
    { floor: "Ground Floor", rooms: "Computer Lab, Electronics Lab, Workshop" },
    { floor: "1st Floor", rooms: "IT Department, Drawing Hall" },
    { floor: "2nd Floor", rooms: "Mechanical Department, Library" },
    { floor: "3rd Floor", rooms: "Civil Department, Seminar Hall" }
  ],
  "SPJIMR": [
    { floor: "Ground Floor", rooms: "Reception, Executive Education, Cafe" },
    { floor: "1st Floor", rooms: "MBA Classrooms, Case Lab" },
    { floor: "2nd Floor", rooms: "Library, Research Center" },
    { floor: "3rd Floor", rooms: "Admin Offices, Board Room" },
    { floor: "4th Floor", rooms: "Auditorium, Event Hall" }
  ],
  "SPCE": [
    { floor: "Ground Floor", rooms: "Civil Engineering Lab, Workshop" },
    { floor: "1st Floor", rooms: "Mechanical Lab, Drawing Hall" },
    { floor: "2nd Floor", rooms: "Computer Center, Library" },
    { floor: "3rd Floor", rooms: "Staff Rooms, Department Offices" }
  ],
  "Central Facilities": [
    { floor: "Ground Floor", rooms: "Main Reception, Health Center, Stationery Shop" },
    { floor: "1st Floor", rooms: "Physics Lab, Chemistry Lab, Computer Lab" },
    { floor: "2nd Floor", rooms: "Central Library, Reading Rooms, Study Hall" },
    { floor: "3rd Floor", rooms: "Admin Offices, Registrar, Examination Cell" },
    { floor: "4th Floor", rooms: "Auditorium, Seminar Hall, Conference Room" }
  ]
};

// Nature Features
const natureFeaturesData = {
  "Campus Garden": [
    "🌸 Flower beds with seasonal blooms",
    "🌳 Ancient trees providing shade",
    "🪑 Benches for relaxation",
    "🦋 Butterfly garden",
    "🌿 Meditation zone",
    "🚶 Walking paths"
  ],
  "Campus Lake": [
    "🦆 Duck pond with waterfowl",
    "🚣 Boating facility",
    "🎣 Fishing area",
    "🌅 Sunset viewpoint",
    "🌺 Water lilies",
    "🦅 Bird watching spot"
  ]
};

// Amenity Features
const amenityFeaturesData = {
  "Campus Temple": [
    "🪔 Sacred shrine for prayer",
    "🕉 Daily aarti timings",
    "🧘 Meditation hall",
    "🎊 Festival celebrations",
    "🙏 Peaceful atmosphere"
  ],
  "Campus Canteen": [
    "🍛 South & North Indian food",
    "☕ Breakfast & snacks",
    "🍔 Fast food corner",
    "🧃 Fresh beverages",
    "⏰ 7AM - 9PM"
  ],
  "Main Parking": [
    "🚗 Car parking (200 slots)",
    "🛵 Two-wheeler stand",
    "♿ Disabled parking",
    "📹 CCTV surveillance",
    "💰 Free parking"
  ],
  "Student Parking": [
    "🚲 Bicycle stand",
    "🛵 Two-wheeler parking",
    "🔒 Secure enclosure",
    "📹 CCTV coverage",
    "🏃 Near hostels"
  ],
  "Main Entrance": [
    "🚪 Main gate access",
    "👮 Security checkpoint",
    "📝 Visitor registration",
    "🕐 6AM - 10PM",
    "🎓 ID card required"
  ],
  "Side Gate A": [
    "🚶 Pedestrian access",
    "🕐 6AM - 9PM",
    "👮 Security present",
    "📍 Near library"
  ],
  "Side Gate B": [
    "🚶 Pedestrian access",
    "🕐 6AM - 9PM",
    "👮 Security present",
    "📍 Near sports complex"
  ],
  "Emergency Exit": [
    "🚨 Emergency use only",
    "🔔 Alarm system",
    "🧯 Fire safety equipment",
    "⚠️ 24/7 monitored",
    "🚑 Emergency vehicles"
  ]
};

// Department Data
const departmentData = {
  "Bhavans College": ["Arts", "Commerce", "Science", "Computer Science"],
  "SPIT College": ["Information Technology", "Computer Engineering", "Electronics", "Mechanical"],
  "SPJIMR": ["MBA", "Executive Education", "Research", "Leadership Program"],
  "SPCE": ["Civil Engineering", "Mechanical Engineering", "Computer Engineering", "IT"],
  "Central Facilities": ["Physics", "Chemistry", "Computer Science", "Library Services"],
  "Campus Garden": ["Recreation", "Nature Study", "Environmental Science"],
  "Campus Lake": ["Environmental Studies", "Aquatic Biology", "Recreation"]
};

// Facilities Data
const facilitiesData = {
  "Bhavans College": ["📚 Library", "🎭 Auditorium", "💻 Computer Lab", "🍽 Cafeteria", "🏃 Sports Ground"],
  "SPIT College": ["📚 Research Labs", "💻 Programming Lab", "🍽 Cafeteria", "🏋️ Gymnasium"],
  "SPJIMR": ["📚 Library", "🎭 Auditorium", "💻 Case Lab", "🍽 Fine Dining", "🏊 Swimming Pool"],
  "SPCE": ["📚 Library", "🔧 Workshop", "💻 Computer Lab", "🍽 Cafeteria", "🏋️ Sports Complex"],
  "Central Facilities": ["📚 Central Library", "🎭 Auditorium", "💻 Computer Lab", "🍽 Cafeteria", "🏥 Health Center"],
  "Campus Garden": ["🌳 Walking Trail", "🪑 Seating Area", "🌸 Photo Zone", "📖 Reading Corner"],
  "Campus Lake": ["🚣 Boat Ride", "🎣 Fishing", "📷 Photo Point", "🌅 Viewing Deck"]
};

// Building Icon Mapping
const buildingIcons = {
  "Bhavans College": "🎓",
  "SPIT College": "🏛️",
  "SPJIMR": "📈",
  "SPCE": "⚙️",
  "Central Facilities": "🏢",
  "Campus Garden": "🌳",
  "Campus Lake": "💧",
  "Campus Temple": "🛕",
  "Campus Canteen": "🍽️",
  "Main Parking": "🅿️",
  "Student Parking": "🚲",
  "Main Entrance": "🚪",
  "Side Gate A": "🚶",
  "Side Gate B": "🚶",
  "Emergency Exit": "🚨"
};

// Building Click Handler
buildings.forEach(building => {
  building.addEventListener("click", () => {
    const name = building.dataset.name;
    const icon = buildingIcons[name] || "🏢";
    detailTitle.innerHTML = `<span class="mr-2">${icon}</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    typeBadge.innerText = "🏢 Building";
    
    updateDepartments(name);
    updateFacilities(name);
    showFloorInfo(name);
    
    natureInfo.style.display = "none";
    amenityInfo.style.display = "none";
    
    detailsPanel.classList.remove("translate-x-full");
    drawRoute(building);
  });
});

// Temple Click Handler
document.querySelectorAll('.temple').forEach(temple => {
  temple.addEventListener('click', () => {
    const name = temple.dataset.name;
    detailTitle.innerHTML = `<span class="mr-2">🛕</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    typeBadge.innerText = "🛕 Temple";
    
    hideAllSections();
    showAmenityInfo(name);
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(temple);
  });
});

// Canteen Click Handler
document.querySelectorAll('.canteen').forEach(canteen => {
  canteen.addEventListener('click', () => {
    const name = canteen.dataset.name;
    detailTitle.innerHTML = `<span class="mr-2">🍽️</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    typeBadge.innerText = "🍽️ Canteen";
    
    hideAllSections();
    showAmenityInfo(name);
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(canteen);
  });
});

// Parking Click Handler
document.querySelectorAll('.parking').forEach(parking => {
  parking.addEventListener('click', () => {
    const name = parking.dataset.name;
    detailTitle.innerHTML = `<span class="mr-2">🅿️</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    typeBadge.innerText = "🅿️ Parking";
    
    hideAllSections();
    showAmenityInfo(name);
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(parking);
  });
});

// Entry/Exit Click Handler
document.querySelectorAll('.entry-point').forEach(point => {
  point.addEventListener('click', () => {
    const name = point.dataset.name;
    const icon = buildingIcons[name] || "🚪";
    detailTitle.innerHTML = `<span class="mr-2">${icon}</span>${name}`;
    
    if (name === "Emergency Exit") {
      typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      typeBadge.innerText = "🚨 Emergency";
    } else {
      typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      typeBadge.innerText = "🚪 Entry/Exit";
    }
    
    hideAllSections();
    showAmenityInfo(name);
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(point);
  });
});

// Garden Click Handler
document.querySelectorAll('.garden').forEach(garden => {
  garden.addEventListener('click', () => {
    const name = garden.dataset.name;
    detailTitle.innerHTML = `<span class="mr-2">🌳</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    typeBadge.innerText = "🌳 Nature Area";
    
    hideAllSections();
    showNatureInfo(name);
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(garden);
  });
});

// Lake Click Handler
document.querySelectorAll('.lake').forEach(lake => {
  lake.addEventListener('click', () => {
    const name = lake.dataset.name;
    detailTitle.innerHTML = `<span class="mr-2">💧</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    typeBadge.innerText = "💧 Water Body";
    
    hideAllSections();
    showNatureInfo(name);
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(lake);
  });
});

// Restroom Click Handler
document.querySelectorAll('.restroom').forEach(room => {
  room.addEventListener('click', () => {
    const name = room.dataset.name;
    detailTitle.innerHTML = `<span class="mr-2">🚻</span>${name}`;
    
    typeBadge.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    typeBadge.innerText = "🚻 Restroom";
    
    hideAllSections();
    
    detailsPanel.classList.remove('translate-x-full');
    drawRoute(room);
  });
});

// Floor Marker Click Handler
document.querySelectorAll('.floor-marker').forEach(marker => {
  marker.addEventListener('click', (e) => {
    e.stopPropagation();
    const buildingName = marker.dataset.building;
    const building = document.querySelector(`[data-name="${buildingName}"]`);
    
    if (building) {
      building.click();
    }
  });
});

// Helper Functions
function hideAllSections() {
  document.getElementById('departmentsList').parentElement.style.display = 'none';
  document.getElementById('facilitiesList').parentElement.style.display = 'none';
  floorInfo.style.display = 'none';
  natureInfo.style.display = 'none';
  amenityInfo.style.display = 'none';
}

function updateDepartments(name) {
  const deptList = document.getElementById('departmentsList');
  deptList.innerHTML = '';
  const depts = departmentData[name] || ["General"];
  depts.forEach(dept => {
    const li = document.createElement('li');
    li.textContent = dept;
    deptList.appendChild(li);
  });
  document.getElementById('departmentsList').parentElement.style.display = 'block';
}

function updateFacilities(name) {
  const facList = document.getElementById('facilitiesList');
  facList.innerHTML = '';
  const facs = facilitiesData[name] || ["General Facilities"];
  facs.forEach(fac => {
    const div = document.createElement('div');
    div.className = 'facility-item';
    div.textContent = fac;
    facList.appendChild(div);
  });
  document.getElementById('facilitiesList').parentElement.style.display = 'block';
}

function showFloorInfo(name) {
  const floors = floorData[name];
  floorList.innerHTML = '';
  
  if (floors) {
    floors.forEach((f, index) => {
      const div = document.createElement('div');
      div.className = 'floor-item';
      div.style.animationDelay = `${index * 0.1}s`;
      div.innerHTML = `
        <div class="floor-number">${f.floor}</div>
        <div class="floor-rooms">${f.rooms}</div>
      `;
      floorList.appendChild(div);
    });
    floorInfo.style.display = 'block';
  } else {
    floorInfo.style.display = 'none';
  }
}

function showNatureInfo(name) {
  natureInfo.style.display = 'block';
  const features = natureFeaturesData[name] || [];
  natureFeatures.innerHTML = '';
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    natureFeatures.appendChild(li);
  });
}

function showAmenityInfo(name) {
  amenityInfo.style.display = 'block';
  const features = amenityFeaturesData[name] || [];
  amenityFeatures.innerHTML = '';
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    amenityFeatures.appendChild(li);
  });
}

function drawRoute(element) {
  const mapRect = element.parentElement.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const userRect = userDot.getBoundingClientRect();

  const startX = userRect.left - mapRect.left + userRect.width / 2;
  const startY = userRect.top - mapRect.top + userRect.height / 2;
  const endX = elementRect.left - mapRect.left + elementRect.width / 2;
  const endY = elementRect.top - mapRect.top + elementRect.height / 2;

  const dx = endX - startX;
  const dy = endY - startY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  routeLine.style.width = "0";
  routeLine.style.left = startX + "px";
  routeLine.style.top = startY + "px";
  routeLine.style.transform = `rotate(${angle}deg)`;
  
  setTimeout(() => {
    routeLine.style.transition = "width 1s ease-out";
    routeLine.style.width = distance + "px";
  }, 100);
}

// Close Panel
document.getElementById("closePanel").onclick = () => {
  detailsPanel.classList.add("translate-x-full");
  routeLine.style.width = "0";
};

// Search Functionality
document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  buildings.forEach(b => {
    b.style.display = b.dataset.name.toLowerCase().includes(value) ? "block" : "none";
  });
  
  document.querySelectorAll('.garden, .lake, .restroom, .temple, .canteen, .parking, .entry-point').forEach(el => {
    el.style.display = el.dataset.name.toLowerCase().includes(value) ? "flex" : "none";
  });
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('bg-green-500', 'text-white');
      b.classList.add('bg-gray-200', 'dark:bg-gray-700');
    });
    btn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
    btn.classList.add('bg-green-500', 'text-white');
    
    // Apply filter
    document.querySelectorAll('.building-3d, .garden, .lake, .restroom, .temple, .canteen, .parking, .entry-point').forEach(el => {
      const type = el.dataset.type;
      if (filter === 'all') {
        el.style.display = el.classList.contains('building-3d') ? 'block' : 'flex';
      } else if (filter === 'nature') {
        el.style.display = (type === 'nature') ? 'flex' : 'none';
      } else if (filter === 'amenity') {
        el.style.display = (type === 'amenity') ? 'flex' : 'none';
      } else {
        el.style.display = (type === filter) ? 'flex' : 'none';
      }
    });
  });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    detailsPanel.classList.add('translate-x-full');
  }
});
