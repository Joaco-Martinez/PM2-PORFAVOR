/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import ButtonHome from "@/app/components/buttonHome/buttonHome";
import Footer from "@/app/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="shadow">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:px-6 lg:py-4">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center">
          <img
            src="https://images.seeklogo.com/logo-png/0/2/apple-logo-png_seeklogo-9832.png"
            alt="logo"
            className="h-12 lg:h-16"
            />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white lg:text-3xl">
            Manzana Tech
          </span>
            </a>
          </div>
      </div>
    </nav>
      </header>

      
      <section
        id="home"
        className="bg-gray-100 py-20 px-6 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Discover the Power of Apple
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
          Experience innovation at its finest with our exclusive Apple
          collection. Sleek. Powerful. Iconic.
        </p>
        <ButtonHome />
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src="https://images.macrumors.com/t/nKAboR6twFqkI47TTKXAESHoZ18=/1600x0/article-new/2023/08/iPhone-15-Pro-Colors-Mock-Feature.jpg"
            alt="iPhone 15 Pro"
            className="rounded-2xl shadow-md"
          />
          <img
            src="https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og.jpg?202505082034"
            alt="MacBook Pro"
            className="rounded-2xl shadow-md"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMyLfIitTRGjh5Zxnzt7dZEQT_q1_N--VzQ&s"
            alt="Apple Watch Ultra"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>


      <Footer />
    </div>
  );
}