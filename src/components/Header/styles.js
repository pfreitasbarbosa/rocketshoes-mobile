import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #191920;
  padding: 30px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ProductCounter = styled.Text`
  color: #fff;
  position: absolute;
  text-align: center;
  top: -9px;
  right: -9px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  border-radius: 9px;
  font-size: 12px;
  overflow: hidden;
`;
