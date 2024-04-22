import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const ProductDetails = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        const updatedProducts = res.data.map((product) => {
          if (product.quantity === 0) {
            product.status = 'SOLD';
          }
          return product;
        });
        setProductList(updatedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Delete Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Product List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{'\u20B9'}{p.price}</td>
                        <td>{p.quantity}</td>
                        <td className={p.status === 'SOLD' ? 'text-danger' : 'text-success'}>
                          {p.status}
                        </td>
                        <td>
                          <Link to={'editProduct/' + p.id} className="btn btn-sm btn-primary">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
