import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  padding-top: 16px;
`;

const CalcPad = styled.button`
  background-color: #fff;
  object-fit: contain;
  font-size: large;
  font-weight: 700;
  box-shadow: -4px -4px 8px #fff, 4px 4px 8px #eee;
  border-radius: 12px;

  &.action-btn {
    color: #fff;
    background-color: #000;
    box-shadow: none;

    &:active {
      background-color: #fff;
      color: #000;
      box-shadow: none;
      .icon {
        filter: brightness(0);
      }
    }
  }

  &:active {
    box-shadow: inset -4px -4px 8px #fff, inset 4px 4px 8px #eee;
  }
`;

const Keyboard: React.FC = () => (
  <Wrapper>
    <CalcPad type="button" className="action-btn">
      C
    </CalcPad>
    <CalcPad type="button" className="action-btn">
      %
    </CalcPad>
    <CalcPad type="button" className="action-btn">
      <span className="icon clear-ico" />
    </CalcPad>
    <CalcPad type="button" className="action-btn">
      ÷
    </CalcPad>
    <CalcPad type="button">7</CalcPad>
    <CalcPad type="button">8</CalcPad>
    <CalcPad type="button">9</CalcPad>
    <CalcPad type="button" className="action-btn">
      <span className="icon multiply-ico" />
    </CalcPad>
    <CalcPad type="button">4</CalcPad>
    <CalcPad type="button">5</CalcPad>
    <CalcPad type="button">6</CalcPad>
    <CalcPad type="button" className="action-btn">
      -
    </CalcPad>
    <CalcPad type="button">1</CalcPad>
    <CalcPad type="button">2</CalcPad>
    <CalcPad type="button">3</CalcPad>
    <CalcPad type="button" className="action-btn">
      +
    </CalcPad>
    <CalcPad type="button">00</CalcPad>
    <CalcPad type="button">0</CalcPad>
    <CalcPad type="button">.</CalcPad>
    <CalcPad type="button" className="action-btn">
      =
    </CalcPad>
  </Wrapper>
);

export default Keyboard;
