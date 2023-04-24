function openTab(evt, tabName) {
    // Get all tab content elements
    var tabcontent = document.getElementsByClassName("tabcontent");
    // Hide all tab content elements
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("show");
    }
  
    // Get all tab button elements
    var tablinks = document.getElementsByClassName("tablinks");
    // Deactivate all tab buttons
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // Show the selected tab content and activate the selected tab button
    document.getElementById(tabName).classList.add("show");
    evt.currentTarget.classList.add("active");
  }
  
  // Activate the first tab by default
  document.getElementsByClassName("tablinks")[0].click();
  