/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useEffect } from "react";
import loadCartoon from "../api-services/cartoon";
import Layout from "../layout/default";
import Router from "next/router";
import { NextPageWithLayout } from "./_app";

type cartoonType = {
  title: string;
  year: number;
  creator: string[];
  rating: string;
  genre: string[];
  runtime_in_minutes: number;
  episodes: number;
  image: string;
  id: number;
};

const Home: NextPageWithLayout = ({
  listCartoon,
}: {
  listCartoon: cartoonType[];
}) => {
  useEffect(() => {
    if (!window.localStorage.getItem("userId")) {
      Router.push("/login");
    }
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-3 py-12">
      {listCartoon.map((item: cartoonType) => (
        <div key={item.id} className="w-[320px] h-[600px] m-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-[400px] object-cover"
              src={item.image}
              alt="Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">
                {item.episodes} Episodes
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.genre.map((g, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const listCartoon: cartoonType[] = await loadCartoon();
  return {
    props: {
      listCartoon,
    },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout tabActive="List Cartoon">{page}</Layout>;
};

export default Home;
