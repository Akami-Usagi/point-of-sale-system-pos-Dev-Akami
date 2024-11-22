import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AddProductForm = () => {




    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        stock: 0,
        price: 0,
        category_id: undefined
    });

    const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://akemi-backend.test/api/products', formData);
            alert('Datos enviados con éxito: ' + response.data.message);
            navigate("/tester")
        } catch (error) {
            console.error('Error al enviar los datos', error.response?.data);
            alert('Ocurrió un error al enviar los datos.');
        }
    };

    console.log(formData);
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>precio:</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>categoria:</label>
                <select name="category_id"
                        value={formData.category}
                        onChange={handleChange}
                        required>
                    <option value={undefined}>Seleccione</option>
                {categories.map((category) => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AddProductForm;
