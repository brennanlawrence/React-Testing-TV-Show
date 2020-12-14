import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Episodes from "./Episodes";

const episodes = [
  {
    id: 1,
    number: 1,
    season: 1,
    name: "foo",
    summary: "bar",
    runtime: 60,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    }
  },
  {
    id: 2,
    number: 2,
    season: 2,
    name: "foo",
    summary: "bar",
    runtime: 60,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    }
  }
]

test("Renders successfully", () => {
  render(<Episodes episodes={episodes}/>)
});