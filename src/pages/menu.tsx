'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";

interface MenuItemType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
}

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    // Replace static items with dynamic API fetching
    fetch('/api/menu-items')
      .then(res => res.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <section className="">
      <div className="text-center mb-4">
        <SectionHeaders subHeader="Full Menu" mainHeader="Our Menu" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
      <div className="mt-4 text-center text-gray-500 text-sm">
        Future enhancement: Replace static menu items with dynamic fetching from API.
      </div>
    </section>
  );
}
