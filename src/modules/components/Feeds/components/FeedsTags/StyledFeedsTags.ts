import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export const StyledFeedsTags = styled.div`
  flex: 0 0 25%;
  padding-right: 15px;
  padding-left: 15px;
`
export const StyledFeedsTagContent = styled(motion.div)`
  position: relative;
  padding: 5px 10px;
  background-color: #f3f3f3;
  border-radius: 5%;
  overflow: hidden;
  min-height: 100px;
`
export const StyledTagItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`

export const StyledItemTag = styled(motion(Link))`
  padding: 5px 10px;
  background-color: #818a91;
  font-size: ${({theme}) => theme.size.sizeThink};
  color: #fff;
  border-radius: 10px;

  &:hover {
    background-color: #fff;
    color: #818a91;
    transition: background-color, color .3s;
  }
  &[disabled] {
    background-color: #ccc;
    pointer-events: none;
  }
`
