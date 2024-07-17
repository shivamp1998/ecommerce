import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, deleteProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editProduct(editedProduct));
        setIsEditing(false);
        showAlert('success', 'Product updated successfully!');
    };

    const handleDelete = () => {
        dispatch(deleteProduct(product.id));
        showAlert('success', 'Product deleted successfully!');
    };

    const handleChange = (e) => {
        setEditedProduct({
            ...editedProduct,
            [e.target.name]: e.target.value,
        });
    };

    const showAlert = (type, message) => {
        const alert = document.createElement('div');
        alert.className = `alert ${type}`;
        alert.textContent = message;
        document.body.appendChild(alert);
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
            document.body.removeChild(alert);
        }, 3000);
    };

    return (
        <div className="product">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                    <input
                        type="text"
                        name="description"
                        value={editedProduct.description}
                        onChange={handleChange}
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleChange}
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="rating"
                        value={editedProduct.rating}
                        onChange={handleChange}
                        className="form-control"
                    />
                    <div className="edit-buttons">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <div className="edit-buttons">
                        <button onClick={handleEdit}><i className="fas fa-pencil-alt"></i></button>
                        <button onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            )}
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
};

export default Product;
