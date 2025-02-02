import Image from "next/image";
import React from "react";

const MediaSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="lg:order-2 md:order-2 order-1">
          <div className="flex justify-center border-8 rounded border-white shadow-xl shadow-gray-400  space-x-10  ">
            <Image
              alt="image"
              src={"/content-img.jpg"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>

        <div className="space-y-6 order-2 md:order-1 lg:order-1 ">
          <div>
            <h2 className="text-sm text-blue-600 font-semibold mb-2">
              ContentShark AI
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Struggling to come up with the perfect quote or caption?
            </h1>
            <p className="text-gray-600">
              With ContentShark AI, we make content creation a breeze! Our AI
              generates personalized social media captions and quotes in
              seconds. 🚀
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Satisfied Client ", value: 99 },
              { label: "Quote Generation", value: 40 },
              { label: "Caption", value: 60 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 bg-white rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
