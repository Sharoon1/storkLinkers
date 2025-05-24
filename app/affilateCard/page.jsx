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
              className="mx-auto mb-4"
              src="/61nGzDLKj-L._AC_SX569_.jpg"
              width={100}
              height={100}
              priority
              alt="road"
            />
            <h2 className="text-2xl font-bold underline">
              Ugly Stik GX2 Does-it-all rod
            </h2>
            <p className="text-xs font-sans my-4">
              This rod is known for its strength, durability, and versatility.
              It’s strong enough to handle salmon and other saltwater fish, but
              sensitive enough for trout.
            </p>
            <h3 className="text-lg font-bold">Buying Options</h3>
            <h3 className="text-lg font-bold text-red-700 underline ">
              $40 from Amazon
            </h3>
          </div>
          <div className="bg-white p-10">
            <Image
              className="mx-auto mb-4"
              src="/61nGzDLKj-L._AC_SX569_.jpg"
              width={100}
              height={100}
              priority
              alt="road"
            />
            <h2 className="text-2xl font-bold underline">
              Ugly Stik GX2 Does-it-all rod
            </h2>
            <p className="text-xs my-4 font-sans">
              This rod is known for its strength, durability, and versatility.
              It’s strong enough to handle salmon and other saltwater fish, but
              sensitive enough for trout.
            </p>
            <h3 className="text-lg font-bold">Buying Options</h3>
            <h3 className="text-lg font-bold text-red-700 underline ">
              $40 from Amazon
            </h3>
          </div>

          <div className="bg-white p-10">
            <Image
              className="mx-auto mb-4"
              src="/61nGzDLKj-L._AC_SX569_.jpg"
              width={100}
              height={100}
              priority
              alt="road"
            />
            <h2 className="text-2xl font-bold underline">
              Ugly Stik GX2 Does-it-all rod
            </h2>
            <p className="text-xs my-4 font-sans">
              This rod is known for its strength, durability, and versatility.
              It’s strong enough to handle salmon and other saltwater fish, but
              sensitive enough for trout.
            </p>
            <h3 className="text-lg font-bold">Buying Options</h3>
            <h3 className="text-lg font-bold text-red-700 underline ">
              $40 from Amazon
            </h3>
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
                src="/61SkBecPidL._AC_SX569_.jpg"
                width={200}
                height={200}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold underline">Ugly Stik GX2</h3>
              <h3 className="text-lg">Does-it-all rod</h3>
              <p className="text-sm">
                This rod is known for its strength, durability, and versatility.
                It’s strong enough to handle salmon and other saltwater fish,
                but sensitive enough for trout.
              </p>
              <button className="p-2 rounded-lg text-white bg-black px-8">
                From Amazon
              </button>
            </div>
          </div>
          <div>
            <div className="border-t-2 p-10 grid grid-cols-2">
              <div className="w-full flex justify-center">
                <Image
                  alt="rod"
                  src="/61SkBecPidL._AC_SX569_.jpg"
                  width={200}
                  height={200}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold underline">Ugly Stik GX2</h3>
                <h3 className="text-lg">Does-it-all rod</h3>
                <p className="text-sm">
                  This rod is known for its strength, durability, and
                  versatility. It’s strong enough to handle salmon and other
                  saltwater fish, but sensitive enough for trout.
                </p>
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
