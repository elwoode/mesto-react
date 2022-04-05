function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_photo" ${card && 'popup_opened'}`}>
      <div className="popup__zoom">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <img className="popup__img" src={card && card.link} alt={card && card.name} />
        <p className="popup__photo-text">{card && card.name}</p>
      </div>
    </section>
  )
}

export default ImagePopup;

