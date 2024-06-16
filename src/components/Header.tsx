import Image from "next/image";
import NavBarCard from "./NavBarCard";
import { downArrow, forBusiness1, forBusiness2, product1, product2, product3 } from "@/constants";



export default function Header() {
    return (
        <>
        <nav className="m-10 px-11 bg-gray-400/10 rounded-full backdrop-blur-lg flex items-center justify-between ring-[0.5px] ring-white sticky top-10">
        <div>
          <svg
            viewBox="0 0 115 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-enterprise-black h-4 md:h-6 flex-none"
          >
            <path
              d="m32.626.367-8.802 21.589a3.284 3.284 0 0 1-3.041 2.043h-8.895a3.283 3.283 0 0 1-3.04-2.04L.02.367A.266.266 0 0 1 .266 0h8.91c.222 0 .421.138.5.346l6.672 17.795L22.967.348a.533.533 0 0 1 .5-.348h8.912c.189 0 .318.192.247.367Zm.813-.1v23.466c0 .147.12.267.267.267h24.463c.146 0 .266-.12.266-.267v-5.851a.267.267 0 0 0-.266-.267h-15.92a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H42.25a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267h15.919c.146 0 .266-.12.266-.267V.267A.267.267 0 0 0 58.17 0H33.706a.267.267 0 0 0-.267.267Zm26.12 0v23.466c0 .147.12.267.268.267H84.29c.146 0 .266-.12.266-.267v-5.851a.268.268 0 0 0-.266-.267H68.37a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H68.37a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267H84.29c.146 0 .266-.12.266-.267V.267A.268.268 0 0 0 84.29 0H59.826a.267.267 0 0 0-.266.267Zm26.123 23.466c0 .147.12.267.266.267h16.76c3.668 0 6.627-.951 8.891-2.868 2.264-1.902 3.396-4.95 3.396-9.147s-1.132-7.245-3.396-9.148C109.335.95 106.377 0 102.708 0h-16.76a.267.267 0 0 0-.266.267v23.466Zm8.81-6.163a.267.267 0 0 1-.267-.267V6.697c0-.147.12-.267.266-.267h6.255c1.932 0 3.366.423 4.302 1.268.936.845 1.403 2.279 1.403 4.287s-.467 3.472-1.403 4.317c-.936.846-2.37 1.268-4.302 1.268h-6.255Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <ul className="flex gap-7">
            <li className="flex group justify-center items-center gap-2 py-7 cursor-pointer ">
              <div className="group-hover:text-accent">Products</div>
              {downArrow}
              {/* dropdown section */}
              <div className="absolute z-50 invisible group-hover:visible w-full max-w-[80%] bg-gray-400/10 backdrop-blur-lg p-10 rounded-[50px] top-full left-1/2 -translate-x-1/2">
                <div className="bg-white rounded-[25px] flex p-7">
                  <h2 className="w-2/5 text-3xl mt-5">Products</h2>
                  <div className="flex">
                    {/* product 1*/}
                    <NavBarCard {...product1} />
                    {/* product 2*/}
                    <NavBarCard {...product2} />
                    {/* product 3*/}
                    <NavBarCard {...product3} />
                  </div>
                </div>
              </div>
            </li>
            <li className="flex group justify-center items-center gap-2 py-7 cursor-pointer hover:text-accent">
              <div>Use Cases</div>
              {downArrow}
            </li>
            <li className="flex group justify-center items-center gap-2 py-7 cursor-pointer hover:text-accent">
              <div>Resources</div>
              {downArrow}
            </li>
            <li className="flex group justify-center items-center gap-2 py-7 cursor-pointer ">
              <div>For Business</div>
              {downArrow}
              {/* dropdown section */}
              <div className="absolute z-50 invisible group-hover:visible w-full max-w-[80%] bg-gray-400/20 backdrop-blur-xl p-10 rounded-[50px] top-full left-1/2 -translate-x-1/2">
                <div className="bg-white rounded-[25px] flex p-7">
                  <h2 className="w-2/5 text-3xl mt-5">For Business</h2>
                  <div className="flex">
                    {/* product 1*/}
                    <NavBarCard {...forBusiness1} />
                    {/* product 2*/}
                    <NavBarCard {...forBusiness2} />
                  </div>
                </div>
              </div>
            </li>
            <li className="flex group justify-center items-center gap-2 py-7 cursor-pointer hover:text-accent">
              <div>Pricing</div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className=" cursor-pointer">Book a Demo</span>
          <button className="p-2 bg-white rounded-full px-5 py-3 font-semibold hover:bg-slate-300/10 transition-all duration-200">
            Login
          </button>
          <button className="p-2 bg-[#323232] text-white hover:text-black rounded-full px-5 py-3 font-semibold hover:bg-slate-300/10 transition-all duration-200">
            Sign Up
          </button>
        </div>
      </nav>
      </>
    )
}