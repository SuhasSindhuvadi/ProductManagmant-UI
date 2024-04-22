import React from "react";
import { useForm } from "react-hook-form";
import productService from "../service/product.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    productService
      .saveProduct(data)
      .then(() => {
        toast.success("Product Added Successfully");
        reset();
      })
      .catch((error) => {
        toast.error("Error adding product");
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              <ToastContainer />
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      {...register("productName", { required: "Product Name is required" })}
                    />
                    {errors.productName && <p className="text-danger">{errors.productName.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      {...register("description", { required: "Description is required" })}
                    />
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      {...register("price", { required: "Price is required" })}
                    />
                    {errors.price && <p className="text-danger">{errors.price.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label>Enter Total Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      {...register("quantity", { required: "Quantity is required" })}
                    />
                    {errors.quantity && <p className="text-danger">{errors.quantity.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      {...register("status", { required: "Status is required" })}
                    />
                    {errors.status && <p className="text-danger">{errors.status.message}</p>}
                  </div>

                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
