import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ProductListItem from '../catalog/ProductListItem';

class ProductList extends React.Component {
  renderChild = (product) => {
    return <ProductListItem product={product.item} navigate={this.props.navigate} setCurrentProduct={this.props.setCurrentProduct} />
  }

  renderContent = () => {
    const { products } = this.props;

    if (products.length) {
      return (
        <View style={{}}>
          <FlatList
            data={products}
            renderItem={this.renderChild}
            keyExtractor={(item, index) => item.id}
            numColumns={2}
          />
        </View>

      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    )
  }
}

export default ProductList;
