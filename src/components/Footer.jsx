import React from "react";

const Footer = () => {
  return (
    <footer className="lg:mb-16 lg:mt-20 mt-20 2xl:container px-[12px] lg:px-[40px] 2xl:px-0 mx-auto lg:border-y">
      <div className="m-auto lg:flex items-start lg:justify-between lg:mt-10">
        <div className="text-[36px] font-normal">
          <h2 className="lg:ml-[40px] ml-[12px]">Lorem</h2>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 mt-10 lg:mt-auto">
          <div className="lg:ml-24 ml-[14px]">
            <h6 className="font-[500] text-[20px]">IPSUM</h6>
            <ul className="lg:mt-[40px] mt-[20px]  list-inside text-[#828282] lg:text-[16px] text-[14px]">
              <li className="mb-[12px]">Aarhus</li>
              <li className="mb-[12px]">Copenhagen</li>
              <li className="mb-[12px]">Stockholm</li>
              <li>Malmö</li>
            </ul>
          </div>
          <div className="lg:ml-24 ml-[25px]">
            <h6 className="font-[500] text-[20px]">IPSUM</h6>
            <ul className="lg:mt-[40px] mt-[20px] list-inside text-[#828282] lg:text-[16px] text-[14px] underline lg:no-underline">
              <li className="mb-[12px]">Linkedin</li>
              <li className="mb-[12px]">Youtube</li>
            </ul>
          </div>
          <div className="ml-[25px]">
            <h6 className="font-[500] text-[20px] lg:mr-[191px]">IPSUM</h6>
            <ul className="lg:mt-[40px] mt-[20px] list-inside text-[#828282] lg:text-[16px] text-[14px]">
              <li className="mb-[12px] w-[140px] lg:w-auto ">
                +7-(999)-777-77-77
              </li>
              <li>ggggg@mail.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
