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
    drop: item => {
      // item.char.attack(props.char);
      let isEmpty = props.children.props.empty;
      let isOwn = props.children.props.own;
      if (isOwn && isEmpty) {
        props.move(item.idx, props.idx);
      } else if (isOwn && !isEmpty) {
        console.log("It's yours dummy");
      } else if (!isOwn && !isEmpty) {
        props.attack(item.idx, props.idx);
      } else {
        console.log("No enemy here");
      }
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
