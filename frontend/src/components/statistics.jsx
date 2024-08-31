import { BaggageClaim, Recycle, Users } from "lucide-react";
import React from "react";

function Statistics(props) {
  return (
    <div className="bg-green-600 -mt-1 relative   ">
      <div className="flex flex-wrap gap-4 mx-auto max-w-screen-lg sm:justify-center lg:justify-between items-center px-2 ">
        <section className="flex gap-5  items-center">
          <section>
            <Users
              size={50}
              className="bg-green-700 rounded-full p-2  text-white"
            />
          </section>
          <section>
            <section className="text-6xl text-white font-semibold">20K</section>
            <section className="font-semibold text-lg  text-white">
              Satisfied & happy Clients
            </section>
          </section>
        </section>
        <section className="flex gap-5  items-center">
          <section>
            <Recycle
              size={50}
              className="bg-green-700 rounded-full text-white p-2"
            />
          </section>
          <section>
            <section className="text-6xl text-white font-semibold">80K</section>
            <section className="font-semibold text-lg  text-white">
              Total industries Served
            </section>
          </section>
        </section>
        <section className="flex gap-5 items-center">
          <section>
            <BaggageClaim
              size={50}
              className="bg-green-700 rounded-full p-2  text-white"
            />
          </section>
          <section>
            <section className="text-6xl text-white font-semibold">
              205K
            </section>
            <section className="font-semibold text-lg  text-white">
              Waste Picked & desposed
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Statistics;
