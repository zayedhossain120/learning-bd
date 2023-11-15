import React, { useEffect, useState } from "react";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  console.log(instructor);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <section className=" p-10 mx-auto container">
      <h1 className="text-5xl">Instructors</h1>
      <div className=" ">
        {instructor?.map((item) => (
          <div key={item._id}>
            <img src={item?.picture} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
