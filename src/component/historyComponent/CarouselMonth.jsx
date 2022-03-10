import React from 'react'
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Item from "./Item"
function CarouselMonth() {
    const [month, setMonth] = React.useState([
        {
          id: 0,
          bulan: "January",
          title: "J",
        },
        {
          id: 1,
          bulan: "February",
          title: "F",
        },
        {
          id: 2,
          bulan: "March",
          title: "M",
        },
        {
          id: 3,
          bulan: "April",
          title: "A",
        },
        {
          id: 3,
          bulan: "May",
          title: "M",
        },
        {
          id: 4,
          bulan: "June",
          title: "JN",
        },
        {
          id: 5,
          bulan: "July",
          title: "JL",
        },
        {
          id: 6,
          bulan: "August",
          title: "AS",
        },
        {
          id: 7,
          bulan: "September",
          title: "S",
        },
        {
          id: 8,
          bulan: "October",
          title: "O",
        },
        {
          id: 9,
          bulan: "November",
          title: "N",
        },
        {
          id: 10,
          bulan: "December",
          title: "D",
        },
      ]);
  return (
    <div className="content-top mt-14">
        <Carousel
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                interval: 2000,
                numberOfSlides: 4,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {month?.map((i, key) => (
            <Item key={key} bulan={i.bulan} title={i.title}></Item>
          ))}
        </Carousel>
      </div>
  )
}

export default CarouselMonth