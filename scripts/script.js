//Переменные
const popupPhoto= document.querySelector('.popup_full-photo');
const photoFull = document.querySelector('.popup__photo');
const nextPhotoButton = document.querySelector('.popup__slider-next');
const prevPhotoButton = document.querySelector('.popup__slider-prev');
const photo = document.querySelectorAll('.photo-grid__item');
let photoIndex = 0;
//Открытие фотографии
photo.forEach(function(img, index){
  img.addEventListener('click', (evt) => {
      evt.preventDefault();
      photoIndex = index;
      showPhoto();
  });
});
//предыдущая фотография
prevPhotoButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  photoIndex--;
  photoIndex < 0 && (photoIndex = photo.length-1);
  showPhoto()
  ;
});
//следующая фотография
nextPhotoButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  photoIndex++;
  photoIndex >= photo.length && (photoIndex = 0);
  showPhoto()
});

//Открытие слайдера с фотографиями
function showPhoto(){
  openPopup(popupPhoto);
  photoFull.src = photo[photoIndex].src;
  photoFull.alt = photo[photoIndex].alt;
};

//Закрытие фотографии
document.querySelector('.popup__close-button_photo').addEventListener('click', () => {
  closePopup(popupPhoto);
});
//Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}