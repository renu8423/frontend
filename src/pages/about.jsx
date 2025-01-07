import HomeLayout from "../Layout/HomeLayout";
import aboutMainImage from "../assets/image/aboutMainImage.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-5 flex flex-col text-white">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <section className="w-full lg:w-1/2 space-y-10">
            <h1 className="text-yellow-300 text-3xl font-bold">
              Affordable & Quality Education
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              doloribus aliquid qui obcaecati expedita magni reiciendis ipsam ut
              autem quidem consequatur id amet similique, mollitia earum!
              Repudiandae, vitae? Quasi, maxime!
            </p>
          </section>
          <div className="w-full lg:w-1/2">
            <img
              src={aboutMainImage}
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="carousel w-full lg:w-1/2 my-10 mx-auto">
         
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full"
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
                alt="Image 2"
                loading="lazy"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
                alt="Image 3"
                loading="lazy"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
                alt="Image 4"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs bg-yellow-300 text-black">
              1
            </a>
            <a href="#item2" className="btn btn-xs bg-yellow-300 text-black">
              2
            </a>
            <a href="#item3" className="btn btn-xs bg-yellow-300 text-black">
              3
            </a>
            <a href="#item4" className="btn btn-xs bg-yellow-300 text-black">
              4
            </a>
          </div>
        </div>
      
    </HomeLayout>
  );
}

export default AboutUs;
