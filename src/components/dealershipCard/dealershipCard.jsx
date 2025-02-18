import { useState } from "react";
import { useGetDealerships } from "../../hooks/useGetDealerships";

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
              <div className="w-[500px]">
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
