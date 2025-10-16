import React from "react";
import Link from "next/link";
import Dashboard from "./../../public/login_image.png"
import Image from "next/image";
function page() {
  return (
    <div className="min-h-[100vh] w-full flex justify-around items-center text-[#425B90] flex-col px-4 md:px-8 lg:px-6">
      <Link href={"/"} className="self-start"> Back to Home</Link>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold">DashBoard</h1>
        <Image src={Dashboard} alt="dashboard"/>
      </div>
    </div>
  )
}

export default page
