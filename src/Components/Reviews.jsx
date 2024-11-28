import React from 'react'
import Marquee from "./ui/marquee";
import { cn } from "../lib/utils";
import { Rate } from 'antd';


const ReviewCard = ({
    name,
    rating,
    comment
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // Black-themed styles
                "border-white bg-black/80 text-white hover:bg-black/90",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                    <figcaption className="text-sm flex items-center gap-3 font-medium">
                        {name}
                        <Rate allowHalf className='text-sm' disabled value={rating} />
                    </figcaption>
                    <p className="text-xs font-medium text-gray-400">{name}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-300">{comment}</blockquote>
        </figure>
    );
};


function Reviews({ reviews = [] }) {
    console.log(reviews);
    return (
        <div className="relative flex h-[200px] lg:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
            <Marquee reverse pauseOnHover className="[--duration:20s] ">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
    );
}



export default Reviews