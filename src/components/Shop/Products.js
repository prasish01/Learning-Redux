import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6.99,
    title: "My First Product",
    description: "This is my first product - amazing!",
  },
  {
    id: "p2",
    price: 7.99,
    title: "My second Product",
    description: "This is my second product - amazing!",
  },
  {
    id: "p3",
    price: 8.99,
    title: "My third Product",
    description: "This is my third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
