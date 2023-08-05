import React from "react";
import { BsCalendarWeek, BsChevronDown } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

const FIlters = () => {
  return (
    <div>
      <div className="2xl:container px-[12px] lg:px-[40px] 2xl:px-0 mx-auto">
        <div className="grid grid-cols-12 gap-[20px] mt-[40px] md:mt-[60px]">
          <div className="col-span-12 lg:col-span-9 flex w-full">
            <div className="flex items-center justify-between p-4 gap-2 border text-[#828282] text-[20px] w-full rounded-l-[8px]">
              <input
                type="text"
                placeholder="Куда"
                className="w-full outline-none"
              />
              <BiMap/>
            </div>
            <div className="flex items-center justify-between p-4 gap-2 border text-[#828282] text-[20px] outline-none w-full rounded-r-[8px]">
              <input
                type="text"
                placeholder="Куда"
                className="w-full outline-none"
              />
              <BsCalendarWeek/>

            </div>
          </div>
          <button className="bg-[#224634] h-[64px] flex justify-center items-center px-4 font-medium text-[20px] rounded-[10px] text-white col-span-12 lg:col-span-3 w-full">
            Найти ретрит
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto mt-[60px] mb-[30px] md:my-[40px] 2xl:container px-[12px] lg:px-[40px] 2xl:px-0">
        <span className="uppercase text-[#333333] text-[14px] md:text-[20px] cursor-pointer font-medium flex md:gap-[10px] items-center">
          сортировать по <BsChevronDown />
        </span>
        <span className="uppercase text-[#333333] text-[14px] md:text-[20px] cursor-pointer font-medium flex md:gap-[10px] items-center">
          Фильтровать по <BsChevronDown />
        </span>
      </div>
    </div>
  );
};

export default FIlters;
