import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_all_events } from "../redux/actions"; 
import EventCard from "./EventCard"; // 

const ListOfEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getting_all_events());
  }, [dispatch]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://media.istockphoto.com/id/1482844702/photo/crowd-of-smart-tech-people-applauding-in-dark-conference-hall-during-a-motivational-keynote.jpg?s=612x612&w=0&k=20&c=MT4NoWUMEWyUpY5kZhknLMrguapPvYgOjrY8ggqcwWg=)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "3rem",
          marginBottom: "40px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        All Events
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event._id}
              _id={event._id}
              name={event.name}
              date={event.date}
              location={event.location}
            />
          ))
        ) : (
          <h2 style={{ color: "white" }}>Aucun événement disponible.</h2>
        )}
      </div>
    </div>
  );
};

export default ListOfEvents;
