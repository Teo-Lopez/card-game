import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/dragItems";

const Card = props => {
  const { power, life, maxLife, name, img } = props.char;

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, idx: props.idx, char: props.char },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const CardWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    padding: 0 5%;
    height: 250px;
    background-color: rgba(240, 240, 240, 0.5);
    /* border: 1px solid grey; */
    box-sizing: content-box;
    h3 {
      font-size: 16px;
    }
  `;

  const CardTitle = styled.div`
    text-align: center;
    height: 5%;
    margin-bottom: 15px;
  `;

  const CardStats = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;
  `;

  const CardImage = styled.div`
    width: 100%;
    height: 80%;
    background: url(${img}) no-repeat center;
    background-size: contain;
  `;

  return (
    <CardWrapper
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: isDragging ? 25 : "initial",
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      <CardTitle>
        <h3>
          <strong>{name}</strong>
        </h3>
      </CardTitle>
      <CardStats>
        <div>
          <p>Pow: {power}</p>
        </div>
        <div>
          <p>HP: {life}</p>
        </div>
      </CardStats>
      <CardImage />
    </CardWrapper>
  );
};

export default Card;
