import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const carBrands = [
  { name: "Toyota", logo: "/logos/toyota.png" },
  { name: "Nissan", logo: "/logos/nissan.png" },
  { name: "Honda", logo: "/logos/honda.png" },
  { name: "Mazda", logo: "/logos/mazda.png" },
  { name: "Subaru", logo: "/logos/subaru.png" },
  { name: "Mitsubishi", logo: "/logos/mitsubishi.png" },
  { name: "Suzuki", logo: "/logos/suzuki.png" },
  { name: "Daihatsu", logo: "/logos/daihatsu.png" },
];

export default function Home() {
  return (
    <div className="p-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {carBrands.map((brand) => (
        <motion.div
          key={brand.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Card className="p-4 flex flex-col items-center cursor-pointer">
            <Image src={brand.logo} alt={brand.name} width={80} height={80} />
            <p className="mt-2 text-lg font-semibold">{brand.name}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
