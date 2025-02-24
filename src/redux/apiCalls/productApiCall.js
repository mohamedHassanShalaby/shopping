import { productAction } from "../slices/productSlice";

// fetch product
export function fetchProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch(productAction.setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// get product by id
export function getProductById(productId) {
  return async (dispatch) => {
    try {
      dispatch(productAction.setLoading());
      const response = await fetch(
        `http://localhost:5000/products/${productId}`
      );
      const data = await response.json();
      dispatch(productAction.setProduct(data));
      dispatch(productAction.clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(productAction.clearLoading());
    }
  };
}
