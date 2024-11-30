import React, { useContext } from 'react'
import { CartContext } from '../lib/CartContext';
import { CiTrash } from 'react-icons/ci';
import { FaTrashAlt } from 'react-icons/fa';

function PanierPage() {
    const { panier, deleteFromCart } = useContext(CartContext);
    return (
        <div className='w-full flex flex-col items-center'>
            {panier.map((item, index) => (
                <>
                    <div key={index} className='lg:w-full lg:mb-0 mb-2 w-[80%] gap-2 lg:gap-0 lg:h-[40vh] flex lg:flex-row items-center justify-center'>
                        <div className='w-[30%] h-full flex items-center justify-center'>
                            <img src={item.image} alt="" className='object-cover w-[200px] rounded border-yellow-500' />
                        </div>
                        <div className='w-[70%] h-full flex flex-col justify-center space-y-1 lg:space-y-3'>
                            <h1 className='font-bold text-md lg:text-3xl'>{item.name}</h1>
                            <h1 className='font-bold text-md'>Category: <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{item.category}</span></h1>
                            <h1 className='font-bold text-xl text-yellow-400'>${item.price}</h1>
                            <h1 className='font-bold text-md lg:text-xl'>Quantity: {item.quantity}</h1>
                        </div>
                        <div className='w-20 h-[70%] justify-center flex'>
                            <span onClick={() => deleteFromCart(item.id)} class="inline-flex w-10 h-10 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium cursor-pointer text-red-700 ring-1 ring-inset ring-red-600/10"><FaTrashAlt size={25} className='text-red-400 hover:text-red-600 transition-all duration-200 ease-linear font-bold' /></span>
                        </div>
                    </div>
                </>
            ))}
            <div className='flex-col lg:flex-row w-[80%] mb-10 border-t border-gray-400 h-20 flex items-center justify-center lg:justify-end lg:px-5'>
                <h1 className='font-bold text-xl'>Total: ${panier.reduce((total, item) => total + item.price * item.quantity, 0)}</h1>
                <button className='bg-white w-full lg:w-auto text-black hover:bg-yellow-300 transition-all duration-150 ease-in-out ml-5 px-5 py-2 rounded'>Checkout</button>
            </div>

        </div>
    )
}

export default PanierPage