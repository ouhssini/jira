import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import { CircleDashed, DollarSign, LoaderCircle, Search } from 'lucide-react';
import { Checkbox } from 'antd';
import Card from '../Components/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [more, setMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const limitedProducts = products.slice(0, 8);
    const [search, setSearch] = useState('');
    const toProduct = (id) => {
        navigate(/product/${id});
    };

    

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

    return (
        <section className="w-full flex flex-col">
            <Hero />
            <main className="w-full flex">
                <aside className="hidden lg:w-[25%] lg:p-8 lg:flex lg:flex-col">
                    <h1 className="font-bold text-md mb-2">Categories</h1>
                    <ul className="w-full flex flex-col border-b">
                        {['PC Gamer', 'Laptop', 'Phone', 'Accessories', 'Audio Devices', 'Components'].map((category) => (
                            <Tabs key={category}>{category}</Tabs>
                        ))}
                    </ul>
                    {/* Filters */}
                </aside>
                {loading ? (
                    <div className='w-full h-[40vh] flex items-center justify-center'>
                        <LoaderCircle className='animate-spin' size={40} />
                    </div>
                    
                ) : (
                    <div className="w-full flex flex-col">
                        <div className="w-full px-2 h-20 flex items-center lg:px-10">
                            <div className="w-[30%] lg:w-[50%] h-full flex items-center gap-4">
                                <h1 className='font-bold'>Alphabets</h1>
                            </div>
                            <div className="w-full px-2 lg:px-0 lg:w-[50%] h-full flex justify-end items-center gap-4">
                                    <div className='w-[40%] flex items-center h-10 border-b'>
                                            <Search size={20} className='text-white'/>
                                            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search' className='w-full px-2 h-full bg-transparent outline-none border-none text-white' />
                                    </div>
                                    {products.length} Product
                            </div>
                        </div>
                        <div className="w-full items-center justify-center lg:items-start lg:justify-start flex flex-wrap gap-8 bg-neutral-900 rounded-md p-5">
                            {(more ? products : limitedProducts).map((product, index) => (
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
                        {!more && (
                            <div className='w-full h-16 flex items-center justify-center'>
                                <button className="bg-black w-[40%] text-white px-4 py-2 rounded-md border" onClick={() => setMore(true)}>
                                    Show More
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </section>
    );
}

export default HomePage;

const Tabs = ({ children }) => {
    return (
        <li className="flex h-10 items-center gap-3 text-xs">
            <button className="bg-transparent text-left w-full">{children}</button>
        </li>
    );
};