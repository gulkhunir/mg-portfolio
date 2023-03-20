import React from "react";

const About = () => {
  return <div>
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black
     text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, doloribus ad officiis nulla praesentium error suscipit laudantium placeat quia quod omnis inventore ut fuga id quos sit possimus voluptate ullam necessitatibus voluptates asperiores! Fuga, officia. Tenetur iste consequatur eligendi aut, consequuntur ullam reprehenderit repudiandae tempore adipisci magni a nulla? Nulla.</p>
        <br/>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam nobis temporibus aliquid, repellat nulla voluptatem labore eos quod aperiam perspiciatis soluta iste quidem ea impedit a hic beatae eius vel blanditiis quo doloribus error ratione. Deserunt debitis sapiente quis natus quam maiores earum optio incidunt eos laborum, saepe voluptates!</p>
      </div>
    </div>
  </div>;
};

export default About;
