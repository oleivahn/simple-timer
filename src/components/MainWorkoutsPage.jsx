import React from "react";
import { Link } from "react-router-dom";

const MainWorkoutsPage = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Choose your Workout
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Choose your Workout
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <ServiceCard
            workoutID="1"
            number="1"
            title="Chest and Back"
            details="Lorem ipsum dolor amet adipiscing eiusmod."
          />
          <ServiceCard
            workoutID="2"
            number="2"
            title="Arms and Shoulders"
            details="Lorem ipsum dolor amet adipiscing eiusmod."
          />
          <ServiceCard
            workoutID="3"
            number="3"
            title="Abs and Legs"
            details="Lorem ipsum dolor amet adipiscing eiusmod."
          />
          <ServiceCard
            workoutID="4"
            number="4"
            title="Plyometrics"
            details="Lorem ipsum dolor amet adipiscing eiusmod."
          />
        </div>
      </div>
    </section>
  );
};

export default MainWorkoutsPage;

const ServiceCard = ({ workoutID, number, title, details, goToWorkout }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="group relative mb-10 overflow-hidden rounded-xl border border-[#EDEDED] bg-white px-6 py-11 text-center duration-200 hover:-translate-y-1">
        <Link to={`/dashboard/workout/${workoutID}`}>
          <button className="text-dark mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#EDEDED] text-3xl font-semibold shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            {number}
          </button>
        </Link>
        <h4 className="mb-4 text-lg font-semibold uppercase text-primary">
          {title}
        </h4>
        <p className="text-body-color text-base leading-relaxed">{details}</p>
        <span className="absolute bottom-0 left-0 block h-2 w-0 bg-primary duration-200 group-hover:w-full"></span>
      </div>
    </div>
  );
};
