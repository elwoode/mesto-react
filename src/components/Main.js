import React, { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userInfo, setUserInfo] = React.useState({})
  const [cards, setCards] = React.useState([])
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setUserInfo(profileInfo)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userInfo.avatar} alt={userInfo.name} />
        <button className="profile__edit-pen" type="button" onClick={props.onEditAvatar} />
        <h1 className="profile__name">{userInfo.name}</h1>
        <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={props.onEditProfile} />
        <p className="profile__job">{userInfo.about}</p>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>


      <section className="elements">
        {cards.map((card, id) => (
          <Card
            key={id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;
