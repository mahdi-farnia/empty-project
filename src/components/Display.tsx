import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: inset 4px 4px 15px #eee, inset -4px -4px 15px #fff;
`;

const CalcInput = styled.ul`
  width: 100%;
  font-weight: 700;
  font-size: x-large;
  position: absolute;
  bottom: 0;
  left: 0;
  direction: rtl;
  padding: 20px;
`;

const CalcHistory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  direction: rtl;
  padding: 20px 20px 60px;

  & > li {
    direction: ltr;
    opacity: 0.5;
  }
`;

const Display: React.FC = () => {
  return (
    <Wrapper>
      <CalcHistory>
        <li>130 X 5</li>
      </CalcHistory>
      <CalcInput>650</CalcInput>
    </Wrapper>
  );
};

export default Display;
