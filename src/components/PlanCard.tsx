import Image from "next/image";

export default function PlanCard({
  name,
  description,
  price,
  discount,
  buttonText,
  features,
  isHighlighted,
}: {
  name: string;
  description: string;
  price: number | string;
  discount?: number;
  buttonText: string;
  features: string[];
  isHighlighted: boolean;
}) {
  return (
    <div className={`flex -z-10 relative flex-col grow bg-white p-7 rounded-2xl border-2 ${isHighlighted ? "border-accent" : "" }`} >
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>{description}</p>
      <div className="flex items-center my-3 gap-3">
        <p className="">
          <span className="text-xl">₹</span>
          <span className="text-3xl font-semibold">{price}</span>
        </p>
        {discount && <div className="bg-[#d0ff99] h-fit w-fit text-xs font-bold text-[#006000] p-1 rounded-full">
          SAVE {discount}%
        </div>}
      </div>
      <div className="text-xs">Per user / month, billed yearly</div>
      <button
        className={`p-4 my-5 border-2 border-accent rounded-full font-semibold hover:text-accent ${
          isHighlighted
            ? "bg-gradient-to-r border-none from-[#7276fe] hover:to-70% to-[#cfc0fe]  text-white hover:text-white "
            : ""
        }`}
      >
        {buttonText}
      </button>
      <hr className="border" />
      <ul className="space-y-4 text-left text-sm   text-gray-900 my-5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/check.svg" alt="check" width={10} height={10} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {isHighlighted ? (
        <div className="absolute right-7 top-0 bg-gradient-to-r from-[#7276fe] to-[#cfc0fe] flex rounded-b-xl py-2 px-4 text-white text-sm">
          <Image src="/chime.svg" alt="star" width={15} height={15} />
          <span>RECOMMENDED</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
