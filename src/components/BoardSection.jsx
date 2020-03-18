import React from "react";
import styled from "styled-components";
import { ItemTypes } from "../utils/dragItems";
import { useDrop } from "react-dnd";

const BoardSectionWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: paleturquoise;
`;
function BoardSection(props) {
  const [{ isOver, isDragging, canDrop, item }, cardDropArea] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, algo) => {
      // item.char.attack(props.char);
      props.children.props.empty ? props.move(item.idx, props.idx) : props.attack(item.idx, props.idx);
    },
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop()
    })
  });

  return (
    <>
      <BoardSectionWrapper style={{ backgroundColor: isOver ? "yellow" : "initial" }} ref={cardDropArea}>
        {props.children}
      </BoardSectionWrapper>
    </>
  );
}

export default BoardSection;
