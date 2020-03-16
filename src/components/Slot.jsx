import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/dragItems";

function Slot(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, idx: props.idx },
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

  return (
    <CardWrapper
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: isDragging ? 25 : "initial",
        fontWeight: "bold",
        cursor: "move"
      }}
    ></CardWrapper>
  );
}

export default Slot;
