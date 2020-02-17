import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import {
  Container,
  ProductList,
  ProductContainer,
  ProductImage,
  ProductInfoContainer,
  ProductTitle,
  ProductPrice,
  ProductPriceBar,
  QuantityContainer,
  DecreaseButton,
  ProductQuantity,
  IncreaseButton,
  SubTotal,
  ProductInfoWrapper,
  DeleteContainer,
  TotalContainer,
  TotalText,
  TotalPrice,
  CompleteOrderButton,
  CompleteOrderButtonText,
  DisplayWrapper,
  EmptyCart,
  EmptyCartText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sum, product) => {
        return sum + product.amount * product.price;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <DisplayWrapper>
        {cart.length > 0 ? (
          <ProductList
            data={cart}
            keyExtractor={product => String(product.id)}
            ListFooterComponent={
              <TotalContainer>
                <TotalText>Total</TotalText>
                <TotalPrice>{total}</TotalPrice>
                <CompleteOrderButton>
                  <CompleteOrderButtonText>
                    Finalizar pedido
                  </CompleteOrderButtonText>
                </CompleteOrderButton>
              </TotalContainer>
            }
            renderItem={({ item }) => (
              <ProductContainer>
                <ProductInfoWrapper>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductInfoContainer>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.formattedPrice}</ProductPrice>
                  </ProductInfoContainer>
                  <DeleteContainer
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  >
                    <Icon name="delete-forever" size={32} color="#7159c1" />
                  </DeleteContainer>
                </ProductInfoWrapper>
                <ProductPriceBar>
                  <QuantityContainer>
                    <DecreaseButton
                      onPress={() =>
                        dispatch(
                          CartActions.updateAmountRequest(
                            item.id,
                            item.amount - 1
                          )
                        )
                      }
                    >
                      <Icon
                        name="minus-circle-outline"
                        size={24}
                        color="#7159c1"
                      />
                    </DecreaseButton>
                    <ProductQuantity
                      placeholder={String(item.amount)}
                      editable={false}
                    />
                    <IncreaseButton
                      onPress={() =>
                        dispatch(
                          CartActions.updateAmountRequest(
                            item.id,
                            item.amount + 1
                          )
                        )
                      }
                    >
                      <Icon
                        name="plus-circle-outline"
                        size={24}
                        color="#7159c1"
                      />
                    </IncreaseButton>
                  </QuantityContainer>
                  <SubTotal>{item.subTotal}</SubTotal>
                </ProductPriceBar>
              </ProductContainer>
            )}
          />
        ) : (
          <EmptyCart>
            <Icon name="cart-off" size={72} color="#eee" />
            <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
          </EmptyCart>
        )}
      </DisplayWrapper>
    </Container>
  );
}
