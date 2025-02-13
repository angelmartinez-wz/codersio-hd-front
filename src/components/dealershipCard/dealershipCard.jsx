import { useState } from "react";
import imgDealership from "../../img/img-dealership.png";

const options = [
  {
    id:"1",
    content: 
    <>
      <div className="flex items-center justify-center bg-primary_3/50 text-min font-medium select-none relative h-8 w-8 leading-4 text-[13px] rounded-[64px]">W</div>
      <div>
        <h2 className="font-medium mb-1">West Bend Harley-Davidson (2.9mi)</h2>
        <p className="font-normal">2910 W Washington St</p>
        <p className="font-normal">West Bend, WI, 53095</p>
      </div>
      <img src={imgDealership} alt="dealership" className="object-cover h-20 w-40" />
    </> 
  },
  {
    id:"2",
    content: <>
    <div className="flex items-center justify-center bg-primary_3/50 text-min font-medium select-none relative h-8 w-8 leading-4 text-[13px] rounded-[64px]">W</div>
    <div>
      <h2 className="font-medium mb-1">West Bend Harley-Davidson (2.9mi)</h2>
      <p className="font-normal">2910 W Washington St</p>
      <p className="font-normal">West Bend, WI, 53095</p>
    </div>
    <img src={imgDealership} alt="dealership" className="object-cover h-20 w-40" />
  </> 
  },
  {
    id:"3",
    content: <>
    <div className="flex items-center justify-center bg-primary_3/50 text-min font-medium select-none relative h-8 w-8 leading-4 text-[13px] rounded-[64px]">W</div>
    <div>
      <h2 className="font-medium mb-1">West Bend Harley-Davidson (2.9mi)</h2>
      <p className="font-normal">2910 W Washington St</p>
      <p className="font-normal">West Bend, WI, 53095</p>
    </div>
    <img src={imgDealership} alt="dealership" className="object-cover h-20 w-40" />
  </> 
  }
];

const DealershipCard = () =>{
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <input
              type="radio"
              name="dealership"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="w-5 h-5 accent-primary_1"
            />
            {option.content}
          </label>
        ))}
    </div>
  )
}

export default DealershipCard;
