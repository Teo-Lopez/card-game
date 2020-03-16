import React, { useState } from "react";
import Card from "./Card";
import Slot from "./Slot";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import BoardSection from "./BoardSection";
import { Container, Row, Col } from "react-bootstrap";
import { Midoriya, Leena } from "../utils/cards/Cards";
import background from "../assets/wood-bg.jpg";

const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  background-image: url(${background});
  background-size: cover;
  display: flex;
`;

function Board() {
  const [positions, setpositions] = useState([
    new Midoriya(),
    new Leena(),
    new Midoriya(),
    new Midoriya(),
    new Midoriya(),
    null,
    new Midoriya(),
    new Midoriya()
  ]);

  const attack = (idx, newPos) => {
    if (idx === newPos) return;
    // else if()
    const positionsCopy = [...positions];
    positionsCopy[idx].attack(positionsCopy[newPos]);
    const newPositions = positionsCopy.map(elm => (elm == null || elm.life < 0 ? null : elm));
    setpositions(newPositions);
  };

  const move = (idx, newPos) => {
    if (idx === newPos) return;
    const positionsCopy = [...positions];
    positionsCopy.splice(newPos, 1, positionsCopy[idx]);
    positionsCopy.splice(idx, 1, null);

    setpositions(positionsCopy);
  };

  return (
    <DndProvider backend={Backend}>
      <Container>
        <BoardWrapper>
          <Row style={{ width: "100%" }} noGutters={false} className="justify-content-around">
            {positions.map((elm, idx) => (
              <Col md={3}>
                <BoardSection move={move} attack={attack} char={elm} idx={idx} key={idx}>
                  {elm != null ? elm.life > 0 && <Card char={elm} idx={idx}></Card> : <Slot empty idx={idx}></Slot>}
                </BoardSection>
              </Col>
            ))}
          </Row>
        </BoardWrapper>
      </Container>
    </DndProvider>
  );
}

export default Board;
