import React, { useEffect, useState } from "react";

const Course = () => {
  const [course, setCourse] = useState([]);
  console.log(course);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <section className="container mx-auto py-10 bg-fuchsia-100">
      <h1 className="text-5xl ">Featured Course</h1>
      <button></button>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  ">
        {course.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item?.picture} alt="course thumb" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item?.title}
                <div className="badge badge-secondary">Pro </div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between">
                <div className="">🤩</div>
                <div className="badge badge-outline">{item?.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
