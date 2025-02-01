import Image from "next/image";
import photoData from "../../data/photos";

export default function Photos({ aboutRef }) {
  return (
    <>
      <div className="w-full" ref={aboutRef}>
        {photoData.map((element, index) => {
          return (
            <>
              <h2
                key={index}
                className="text-4xl mt-24 text-primary text-left font-bold"
              >
                {/* SWTSA Gallery */}
              </h2>
              <div
                key={index}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"
              >
                {element.data.map((item, i) => {
                  return (
                    <>
                      <div key={i} className="flex flex-col p-6 mx-2 sm:mx-12">
                        <img
                                 className="z-[1]"
                                 src={item.link}
                                 width={800}
                                 height={500}
                                 alt="Hero Image"
                        />
                        <a
                          key={i}
                          className="bg-red-900 inline-block text-white font-semibold rounded-b py-4 text-center"
                        >
                          {item.heading}
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
