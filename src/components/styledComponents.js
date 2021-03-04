import styled from 'styled-components'

export const StyledCard = styled.div`
  background: ${(props) => props.background};
  border-radius: 10px;
  box-shadow: 8px 10px 14px 2px rgba(221,226,229,1);
  padding: 5%;
  width: 25%;
  margin: 2%;
  border-top: ${(props) => props.border};
`

export const Title = styled.p`
  color: rgb(186,195,208);
  font-weight: bold;
  margin-bottom: 0;
  font-size: ${(props) => props.fontSize || '1em'};
`

export const Info = styled.div`
  color: rgb(118,129,145);
  font-size: ${(props) => props.fontSize || '1.2em'};
  margin-bottom: ${(props) => props.margin || '12px'};
  &:hover {
    color: ${(props) => props.hoverColor || 'rgb(118,129,145)'};
  }
`
