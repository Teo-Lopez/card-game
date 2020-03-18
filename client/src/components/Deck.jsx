import React from "react";
import styled from "styled-components";
import cover from "../assets/cover.png";

const DeckWrapper = styled.div`
  width: 100px;
  height: 160px;
  margin: 0 10px;
  margin-top: calc(100vh - 160px);
`;

const DeckImg = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${cover});
  background-size: contain;
  background-repeat: no-repeat;
`;

function Deck({ drawCard }) {
  return (
    <DeckWrapper>
      <DeckImg onClick={drawCard} />
    </DeckWrapper>
  );
}

export default Deck;
