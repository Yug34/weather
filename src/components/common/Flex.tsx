import styled from "styled-components";

type FlexProps = {
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'baseline' | 'center' | 'space-between' | 'space-evenly';
    flexWrap?: 'wrap' | 'wrap-reverse' | 'no-wrap';
    w?: string;
    colGap?: string;
    rowGap?: string;
    color?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  width: ${(props) => props.w ?? "10)%"};
  justify-content: ${(props) => props.justify ?? ''};
  align-items: ${(props) => props.align ?? ''};
  color: ${(props) => props.color || 'inherit'};
  flex-wrap: ${(props) => props.flexWrap || ''};
  column-gap: ${(props) => props.colGap || '0px'};
  row-gap: ${(props) => props.rowGap || '0px'};
`;

export default Flex;