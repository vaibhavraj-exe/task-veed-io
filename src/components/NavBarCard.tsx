import Image from "next/image";



export default function NavBarCard({ title, description} : {title: string, description: string}) {
  return (
    <div className="flex p-5 justify-center items-center hover:bg-gradient-to-br from-[#997afa] hover:to-70% to-[#5a68f5] hover:text-slate-50 transition-all duration-200 rounded-3xl">
      <div>
        <Image
          src={`/${title}.svg`}
          alt="video_editor_logo"
          width={100}
          height={100}
        />
      </div>
      <div className="py-2 px-3 w-3/4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <span className=" text-xs ">
          {description}
        </span>
      </div>
    </div>
  );
}
