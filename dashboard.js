function viewCandidates() {
  alert("Redirecting to candidate list...");
  // location.href = "/candidates.html";
}

function logout() {
  localStorage.removeItem("studentData");
  alert("Logged out");
  window.location.href = "login.html";
}

  // Set election end times (in milliseconds)
  const elections = [
    {
      id: 1,
      endTime: new Date().getTime() + 5 * 60 * 1000 // 5 minutes from now
    },
    {
      id: 2,
      endTime: new Date().getTime() + 8 * 60 * 1000 // 8 minutes from now
    }
  ];

  elections.forEach(election => {
    const timerDisplay = document.getElementById('timer' + election.id);
    const button = document.getElementById('btn' + election.id);

    function updateTimer() {
      const now = new Date().getTime();
      const timeLeft = election.endTime - now;

      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (timeLeft <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = "00:00";
        button.disabled = true;
        return;
      }

      timerDisplay.textContent =
        String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
    }

    updateTimer(); // initial call
    const interval = setInterval(updateTimer, 1000);
  });           
