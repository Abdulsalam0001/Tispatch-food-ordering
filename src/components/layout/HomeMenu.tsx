'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import {useEffect, useState} from "react";

/**
 * Interface representing a menu item in the restaurant
 */
interface MenuItemType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
}

/**
 * HomeMenu Component
 * Displays featured menu items and best sellers on the home page
 * @component
 */
export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState<MenuItemType[]>([]);

  useEffect(() => {
    /**
     * Fetches the best-selling menu items from the API
     */
    const fetchBestSellers = async () => {
      try {
        const res = await fetch('/api/menu-items');
        const menuItems = await res.json();
        setBestSellers(menuItems.slice(-3));
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="relative">
      <div className="absolute left-0 right-0 w-full justify-start">
        {/* Decorative images */}
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189} alt={'salad decoration left'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'salad decoration right'} />
        </div>
      </div>

      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Tispatch food menu'} />
      </div>

      {/* Menu items grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4">
          {/* TODO: Add image and description for amala */}
          <img src="" alt="amala" />
          <p className="text-gray-500 text-sm"></p>
        </div>
      </div>
    </section>
  );
}
