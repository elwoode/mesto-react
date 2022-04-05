function PopupWithForm(props) {
  return (
    <section className={`popup popup_form_${props.name} ${props.isOpen ? `popup_opened` : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose} />
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.form}>
          {props.children}
          <button className="popup__button" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
