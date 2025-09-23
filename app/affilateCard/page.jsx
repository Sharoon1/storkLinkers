import React from "react";
import Image from "next/image";
function AffilateCards() {
  return (
    <div>
      <div>
        <h2 className="border-t-4 mb-10 border-black font-extrabold text-3xl ">
          Everything we recommend
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-10">
            <Image
              className="mx-auto rounded-2xl mb-4"
              src="/children_in_grass.jpg"
              width={300}
              height={200}
              priority
              alt="road"
            />
            <h2 className="text-2xl font-bold underline">... </h2>
            <p className="text-xs font-sans my-4">...</p>
            <h3 className="text-lg font-bold">Buying Options</h3>
            <h3 className="text-lg font-bold text-red-700 underline ">... </h3>
          </div>
          <div className="bg-white p-10">
            <Image
              className="mx-auto rounded-2xl mb-4"
              src="/home_garden.jpg"
              width={300}
              height={200}
              priority
              alt="road"
            />
            <h2 className="text-2xl font-bold underline">... </h2>
            <p className="text-xs my-4 font-sans">...</p>
            <h3 className="text-lg font-bold">Buying Options</h3>
            <h3 className="text-lg font-bold text-red-700 underline ">... </h3>
          </div>

          <div className="bg-white p-10">
            <Image
              className="mx-auto mb-4 rounded-2xl"
              src="/dog_grass.jpg"
              width={300}
              height={200}
              priority
              alt="road"
            />
            <h2 className="text-2xl font-bold underline">... </h2>
            <p className="text-xs my-4 font-sans">....</p>
            <h3 className="text-lg font-bold">Buying Options</h3>
            <h3 className="text-lg font-bold text-red-700 underline ">... </h3>
          </div>
        </div>
      </div>

      <div className="my-4 cards">
        <fieldset className="border-4 border-green-600  bg-white ">
          <legend className="bg-green-800 p-3 -ml-4 shadow-md shadow-green-300 text-white rounded-xl">
            Top Pick
          </legend>
          <div className=" p-10 grid grid-cols-2">
            <div className="w-full flex justify-center">
              <Image
                alt="rod"
                src="/grass_in_room.jpg"
                width={400}
                height={400}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold underline">...</h3>
              <h3 className="text-lg">Does-it-all rod</h3>
              <p className="text-sm">....</p>
              <button className="p-2 rounded-lg text-white bg-black px-8">
                From Amazon
              </button>
            </div>
          </div>
          <div>
            <div className="border-t-2 p-10 grid grid-cols-2">
              <div className="w-full flex justify-center">
                <Image alt="rod" src="/garden.jpg" width={400} height={400} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold underline">...</h3>
                <h3 className="text-lg">...</h3>
                <p className="text-sm">...</p>
                <button className="p-2 rounded-lg text-white bg-black px-8">
                  From Amazon
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default AffilateCards;
