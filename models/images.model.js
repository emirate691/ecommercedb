const db = require("./db.js");

const Image = function (images) {
  this.image = images.image;
  this.product_id = images.product_id;
};

// Add images to product gallery
Gallery.create = (newImage, result) => {
  let sql = `INSERT INTO images SET ?`;
  db.query(sql, newImage, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { result: res });
  });
};

module.exports = Image;
