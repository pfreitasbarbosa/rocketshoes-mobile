import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import {
  Container,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ButtonContainer,
  QuantityInCart,
  ButtonContainerText,
  ProductList,
  IconCartContainer,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((quantity, product) => {
      quantity[product.id] = product.amount;

      return quantity;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <ProductContainer>
            <ProductImage source={{ uri: item.image }} />
            <ProductDescription>{item.title}</ProductDescription>
            <ProductPrice>{item.formattedPrice}</ProductPrice>
            <ButtonContainer onPress={() => handleAddProduct(item.id)}>
              <IconCartContainer>
                <Icon name="add-shopping-cart" size={24} color="#fff" />
                <QuantityInCart>{amount[item.id] || 0}</QuantityInCart>
              </IconCartContainer>
              <ButtonContainerText>Adicionar</ButtonContainerText>
            </ButtonContainer>
          </ProductContainer>
        )}
      />
    </Container>
  );
}
