import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={'profile'}
        form={'profileForm'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
        children={(
          <>
            <input className="popup__input" id="nameInput" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__input-error" id="nameInput-error" />
            <input className="popup__input" name="about" type="text" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__input-error" id="jobInput-error" />
          </>
        )}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={'cardAdd'}
        form={'formCard'}
        title={'Новое место'}
        buttonText={'Создать'}
        children={(
          <>
            <input className="popup__input" id="cardname-input" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error" id="cardname-input-error" />
            <input className="popup__input" id="link-input" name="link" type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="link-input-error" />
          </>
        )}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={'avatar'}
        form={'formAvatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        children={(
          <>
            <input className="popup__input" id="link-input-avatar" placeholder="Ссылка на картинку"
              type="url" name="avatar" required />
            <span className="popup__input-error" id="link-input-avatar-error" />
          </>
        )}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
