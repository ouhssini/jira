import { Rate } from 'antd';
import { LoaderCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://digitalgifter.store/products.php');
                setProducts(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toProduct = (id) => {
        navigate(`/product/${id}`);
    }
    return (
        <section className='w-full flex flex-col'>
            {loading ? (
                <div className='w-full h-24 flex items-center justify-center'>
                    <LoaderCircle className='animate-spin' size={40} />
                </div>
            ) :
                (
                    <div className='w-full flex flex-wrap justify-center gap-4'>
                        {products.map((product, index) => (
                            <Card
                                key={index}
                                click={() => toProduct(product.id)}
                                image={product.image}
                                title={product.name}
                                price={product.price}
                                reviews={product.rating}
                            />
                        ))}
                    </div>
                )}
        </section>
    )
}

export default Shop