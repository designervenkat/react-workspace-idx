import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import Skeleton from "./components/Skeleton";

export default function App() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // await new Promise(resolve => setTimeout(resolve, 5000))
      try {
        const response = await axios("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setProductData(response.data);
          toast.success("Successfully Fetch Products!");
        } else {
          toast.error("Failed to Fetch Products!");
        }
      } catch (error) {
        toast.error("Something wrong with server!");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="grid content-start justify-center h-screen my-10 mx-auto  w-screen">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {isLoading ? (
            <>
            {productData.map((product) => (
            <Skeleton />
            ))}
            </>
          ) : (
            <>
            {productData.map((product) => (
              <div className="overflow-hidden bg-white rounded shadow" key={product.id}>
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-contain w-full h-60 "
                      src={product.image}
                      alt={product.title}
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  ${product.price}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black truncate">                    
                    {product.title}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600 line-clamp-3">
                  {product.description}
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Add to Cart
                 
                </a>
              </div>
            </div>
            ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
