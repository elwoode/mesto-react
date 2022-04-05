import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <div className="elem">
      <img className="elem__image" src={props.link} alt={props.name} title="Изображение локации указанной в описаннии к фотографии" onClick={handleClick} />
      <button type="button" className="elem__del-button" title="Удалить" />
      <div className="elem__info">
        <h2 className="elem__text">{props.name}</h2>
        <div className="elem__like-container">
          <button type="button" className="elem__like-button" title="Нравится" />
          <p className="elem__like-counter">{props.likes}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;

