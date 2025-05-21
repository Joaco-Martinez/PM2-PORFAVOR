import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Capture stunning moments with the dual-camera system and enjoy exceptional performance with the iPhone 11.",
    image: "https://pngimg.com/d/iphone_11_PNG38.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Lightweight design meets powerful performance. Perfect for productivity and creativity.",
    image: "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Ff4d07cab-bc5e-4391-80af-b39a37886d73.png&w=3840&q=75",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Stunning display and powerful performance make this the ultimate tablet for work and play.",
    image: "https://www.pngarts.com/files/5/IPad-Pro-PNG-High-Quality-Image.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Monitor your health, track your workouts, and stay connected with the sleek Apple Watch.",
    image: "https://www.pngarts.com/files/8/Black-Apple-Watch-Series-6-Photo.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Experience premium sound with active noise cancellation and a customizable fit.",
    image: "https://rechargeelectronics.com/wp-content/uploads/2020/06/2020-0613-AIRPODS-PRO-WEB.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Smart speaker with great sound and Siri built in. Control your home with your voice.",
    image: "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_blue__eobtqej8h9me_large.png",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "iPhone 15 Pro Max",
    price: 1199,
    description:
      "The latest iPhone with A17 Pro chip, improved camera, and titanium design.",
    image: "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Ffa213372-4456-489b-a2b3-9293592ddf43.png&w=3840&q=75",
    categoryId: 1,
    stock: 15,
  },
  {

    name: "MacBook Pro M3",
    price: 1999,
    description:
      "Extreme performance with the new M3 chip and Liquid Retina XDR display.",
    image: "https://i0.wp.com/jamacbook.com/wp-content/uploads/2024/07/Macbook-M3-Max-2.png?fit=600%2C600&ssl=1",
    categoryId: 2,
    stock: 8,
  },
  {

    name: "Apple Vision Pro",
    price: 3499,
    description:
      "Revolutionary spatial computing with augmented reality and immersive interface.",
    image: "https://png.pngtree.com/png-clipart/20230613/ourmid/pngtree-apple-vision-png-image_7134823.png",
    categoryId: 7,
    stock: 5,
  },
  {

    name: "Apple Pencil (2nd gen)",
    price: 129,
    description:
      "Perfect for taking notes, drawing, and navigating precisely on compatible iPads.",
    image: "https://m.media-amazon.com/images/G/01/img15/brawner/ApplePencil2gen._CB455269077_.png",
    categoryId: 3,
    stock: 20,
  },
  {

    name: "Magic Keyboard",
    price: 99,
    description:
      "Compact and rechargeable keyboard with precise and comfortable typing experience.",
    image: "https://www.macstation.com.ar/web/image/product.image/6446/image_1024/Apple%20Magic%20Keyboard%20Touch%20ID%20-%20Espa%C3%B1ol?unique=048be49",
    categoryId: 8,
    stock: 12,
  },
  {

    name: "Apple TV 4K",
    price: 179,
    description:
      "Enjoy 4K HDR content with Dolby Atmos sound and access to Apple TV+.",
    image: "https://back.maximstore.com/static/images/de0ae8c0-a0a9-46dd-879d-5d504f4267fe.png",
    categoryId: 9,
    stock: 9,
  },
   {
    name: "iPhone 13",
    price: 799,
    description: "Powerful A15 Bionic chip and dual-camera system for stunning photos and videos.",
    image: "https://back.maximstore.com/static/images/bd56a6aa-92de-4308-98c6-db308fe3a833.png",
    categoryId: 1,
    stock: 12,
  },
  {
    name: "iPhone SE (3rd Gen)",
    price: 429,
    description: "Compact yet powerful, featuring A15 Bionic chip and Touch ID.",
    image: "https://stratanetworks.com/wp-content/uploads/2023/03/iPhone-SE3-red.png",
    categoryId: 1,
    stock: 25,
  },
  {
    name: "MacBook Air M2",
    price: 1199,
    description: "Redesigned with the M2 chip for superior performance in an ultra-thin body.",
    image: "https://back.maximstore.com/static/images/1b53fac8-2b02-4351-93d7-1c332d09e304.png",
    categoryId: 2,
    stock: 7,
  },
  {
    name: "MacBook Pro 14”",
    price: 1999,
    description: "Liquid Retina XDR display and M2 Pro chip for demanding tasks.",
    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png",
    categoryId: 2,
    stock: 6,
  },
  {
    name: "iPad Air (5th Gen)",
    price: 599,
    description: "Great performance with the M1 chip in a thin and light design.",
    image: "https://www.cellularsales.com/wp-content/uploads/2023/01/apple-ipad-air-blue-2022.png",
    categoryId: 3,
    stock: 18,
  },
  {
    name: "iPad Mini (6th Gen)",
    price: 499,
    description: "Compact design with incredible power and Liquid Retina display.",
    image: "https://icenter.ar/wp-content/uploads/2023/06/ipad-mini-select-wifi-purple-202109_FMT_WHH.png",
    categoryId: 3,
    stock: 9,
  },
  {
    name: "Apple Watch SE",
    price: 279,
    description: "Essential health and activity features in an affordable design.",
    image: "https://back.maximstore.com/static/images/081bbcd2-f649-4655-b2f4-01b3c6e14bb8.png",
    categoryId: 4,
    stock: 20,
  },
  {
    name: "Apple Watch Ultra",
    price: 799,
    description: "Designed for extreme adventures with durability and extended battery life.",
    image: "https://storage.googleapis.com/guvery-cdn/public_images/items/299_fdc8f0.png",
    categoryId: 4,
    stock: 4,
  },
  {
    name: "AirPods (3rd Gen)",
    price: 179,
    description: "Spatial audio and contoured design for immersive listening.",
    image: "https://tienda.personal.com.ar/images/720/webp/Auriculares_Apple_Airpods_3ra_Generacion_2918b4d6be.png",
    categoryId: 5,
    stock: 22,
  },
  {
    name: "AirPods Max",
    price: 549,
    description: "Over-ear headphones with active noise cancellation and high-fidelity audio.",
    image: "https://www.macstation.com.ar/web/image/product.template/92293/image_1024?unique=4c9d99e",
    categoryId: 5,
    stock: 5,
  },
  {
    name: "HomePod (2nd Gen)",
    price: 299,
    description: "Room-filling sound and seamless integration with Apple ecosystem.",
    image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685969622/Croma%20Assets/Communication/Speakers%20and%20Media%20Players/Images/268276_krv66l.png?tr=w-1000",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Beats Pill+",
    price: 179,
    description: "Clear and powerful sound in a compact, portable form.",
    image: "https://www.beatsbydre.com/content/dam/beats-support/global/images/product-hero/support-beatspill-hero.png.large.2x.png",
    categoryId: 6,
    stock: 14,
  },
  {
    name: "Apple Vision Pro (Developer Edition)",
    price: 3499,
    description: "Special edition for developers with enhanced tools and capabilities.",
    image: "https://developer.apple.com/visionos/developer-kit/images/vision-side_2x.png",
    categoryId: 7,
    stock: 3,
  },
  {
    name: "Magic Keyboard with Touch ID",
    price: 149,
    description: "Security and comfort with integrated Touch ID sensor.",
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/magic-keyboard-with-touch-id.png",
    categoryId: 8,
    stock: 13,
  },
  {
    name: "Magic Keyboard with Numeric Keypad",
    price: 129,
    description: "Perfect for spreadsheets and productivity tasks.",
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/magic-keyboard-with-touch-id-and-numeric-keypad.png",
    categoryId: 8,
    stock: 15,
  },
  {
    name: "Apple TV HD",
    price: 149,
    description: "HD quality with full access to Apple TV and apps.",
    image: "https://www.macstation.com.ar/web/image/product.template/87125/image_1920?unique=465c0b7",
    categoryId: 9,
    stock: 11,
  },
  {
    name: "Apple TV 4K (128GB)",
    price: 199,
    description: "More storage for your favorite apps and content.",
    image: "https://buy.budli.in/cdn/shop/files/IMG_20231020_160156-removebg-preview_500x.png?v=1697855524",
    categoryId: 9,
    stock: 7,
  },
  {
    name: "iPhone 14 Pro",
    price: 999,
    description: "ProMotion display and Dynamic Island for a revolutionary iPhone experience.",
    image: "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Fb7f25eb6-732f-46f3-a9de-73ef6b87a522.png&w=3840&q=75",
    categoryId: 1,
    stock: 8,
  },
  {
    name: "MacBook Air (13” M3)",
    price: 1199,
    description: "New M3 chip for better energy efficiency and performance.",
    image: "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Fa1f9a27d-cc4e-45ae-b3d4-3784df137bb6.png&w=3840&q=75",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad 10th Gen",
    price: 449,
    description: "All-screen design and ideal performance for daily tasks.",
    image: "https://thegoodguys.sirv.com/products/50083474/50083474_834815.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90",
    categoryId: 3,
    stock: 11,
  },
  {
    name: "Apple Watch Series 9",
    price: 399,
    description: "New S9 chip and gesture control for intuitive use.",
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Beats Studio Buds",
    price: 149,
    description: "Wireless earbuds with active noise cancellation and rich sound.",
    image: "https://iplanet.one/cdn/shop/files/MJ4X3.png?v=1691164730",
    categoryId: 5,
    stock: 18,
  },
  {
    name: "Beats Flex",
    price: 69,
    description: "Comfortable wireless earbuds ideal for everyday use.",
    image: "https://m.media-amazon.com/images/G/01/appcore/beats/Beats_Flex_Comparison_Chart._CB416523261_.png",
    categoryId: 5,
    stock: 30,
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
