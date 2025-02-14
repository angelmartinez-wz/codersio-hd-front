import { useState } from "react";
import imgDealership from "../../img/img-dealership.png";
import { useGetDealerships } from "../../hooks/useGetDealerships";

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
  const { dealerships, loading, error } = useGetDealerships();
  const [selected, setSelected] = useState(null);
  
  if(loading) {
    return <div>Loading...</div>
   }
   
  if (error) {
    return <div>ERROR!</div>
  }

  return (
    <div className="flex flex-col gap-2">
      {dealerships.map((dealership) => (
          <label
            key={dealership.id}
            className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <input
              type="radio"
              name="dealership"
              value={dealership.id}
              checked={selected === dealership.id}
              onChange={() => setSelected(dealership.id)}
              className="w-5 h-5 accent-primary_1"
            />
            <>
              <div className="flex items-center justify-center bg-primary_3/50 text-min font-medium select-none relative h-8 w-8 leading-4 text-[13px] rounded-full">{dealership?.name?.charAt(0)}</div>
              <div>
                <h2 className="font-medium mb-1">{dealership.name}</h2>
                <p className="font-small">{dealership.direction}</p>
                <p className="font-normal">{`${dealership.phone}, (${dealership.distance})`}</p>
              </div>
              <img src={dealership.image} alt="dealership" className="object-cover h-20 w-20" />
            </> 
          </label>
        ))}
    </div>
  )
}

export default DealershipCard;
