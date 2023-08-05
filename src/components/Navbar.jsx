import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header>
      <div className="z-50 relative">
        <div className="2xl:container px-[12px] lg:px-[40px] mx-auto 2xl:px-0">
          <div className="flex justify-between items-center h-[80px] sm:h-[100px]">
            <a className="text-[30px] sm:text-[36px] font-semibold" href="/">
              Lorem
            </a>
            <div className="md:block hidden">
              <ul className="bg-white flex gap-[40px] items-center justify-center">
                <li className="text-[18px] text-[#828282] transition hover:text-black">
                  <a href="/">Главная</a>
                </li>
                <li className="text-[18px] text-[#828282]">
                  <a href="/catalog">Каталог</a>
                </li>
                <li className="text-[18px] text-[#828282] transition hover:text-black">
                  <a href="/about">О проекте</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <HiOutlineUser size={25} />
              <div onClick={toggleModal} className="sm:hidden cursor-pointer">
                {isModalOpen ? (
                  <AiOutlineClose className="hidden" />
                ) : (
                  <AiOutlineMenu size={25} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={toggleModal}
          ></div>
          <div className="fixed inset-x-0 top-0 flex items-center justify-end z-50">
            <div className="bg-white text-black w-full sm:max-w-md p-3 rounded-md relative">
              <AiOutlineClose
                size={25}
                onClick={toggleModal}
                className="absolute top-7 right-3 cursor-pointer"
              />
              <a className="text-[31px] font-semibold" href="/">
                Lorem
              </a>
              <ul className="bg-white mt-10 mb-2  flex gap-[10px] items-center justify-center text-[20px]">
                <li className="p-4">
                  <a href="#">Главная</a>
                </li>
                <li className="p-4">
                  <a href="#">Каталог</a>
                </li>
                <li className="p-4">
                  <a href="#">О проекте</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
