import React, { useState, useEffect } from "react";
import Card from "./Card";
import Slot from "./Slot";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import BoardSection from "./BoardSection";
import { Row, Col } from "react-bootstrap";
import { deck01 } from "../utils/cards/Cards";
import background from "../assets/wood-bg.jpg";
import Deck from "./Deck";

const BoardWrapper = styled.div`
  width: 100%;

  background-color: whitesmoke;
  background-image: url(${background});
  background-size: cover;
`;

function Board() {
  const [enemyPositions, setEnemyPositions] = useState(Array(4).fill(null));
  const [ownPositions, setOwnPositions] = useState(Array(4).fill(null));
  const [drawedCard, setDrawedCard] = useState(null);

  const drawCard = () => {
    const randNum = Math.floor(Math.random() * deck01.length);
    const drawedCard = deck01[randNum];
    removeCard(randNum, deck01);
    setDrawedCard(drawedCard);
  };

  useEffect(() => {
    const playCard = (drawedCard, idx = ownPositions.indexOf(null)) => {
      if (idx === -1 || drawedCard == null) return;
      const ownPositionsCopy = [...ownPositions];
      ownPositionsCopy.splice(idx, 1, drawedCard);
      setDrawedCard(null);
      setOwnPositions(ownPositionsCopy);
    };
    playCard(drawedCard);
  }, [drawedCard, ownPositions]);

  const removeCard = (idx, arr) => {
    arr.splice(idx, 1);
    return arr;
  };

  const attack = (idx, newPos) => {
    if (idx === newPos) return;
    // else if()
    const enemyPositionsCopy = [...enemyPositions];
    enemyPositionsCopy[idx].attack(enemyPositionsCopy[newPos]);
    const newEnemyPositions = enemyPositionsCopy.map(elm => (elm == null || elm.life <= 0 ? null : elm));
    setEnemyPositions(newEnemyPositions);
  };

  const move = (idx, newPos) => {
    if (idx === newPos) return;
    const ownPositionsCopy = [...ownPositions];
    ownPositionsCopy.splice(newPos, 1, ownPositionsCopy[idx]);
    ownPositionsCopy.splice(idx, 1, null);

    setOwnPositions(ownPositionsCopy);
  };

  return (
    <DndProvider backend={Backend}>
      <BoardWrapper>
        <Row style={{ width: "100%", paddingTop: "10px" }} noGutters={false} className="justify-content-around">
          {enemyPositions.map((elm, idx) => (
            <Col md={3}>
              <BoardSection move={move} attack={attack} char={elm} idx={idx} key={idx}>
                {elm != null ? <Card char={elm} idx={idx}></Card> : <Slot empty idx={idx}></Slot>}
              </BoardSection>
            </Col>
          ))}
        </Row>
        <Row style={{ width: "100%", paddingTop: "10px" }} noGutters={false} className="justify-content-around">
          {ownPositions.map((elm, idx) => (
            <Col md={3}>
              <BoardSection move={move} attack={attack} char={elm} idx={idx} key={idx}>
                {elm != null ? <Card own char={elm} idx={idx}></Card> : <Slot own empty idx={idx}></Slot>}
              </BoardSection>
            </Col>
          ))}
        </Row>
        <Deck drawCard={drawCard} />
      </BoardWrapper>
    </DndProvider>
  );
}

export default Board;
