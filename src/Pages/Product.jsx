import { Rate } from 'antd'
import axios from 'axios'
import { Facebook, LoaderCircle, Twitter } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Reviews from '../Components/Reviews'
import DemiCard from '../Components/DemiCard'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [src, setSrc] = useState()
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://digitalgifter.store/products.php?id=${id}`);
                setProduct(res.data[0]);
                setSrc(res.data[0]?.image || '')

                const allProducts = await axios.get(`https://digitalgifter.store/products.php`)
                const related = allProducts.data.filter(
                    (item) => item.category === res.data[0]?.category && item.id !== res.data[0]?.id
                )
                setRelatedProducts(related)
            } catch (error) {
                console.error("Error fetching product data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleImages = (img) => {
        setSrc(img)
    }

    const reviewsLength = product?.reviews?.length

    return (
        <div className='w-full flex flex-col mt-5 items-center'>
            {loading ? <div className='w-full h-[30vh] flex items-center justify-center'>
                <LoaderCircle size={40} className='animate-spin' />
            </div> :
                <>
                    <div className='w-[80%] bg-neutral-900 rounded-md h-[70vh] flex flex-col lg:flex-row items-center'>
                        <div className='w-full lg:w-[50%] h-full  flex gap-4 flex-col items-center'>
                            <img src={src} className='w-[60%] h-[70%] object-cover rounded' alt="" />
                            <div className='w-full h-16 px-5 flex justify-center items-center gap-4'>
                                <img
                                    src={product?.image}
                                    onClick={() => handleImages(product?.image)}
                                    className={src === product?.image ? 'w-16 h-full border-2 border-white cursor-pointer rounded-xl' : 'w-16 h-full cursor-pointer'}
                                    alt="main product"
                                />                                {
                                    product?.images.map((image, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleImages(image)}
                                            className={src === image ? 'w-16 h-full cursor-pointer rounded-xl' : 'w-16 h-full cursor-pointer'}
                                        >
                                            <img src={image} className={src === image ? 'w-16 h-full border-2 border-white cursor-pointer rounded-xl' : 'w-16 h-full cursor-pointer'} alt={`product image ${index}`} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-full lg:w-[50%] gap-2 h-full flex flex-col p-8'>
                            <h1 className='font-bold text-2xl'>{product?.name}</h1>
                            <div className='w-full h-14 flex items-center gap-5'>
                                <Rate disabled allowHalf value={product?.rating} />
                                <h1 className='text-md'>({reviewsLength} Custommers) </h1>
                            </div>
                            <h1 className='text-2xl font-bold'> ${product?.price}.00 </h1>
                            <p className='w-full h-[10vh] flex items-center'>
                                {product?.description}
                            </p>
                            <div className='w-full h-12 flex items-center gap-5'>
                                <input placeholder='1' min={1} type="number" className='w-[10%] px-1 rounded-md h-full bg-black text-white flex items-center justify-center border' />
                                <button className='w-full h-full bg-white rounded-md text-black flex items-center justify-center'>
                                    Add To Cart
                                </button>
                            </div>
                            <div className='w-full h-[15vh] flex flex-col'>
                                <div className='w-full h-full gap-3 flex items-center'>
                                    <h1 className='font-bold'>Categorie:</h1>
                                    {product.category}
                                </div>
                                <div className='w-full h-full gap-1 flex items-center'>
                                    <h1 className='font-bold'>Tags:</h1>
                                    {product.tags.map(tag => <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                        {tag}
                                    </span>)}
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-3'>
                                <h1 className='font-bold'>Share this product: </h1>
                                <BsTwitterX className='text-white cursor-pointer hover:scale-110 transition-all ease-in-out duration-500' />
                                <FaFacebook className='text-white cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-blue-600' />
                                <FaPinterest className='text-white cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-red-600' />
                                <FaInstagram className='text-white cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-pink-600' />
                            </div>
                        </div>
                    </div>
                    <h1 className='font-bold text-4xl mt-4'>Reviews</h1>
                    <div className='w-[80%] border-t-2 flex items-center justify-center'>
                        <Reviews reviews={product?.reviews} />
                    </div>
                    <h1 className='font-bold text-4xl mt-4'>Related Products</h1>
                    <div className='w-[80%] flex items-center border-y-2 mb-3 justify-evenly p-6'>
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map((item) => (
                                <DemiCard key={item.id} img={item.image} click={() => navigate(`/product/${item.id}`)} title={item.name} category={item.category} price={item.price} rating={item.rating} />
                            ))
                        ) : (
                            <p>No related products found.</p>
                        )}

                    </div>
                </>
            }

        </div>
    )
}

export default Product