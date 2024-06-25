'use client'

import Icon from '@mdi/react';
import { mdiAccount, mdiStar, mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import {useState} from "react";
import {display} from "@mui/system";

const CARD_SIZE = 240 // pixels
const GAP_SIZE = 24

function Reviews() {
  const [offset, setOffset] = useState((CARD_SIZE+GAP_SIZE)*(reviews.length/2)-(GAP_SIZE/2));

  const shiftLeft = () => {
    if ((offset-(CARD_SIZE+GAP_SIZE)) >= 0) {
      setOffset(offset-(CARD_SIZE+GAP_SIZE))
    }
    console.log(offset-(CARD_SIZE+GAP_SIZE) < 0)
  }

  const shiftRight = () => {
    if ((offset+(CARD_SIZE+GAP_SIZE)) <= (CARD_SIZE+GAP_SIZE)*reviews.length) {
      setOffset(offset+(CARD_SIZE+GAP_SIZE))
    }
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 gap-10 overflow-hidden">
      <div className="flex items-center text-center flex-col">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-dark-blue via-dark-pink to-dark-purple text-5xl font-bold p-6">
          Our reviews.
        </h1>
        <p className="dark:text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="relative w-screen h-60">
        <div
          className="flex gap-6 justify-center absolute left-1/2 top-1/2 transition duration-1000"
          style={{transform: `translate(-${offset}px, -50%)`}}
        >
          {reviews.map((review) => (
            <div
              key={review.reviewer}
              className="w-60 self-start dark:bg-black bg-neutral-200 p-6 rounded shadow-2xl dark:shadow-neutral-800 border hover:scale-105
              flex flex-col items-center text-center dark:border-white-trans group transition duration-500 gap-2 line-clamp-1"
            >
              <div className="flex gap-2 items-center">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full dark:group-hover:bg-neutral-800
                transition duration-500 bg-white dark:bg-neutral-800 group-hover:text-white group-hover:bg-dark-purple">
                  <Icon path={mdiAccount} size={1}/>
                </div>
                <p className="font-semibold">{review.reviewer}</p>
              </div>
              <p className="dark:text-neutral-400 text-neutral-700 line-clamp-4">{review.comment}</p>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} path={mdiStar} size={1} className="text-yellow-500"/>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-neutral-100 dark:from-black to-transparent
          p-4 h-full w-32 md:w-96 flex items-center justify-start"
          onClick={shiftLeft}>
          <Icon
            path={mdiArrowLeft}
            size={1}
            className="transition duration-1000"
            style={{opacity: offset-(CARD_SIZE+GAP_SIZE) < 0 ? '0' : '1'}}
          />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-neutral-100 dark:from-black to-transparent
          p-4 h-full w-32 md:w-96 flex items-center justify-end"
          onClick={shiftRight}>
          <Icon
            path={mdiArrowRight}
            size={1}
            className="transition duration-1000"
            style={{opacity: offset+(CARD_SIZE+GAP_SIZE) >= (CARD_SIZE+GAP_SIZE)*reviews.length ? '0' : '1'}}
          />
        </button>
      </div>
    </section>
  );
}

export default Reviews

const reviews = [
  {
    reviewer: "Jane Smith",
    rating: 4,
    comment: "Great design and development work. The team was very responsive to our needs.",
    date: "2024-01-10"
  },
  {
    reviewer: "Robert Brown",
    rating: 5,
    comment: "Exceptional quality and attention to detail. Highly recommend!",
    date: "2024-01-08"
  },
  {
    reviewer: "Emily Davis",
    rating: 3,
    comment: "Good service but communication could be improved.",
    date: "2024-01-05"
  },
  {
    reviewer: "Michael Wilson",
    rating: 4,
    comment: "Very satisfied with the outcome. The team was professional and efficient.",
    date: "2024-01-02"
  },
  {
    reviewer: "Sarah Johnson",
    rating: 5,
    comment: "Exceeded our expectations in every way. Excellent work!",
    date: "2023-12-29"
  },
  {
    reviewer: "David Martinez",
    rating: 4,
    comment: "Solid work, delivered on time. Would work with them again.",
    date: "2023-12-26"
  },
  {
    reviewer: "Linda Hernandez",
    rating: 5,
    comment: "Outstanding service and great results. Highly recommended.",
    date: "2023-12-22"
  },
  {
    reviewer: "James Lee",
    rating: 4,
    comment: "Very good experience. The team was helpful and skilled.",
    date: "2023-12-19"
  },
  {
    reviewer: "Patricia King",
    rating: 5,
    comment: "Incredible attention to detail and superb service. A pleasure to work with.",
    date: "2023-12-15"
  },
  {
    reviewer: "Daniel Wright",
    rating: 3,
    comment: "Overall good, but some delays in communication.",
    date: "2023-12-12"
  },
  {
    reviewer: "Barbara Allen",
    rating: 5,
    comment: "Absolutely fantastic! Our project was a huge success.",
    date: "2023-12-08"
  },
  {
    reviewer: "Paul Young",
    rating: 4,
    comment: "Great results, but a bit pricey.",
    date: "2023-12-05"
  },
  {
    reviewer: "Nancy Scott",
    rating: 5,
    comment: "Top-notch service. Will definitely use their services again.",
    date: "2023-12-01"
  },
  {
    reviewer: "Mark Harris",
    rating: 4,
    comment: "Very professional and delivered high-quality work.",
    date: "2023-11-28"
  },
  {
    reviewer: "Laura Clark",
    rating: 5,
    comment: "Exceeded our expectations. Fantastic work!",
    date: "2023-11-24"
  },
  {
    reviewer: "Kevin Lewis",
    rating: 4,
    comment: "Good service and quality work, but a bit slow on updates.",
    date: "2023-11-20"
  },
  {
    reviewer: "Betty Walker",
    rating: 5,
    comment: "Excellent from start to finish. Highly recommend!",
    date: "2023-11-16"
  },
  {
    reviewer: "Brian Robinson",
    rating: 4,
    comment: "Great work, though a bit expensive.",
    date: "2023-11-12"
  },
  {
    reviewer: "Karen Hall",
    rating: 5,
    comment: "Amazing service! Our go-to for all future projects.",
    date: "2023-11-08"
  }
];
