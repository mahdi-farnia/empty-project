import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px 0;
`;

const SwitchButton = styled.button`
  background-color: #fff;
  border-radius: 20px;
  margin-right: 20px;
  padding: 5px 10px;
  box-shadow: -4px -4px 8px 0 #fff, 2px 2px 8px #e0e0e0;

  &.active {
    box-shadow: inset -4px -4px 8px 0 #fff, inset 2px 2px 8px #e0e0e0;
  }
`;

const Switch: React.FC = () => (
  <Wrapper>
    <SwitchButton className="active">Calculator</SwitchButton>
    <SwitchButton>Exchange</SwitchButton>
  </Wrapper>
);

export default Switch;
