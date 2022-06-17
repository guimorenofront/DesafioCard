import './App.css';
import ProductBuyButton from './components/ProductBuyButton/BuyButton';
import ProductCardContainer from './components/ProductCardContainer/ProductCardContainer';
import ProductName from './components/ProductName/ProductName';
import img from './image.png'
import ProductPrice from './components/ProductPrice/ProductPrice';
import WishList from './components/wishList/wishLis';



function App() {
  return (
    <div className="App">
      {
        require('./database/products.json').map((e) => {
          return (
            <ProductCardContainer>
              <WishList id={e.ProductId}/>
              <img src={img} alt={e.productName}/>
              <ProductName title={e.productName} />
              <ProductPrice FullPrice={e.productPrice.FullPrice} Price={e.productPrice.Selling} />
              <ProductBuyButton id={e.ProductId} />
            </ProductCardContainer>
          );
        })
      }
    </div>
  );
}

export default App;
