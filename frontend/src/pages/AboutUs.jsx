import PersonCard from "@/components/personCard";
import { moto, teamMembers } from "@/data/aboutUsData";
import React from "react";

function AboutUs(props) {
  return (
    <div className="bg-[#EBF2E9] p-2 ">
      <main>
        <div className=" max-w-screen-md mx-auto">
          {" "}
          {moto.map(({ title, description }) => (
            <div className="">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center py-4 text-green-600">
                {title}
              </h2>
              <p className="font-semibold text-justify">{description}</p>
            </div>
          ))}
        </div>
        <section className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center py-4 text-green-600">
            Meet Our Team
          </h2>
          <p className=" font-semibold text-justify w-fit mx-auto">
            Our team is comprised of dedicated professionals who are passionate
            about making a positive impact on the environment.
          </p>
          <section>
            <div>
              <div className="flex flex-wrap gap-4  justify-center py-8">
                {teamMembers.map(
                  ({ name, img, role: title, initials, bio: description }) => (
                    <PersonCard
                      {...{ name, img, title, initials, description }}
                    />
                  )
                )}
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
