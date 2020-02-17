import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 50px 10px;
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  width: 250px;
  height: 250px;
`;

export const ProductDescription = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ButtonContainer = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-radius: 4px;
  margin-top: auto;
`;

export const QuantityInCart = styled.Text`
  margin-left: 8px;
  color: #fff;
`;

export const ButtonContainerText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const IconCartContainer = styled.View`
  height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${darken(0.01, '#7159c1')};
`;
