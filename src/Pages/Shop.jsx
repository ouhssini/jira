import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { LoaderCircleIcon } from "lucide-react";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [more, setMore] = useState(false);
  const limitedProducts = products.slice(0, 8);
  const [loading, setLoading] = useState(true);

  const toProduct = (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    try {
      axios.get("https://digitalgifter.store/products.php").then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  return loading ? (
    <div className="w-full h-[40vh] flex items-center justify-center">
      <LoaderCircleIcon className="animate-spin" size={40} />
    </div>
  ) : (
    <div>
      <div className="w-full flex flex-wrap gap-8 bg-neutral-700  p-5 justify-center">
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
        <div className="w-full h-16 flex items-center justify-center">
          <button
            className="bg-black w-[40%] text-white px-4 py-2 rounded-md border"
            onClick={() => setMore(true)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
