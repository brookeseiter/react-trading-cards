'use strict';

// to loop through tradingCardData:
// 1. for (const currentCard of tradingCardData) {
//   console.log(currentCard.name, currentCard.skill);
// }
// 2. for (const currentCard of tradingCardData) {
//   console.log(currentCard[`name`], currentCard[`skill`]);
// }

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Merge",
    skill: "eating tater tots",
    imgUrl: "/static/img/merge.png",
    cardId: 4,
  },
  {
    name: "Seedpy",
    skill: "profesional procrastination",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}
// this renders a react component for each data point,
// referring to the TradingCard function above. aka
// instantiating a TradingCard component for each data point

ReactDOM.render(
    <TradingCardContainer />,
    document.querySelector('#all-cards'),
  );

// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );

// ReactDOM.render(
//   <TradingCard name="Merge" skill="eating tater tots" imgUrl="/static/img/merge.png" />,
//   document.querySelector('#merge'),
// );

// ReactDOM.render(
//   <TradingCard name="Seedpy" skill="professional procrastination" imgUrl="/static/img/seedpy.jpeg" />,
//   document.querySelector('#seedpy'),
// );
