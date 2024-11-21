import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import { DollarSign, Search } from 'lucide-react'
import { Checkbox, Select } from "antd";
import Card from '../Components/Card';
import axios from 'axios';
function HomePage() {
    const [produts, setProducts] = useState([])
    const [productInfo, setProductInfo] = useState({})

    const alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
    const toProduct = (id) => { window.location.href = `/product/${id}` }
    useEffect(() => {
        axios.get("https://products-api-lilac.vercel.app/api/products").then(res => setProducts(res.data))
    })

    return (
        <section className='w-full flex flex-col'>
            <Hero />
            <main className='w-full flex'>
                <aside className='w-[25%] p-8 flex flex-col'>
                    <h1 className='font-bold text-md mb-2'>Categories</h1>
                    <ul className='w-full flex flex-col border-b'>
                        <Tabs>PC Gamer</Tabs>
                        <Tabs>Laptop</Tabs>
                        <Tabs>Phone</Tabs>
                        <Tabs>Accessories</Tabs>
                        <Tabs>Audio Devices</Tabs>
                        <Tabs>Components</Tabs>
                    </ul>
                    <div className='w-full mt-2 flex flex-col'>
                        <h1 className='font-bold text-md mb-2'>Filter By</h1>
                        <Tabs>Price</Tabs>
                        <div className='w-full h-16 flex items-center gap-4'>
                            <div className='w-[40%] h-[70%] flex items-center border-2 rounded-md px-4'>
                                <input type="text" className='w-full h-full bg-transparent outline-none' />
                                <DollarSign />
                            </div>
                            <div className='w-[40%] h-[70%] flex items-center border-2 rounded-md px-4'>
                                <input type="text" className='w-full h-full bg-transparent outline-none' />
                                <DollarSign />
                            </div>
                        </div>
                        <h1 className='font-bold text-md mb-2'>Filter By</h1>
                        <Tabs><Checkbox style={{ background: 'transparent' }} /> Hp</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Acer</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Dell</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Asus</Tabs>
                        <h1 className='font-bold text-md mb-2 mt-2'>Colors</h1>
                        <Tabs><Checkbox className='bg-transparent' /> Black</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Green</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> White</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Blue</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Yellow</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Brown</Tabs>
                        <Tabs><Checkbox className='bg-transparent' /> Gray</Tabs>
                    </div>
                </aside>
                <div className='w-full flex flex-col'>
                    <div className='w-full h-20 flex items-center px-10'>
                        <div className='w-full h-full flex items-center'><h1 className='font-bold text-xl'>Alphabeticaly/ </h1>
                            <select className='bg-black outline-none'>
                                <option value="" className='text-white'>A-Z</option>
                                {alphabets.map((alphabet, index) => (
                                    <option key={index}>{alphabet}</option>
                                ))}
                            </select></div>
                        <div className='w-full gap-3 h-full flex items-center justify-end px-4'>
                            <div className='w-[30%] h-10 border-b flex items-center px-2'>
                                <Search size={20} className='text-white' />
                                <input type="text" className='w-full px-3 h-full bg-transparent outline-none' />
                            </div>
                            <h1 className='font-bold text-lg'>{produts.length} Products </h1>
                        </div>
                    </div>
                    <div className='w-full flex items-center flex-wrap justify-center gap-4 p-5'>
                        {produts.map((product, index) => (
                            <Card click={() => toProduct(product.id)} key={index} image={product.image} title={product.name} price={product.price} />
                        ))}
                    </div>
                </div>

            </main>
        </section>
    )
}

export default HomePage


const Tabs = ({ children }) => {
    return (
        <li className='flex h-10 items-center gap-3 text-xs'>
            {children}
        </li>
    )
}