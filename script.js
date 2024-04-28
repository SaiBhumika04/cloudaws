const tellUsBtn = document.getElementById('tell-us-your-stories');
const uploadPopup = document.getElementById('upload-popup');
const closePopupBtn = document.getElementById('close-popup');

tellUsBtn.addEventListener('click', () => {
  uploadPopup.classList.remove('hidden'); // Makes the popup visible
});

closePopupBtn.addEventListener('click', () => {
  uploadPopup.classList.add('hidden'); // Hides the popup
});