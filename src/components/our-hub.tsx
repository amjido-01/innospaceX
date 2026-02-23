export default function OurHub() {
  return (
    <div className="max-w-6xl mx-auto h-180 px4">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full">

        <div className="col-span-1 row-span-2 flex flex-col gap-4">
          <div
            className="border-2 w-full h-[60%] rounded-2xl bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            style={{ backgroundImage: "url('/img1.jpg')" }}
          ></div>
          <div className="rounded-2xl w-full h-[40%] bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            style={{ backgroundImage: "url('/img3.jpeg')" }}
          ></div>
        </div>



        <div className="col-span-2 row-span-1 gap-4 rounded flex justify-between items-center">
          <div className="border-2 rounded-2xl w-1/2 h-full bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            style={{ backgroundImage: "url('/img2.jpeg')" }}
          ></div>
          <div className="border-2 rounded-2xl w-1/2 h-full bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            style={{ backgroundImage: "url('/img4.jpeg')" }}
          ></div>
        </div>


        <div className="col-span-1 row-span-3 gap-4 flex flex-col">

          <div className="rounded-2xl w-full h-1/2 bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            style={{ backgroundImage: "url('/img5.jpeg')" }}
          ></div>

          <div className="rounded-2xl w-full h-1/2 bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            style={{ backgroundImage: "url('/img7.jpeg')" }}
          ></div>
        </div>



        <div className="rounded-2xl col-span-2 row-span-1 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/img09.jpeg')" }}
        ></div>
        <div className="rounded-2xl col-span-2 row-span-1 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/img8.jpeg')" }}
        ></div>
        <div className="rounded-2xl col-span-1 row-span-1 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/img10.jpeg')" }}
        ></div>
      </div>
    </div>
  );
}
