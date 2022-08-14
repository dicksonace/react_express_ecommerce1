let DUMMY_ITEMS = [];

const getItems = (req, res, next) => {
  res.json({ product: DUMMY_ITEMS });
};

const AddNewItem = (req, res, next) => {
  const { productname, productprice, productdescription, productthumbnail } =
    req.body;

  const createProduct = {
    id: Math.random().toString(),
    productname,
    productprice,
    productdescription,
    productthumbnail,
  };

  DUMMY_ITEMS.push(createProduct);

  res.json({ createProduct });
};

exports.getItems = getItems;
exports.AddNewItem = AddNewItem;
