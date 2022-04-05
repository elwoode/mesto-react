function ImagePopup(props) {
  return (
    <section className={`popup popup_photo" ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__zoom">
        <button className="popup__close-button" type="button" onClick={props.onClose} />
        <img className="popup__img" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} />
        <p className="popup__photo-text">{props.card ? props.card.name : ''}</p>
      </div>
    </section>
  )
}

export default ImagePopup;

