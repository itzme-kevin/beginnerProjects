const locationButton = document.getElementById('location-btn');
const locationMessage = document.getElementById('location-message');

locationButton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Location access granted
      console.log('Location:', position.coords);
      locationMessage.textContent = 'Location access granted!';
      // Use the position data (latitude, longitude) to find nearby events (implementation depends on your backend)
    },
    (error) => {
      // Location access denied
      console.error('Error getting location:', error);
      locationMessage.textContent = 'Location access denied.';
    }
  );
});
