import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
    quantity: ""
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Edit Product</div>

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={handleChange}
                      value={product.productName}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={handleChange}
                      value={product.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={handleChange}
                      value={product.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={handleChange}
                      value={product.status}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="form-control"
                      onChange={handleChange}
                      value={product.quantity}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
