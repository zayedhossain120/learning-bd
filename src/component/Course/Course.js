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
    <section className=" container mx-auto pb-10  ">
      <h1 className="text-5xl p-10  ">Featured Course</h1>

      <div className="  learning-bd-card  ">
        {course.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={item?.picture} alt="course thumb" />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">
                {item?.title}
                <div className="badge badge-secondary">Pro </div>
              </h2>
              <div className="card-actions justify-between">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
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
