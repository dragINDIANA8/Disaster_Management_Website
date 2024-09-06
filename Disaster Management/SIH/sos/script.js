function sendEmergencyMessage() {
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    if (!phoneNumber) {
      alert('Please enter a phone number.');
      return;
    }
  
    const emergencyMessage = encodeURIComponent("Emergency! I need help. Please contact me as soon as possible.");
  
    // This opens the default SMS application with the emergency message pre-filled
    window.open(`sms:${phoneNumber}?body=${emergencyMessage}`);
  }
  