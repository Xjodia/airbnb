"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const Logo = () => {
  const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const [userAvatar, setUserAvatar] = useState(true);

  // useEffect(() => {
  //   const getAvatar = async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get("/user/{id}");
  //       setUserAvatar(response);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //     setLoading(false);
  //   };
  //   getAvatar();
  // }, []);

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};

export default Logo;
