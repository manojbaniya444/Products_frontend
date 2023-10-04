// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [featuredProducts, setFeaturedProduct] = useState(null);

//   // Fetch all featured products
//   useEffect(() => {
//     const fetchFeaturedProduct = async () => {
//       const response = await axios.get("http://localhost:8080/api/v1/products");

//       if (response.status === 200) {
//         setFeaturedProduct(response.data);
//       }
//     };
//     try {
//       fetchFeaturedProduct();
//     } catch (error) {
//       console.log("fetching featured product error", error);
//     }
//   }, []);

//   return (
//     <ProductContext.Provider value={{ featuredProducts }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// const useProductContext = () => {
//   return useContext(ProductContext);
// };

// export { ProductProvider, useProductContext };
