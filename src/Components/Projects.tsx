import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title: "Todolist",
        desc: "A React and Typescript based app for managing and organized your task efficently",
        img : "/project_01..jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },

    {
        id:1,
        title: "Countdown timer",
        desc: "A Next.js and Typescript powered  website to track time with help of timer",
        img : "/project_02..png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],   
    },
    {
      id:2,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS and Typescript calculator for performing simple calculation",
        img : "/bluecal.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],   
    },
    {
      id:3,
        title: "Static  Interactive Resume",
        desc: "A  Typescript-based interactive resume built with the help of HTML and CSS allowing users to showcase their skills",
        img : "/project-04.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],   
    }, 
    {
      id:4,
      title: "Weather Widget",
      desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data ",
      img : "/cloud.png",
      tags: ["Next.js", "Node", "CSS", "Typescript"],  
    
    },
    {
      id:5,
      title: "Currency Converter",
      desc: "A simple HTML and TypeScript powered toolfor converting currencies with real-time rates",
      img : "/project_06.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],  
    
    },     
]
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10  xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects