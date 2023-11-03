"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";


const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const router = useRouter();
  
    if (!isMounted) {
      return null;
    }
  
    return ( 
      <div className="ml-auto flex items-center gap-x-4">
        <Button className="flex items-center rounded-full bg-black px-4 py-2">
          <ShoppingBag
            size={20}
            color="white"
          />
        </Button>
      </div>
    );
  }

  export default NavbarActions;