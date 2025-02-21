import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'NO.1 Food Delivery Service'}
          mainHeader={'About Tispatch'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Get Fresh, Delicious Food
          Delivered to Your Door          </p>
          <p>Tispatch brings you an array of delicious meals from your favorite local restaurants, delivered fast and fresh right to you.</p>
          <p>Tispatch is on a mission to make food delivery fast, convenient, and affordable. Whether you’re craving a healthy meal, comfort food, or a quick snack, Tispatch has you covered.

Wide selection of restaurants and cuisines
Real-time order tracking from start to finish
Fast and reliable delivery with easy app navigation
.</p>
        </div>
      </section>
      
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Need help with your order?'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  )
}
