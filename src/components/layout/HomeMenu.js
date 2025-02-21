'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Tispatch food menu'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img src="" alt="amala" className="w-full" />
          <h4 className="font-semibold my-2">Amala Ewedu & Gbegiri</h4>
          <p className="text-gray-500 text-sm">Amala & Gbegiri with Ewedu</p>
          <button className="bg-primary text-white rounded-full px-4 py-2">Order Now</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img src="" alt="jollof-rice" className="w-full" />
          <h4 className="font-semibold my-2">Jollof Rice & Chicken</h4>
          <p className="text-gray-500 text-sm">Jollof Rice with spicy chicken</p>
          <button className="bg-primary text-white rounded-full px-4 py-2">Order Now</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img src="" alt="pounded-yam" className="w-full" />
          <h4 className="font-semibold my-2">Pounded Yam & Egusi</h4>
          <p className="text-gray-500 text-sm">Pounded Yam with Egusi soup</p>
          <button className="bg-primary text-white rounded-full px-4 py-2">Order Now</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img src="" alt="fried-rice" className="w-full" />
          <h4 className="font-semibold my-2">Fried Rice & Dodo</h4>
          <p className="text-gray-500 text-sm">Fried Rice served with spicy dodo fries</p>
          <button className="bg-primary text-white rounded-full px-4 py-2">Order Now</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img src="" alt="eba-ogbono" className="w-full" />
          <h4 className="font-semibold my-2">Eba & Ogbono</h4>
          <p className="text-gray-500 text-sm">Traditional Eba with savory Ogbono soup</p>
          <button className="bg-primary text-white rounded-full px-4 py-2">Order Now</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img src="" alt="suya-special" className="w-full" />
          <h4 className="font-semibold my-2">Suya Special</h4>
          <p className="text-gray-500 text-sm">Spicy grilled suya with peppers and onions</p>
          <button className="bg-primary text-white rounded-full px-4 py-2">Order Now</button>
        </div>
      </div>
    </section>
  );
}