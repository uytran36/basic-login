import { getAllBeers } from "@/api-services/beers";
import useHeaders from "@/hooks/useHeaders";
import Layout from "@/layout/default";
import { beerType } from "@/types/beerTypes";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { updateCart } from "@/api-services/carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Beers: NextPageWithLayout = () => {
  const [beers, setBeers] = useState<beerType[]>([]);
  const [pageSize, setPageSize] = useState(24);
  const [offset, setOffset] = useState(0);
  const [totalBeers, setTotalBeers] = useState(0);
  const [jump, setJump] = useState(0);

  const headers = useHeaders();
  const notify = () => toast("Added successfully!", { type: "success", autoClose: 1000 });

  useEffect(() => {
    const fetchBeers = async () => {
      const res = await getAllBeers(headers, {
        pageSize,
        offset,
      });
      if (res.status === 200) {
        setBeers(res.data.data);
        setTotalBeers(res.data.total);
      }
    };
    fetchBeers();
  }, [headers, offset, pageSize]);

  const handleClickPrev = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const handleClickNext = () => {
    if (offset < totalBeers / pageSize - 1) {
      setOffset(offset + 1);
    }
  };

  const handleChangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.target.value));
    setOffset(0);
  };

  const handleClickAdd = async (id: number) => {
    const cartId = localStorage.getItem("cartId");
    const item = {
      beerId: id,
      quantity: 1,
    };

    const res = await updateCart(headers, cartId, item);
    if (res.status === 200) {
      notify();
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-y-6 py-12">
        {beers.map((beer) => (
          <div key={beer.id} className="m-auto">
            <div className="flex w-[450px] h-[252px] bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 p-6">
              <Image
                src={beer.image}
                alt="picture"
                blurDataURL="data:..."
                placeholder="blur"
                width={142}
                height={200}
              />
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {beer.name}
                </h1>

                <div>
                  <div className="flex item-center mt-2">
                    {[0, 1, 2, 3, 4].map((item, i) => {
                      if (item <= beer.rating) {
                        return (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-current text-gray-700"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        );
                      }
                      return (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current text-gray-300"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      );
                    })}
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                      ${beer.price}
                    </h1>
                    <button
                      className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                      onClick={() => handleClickAdd(beer.id)}
                    >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <div
            onClick={handleClickPrev}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            Previous
          </div>
          <div
            onClick={handleClickNext}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            Next
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{offset * 12 + 1}</span> to{" "}
              <span className="font-medium">{(offset + 1) * 12}</span> of{" "}
              <span className="font-medium">{totalBeers}</span> results
            </p>
          </div>
          <div className="flex">
            <div className="w-[50px] m-auto">Go to:</div>
            <input
              type="number"
              min={0}
              max={parseInt((totalBeers / pageSize).toString()) + 1}
              onChange={(e: React.BaseSyntheticEvent) => {
                setJump(e.target.value);
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter") {
                  if (jump > 0 && jump <= totalBeers / pageSize + 1) {
                    setOffset(jump - 1);
                  }
                }
              }}
              className="block w-24 rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <div
                onClick={handleClickPrev}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <>
                <div
                  aria-current="page"
                  onClick={() => setOffset(0)}
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer ${
                    offset === 0
                      ? " bg-indigo-600 focus-visible:outline-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      : " text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  }`}
                >
                  1
                </div>
                <div
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer ${
                    offset === 1
                      ? " bg-indigo-600 focus-visible:outline-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      : " text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  }`}
                >
                  {offset === 1 ? "2" : "..."}
                </div>
                {offset === 1 && (
                  <>
                    <div className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex cursor-pointer">
                      ...
                    </div>
                  </>
                )}
                {offset > 1 && offset < totalBeers / pageSize - 2 && (
                  <>
                    <div className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer bg-indigo-600 focus-visible:outline-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                      {offset + 1}
                    </div>
                    <div className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex cursor-pointer">
                      {offset === totalBeers / pageSize - 2
                        ? parseInt((totalBeers / pageSize).toString()) - 1
                        : "..."}
                    </div>
                  </>
                )}
                {offset ===
                  parseInt((totalBeers / pageSize - 1).toString()) && (
                  <div
                    aria-current="page"
                    onClick={() => setOffset(0)}
                    className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer bg-indigo-600 focus-visible:outline-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                  >
                    {offset + 1}
                  </div>
                )}
                <div
                  onClick={() =>
                    setOffset(parseInt((totalBeers / pageSize).toString()))
                  }
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer ${
                    offset === parseInt((totalBeers / pageSize).toString())
                      ? " bg-indigo-600 focus-visible:outline-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      : " text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  }`}
                >
                  {parseInt((totalBeers / pageSize).toString()) + 1}
                </div>
              </>

              <div
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                onClick={handleClickNext}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="px-4">
                <select
                  id="pageSize"
                  name="pageSize"
                  autoComplete="pageSize"
                  onChange={handleChangePageSize}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>12 / page</option>
                  <option>24 / page</option>
                  <option>36 / page</option>
                </select>
              </div>
            </nav>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

Beers.getLayout = function getLayout(page: ReactElement) {
  return <Layout tabActive="List Beers">{page}</Layout>;
};
export default Beers;
