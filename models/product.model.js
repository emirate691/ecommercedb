const sql = require("./db.js");

// constructor

const product = function (product) {
  (this.name = product.name),
    (this.price = product.price),
    (this.weight = product.weight),
    (this.detail = product.detal),
    (this.productUpdate = product.productUpdate);
  this.image = product.image;
};

product.create = (newProduct, result) => {
  sql.query("INSERT INTO  products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created product: ", { id: res.insertId, ...newProduct });
  });
};

product.findById = (productId, result) => {
  sql.query(`SELECT * FROM product WHERE id = $ {productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found product with the id
    result({ kind: "not_ found" }, null);
  });
};

product.getAll = (result) => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("products: ", res);
    result(null, res);
  });
};

product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE products SET name = ?, price = ?, weight = ?, detail = ?, productUpdate = ?, image = ?",
    [
      product.name,
      product.price,
      product.weight,
      product.detail,
      product.productUpdate,
      product.image,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("updated customer: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

product.remove = (id, result) => {
  sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found customer with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted product withid: ", id);
    result(null, res);
  });
};

module.exports = product;
