module.exports = (app) => {
  const product = require("../controllers/product.controller.js");
  const images = require("../controllers/images.controller.js");

  // Add a Product
  app.post("/products", product.create);

  //Retrive all Product
  app.get("/products", product.findAll);

  // Retrieve one products
  app.get("/products/:productId", product.findOne);

  // Edit Product
  app.put("/products/:productId", product.update);

  // Delete Product
  app.delete("/products/:productId", product.delete);

  // Add image to gallery
  app.post("/images", gallery.create);

  // update thumbnail
  app.put("/image/:productId", product.createImage);
};
