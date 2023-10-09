import "/style.css";
import HomePage from './src/pages/HomePage'
import ProductsPage from "./src/pages/ProductsPage";
import DetailPage from "./src/pages/DetailPage";

import Navigo from "navigo";

const render = async (target, content) => {
  target.innerHTML = await content();
}

const router = new Navigo("/", { linksSelector: "a" }); 
router.on("/home", () => render(app, HomePage));
router.on("/", () => render(app, router.navigate("/home")));
router.on("/products", () => render(app, ProductsPage));
// router.on("/products:id", ({ data }) => render(() => DetailPage(data), app));
router.on("/products/:id", ({ data }) => {
  const productId = data.id;  
  render(app, () => DetailPage(productId));a
});

router.resolve();   