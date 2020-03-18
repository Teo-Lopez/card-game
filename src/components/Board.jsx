import React, { useState, useEffect } from "react";
import Card from "./Card";
import Slot from "./Slot";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import BoardSection from "./BoardSection";
import { Row, Col } from "react-bootstrap";
import { Midoriya, Leena, deck01 } from "../utils/cards/Cards";
import background from "../assets/wood-bg.jpg";
import Deck from "./Deck";

const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  background-image: url(${background});
  background-size: cover;
  display: flex;
`;

function Board() {
  const [positions, setPositions] = useState(Array(8).fill(null));
  const [drawedCard, setDrawedCard] = useState(null);

  const drawCard = () => {
    const randNum = Math.floor(Math.random() * deck01.length);
    const drawedCard = deck01[randNum];
    removeCard(randNum, deck01);
    setDrawedCard(drawedCard);
  };

  useEffect(() => {
    const playCard = (drawedCard, idx = positions.indexOf(null)) => {
      if (idx === -1 || drawedCard == null) return;
      const positionsCopy = [...positions];
      positionsCopy.splice(idx, 1, drawedCard);
      setDrawedCard(null);
      setPositions(positionsCopy);
    };
    playCard(drawedCard);
  }, [drawedCard, positions]);

  const removeCard = (idx, arr) => {
    arr.splice(idx, 1);
    return arr;
  };

  const attack = (idx, newPos) => {
    if (idx === newPos) return;
    // else if()
    const positionsCopy = [...positions];
    positionsCopy[idx].attack(positionsCopy[newPos]);
    const newPositions = positionsCopy.map(elm => (elm == null || elm.life <= 0 ? null : elm));
    setPositions(newPositions);
  };

  const move = (idx, newPos) => {
    if (idx === newPos) return;
    const positionsCopy = [...positions];
    positionsCopy.splice(newPos, 1, positionsCopy[idx]);
    positionsCopy.splice(idx, 1, null);

    setPositions(positionsCopy);
  };

  return (
    <DndProvider backend={Backend}>
      <BoardWrapper>
        <Row style={{ width: "100%" }} noGutters={false} className="justify-content-around">
          {positions.map((elm, idx) => (
            <Col md={3}>
              <BoardSection move={move} attack={attack} char={elm} idx={idx} key={idx}>
                {elm != null ? <Card char={elm} idx={idx}></Card> : <Slot empty idx={idx}></Slot>}
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
