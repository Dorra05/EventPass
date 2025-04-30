import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_all_tickets } from "../redux/actions";
import Ticket from "./Ticket";

const ListofTickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets)||[];

  useEffect(() => {
    dispatch(getting_all_tickets());
  }, [dispatch]);

  return (
    <>
      
        <div
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            padding: "40px 20px",
            position: "relative",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "3em",
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                marginBottom: "30px",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontFamily: "fantasy",
              }}
            >
              Bienvenue dans votre expérience événementielle ultime avec EventPass !
            </h1>
            <div
              style={{
                display: "flex",
                marginRight: "30px",
                justifyContent: "space-around",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {Array.isArray(tickets) &&
                tickets.map((ticket) => (
                  <Ticket key={ticket._id} {...ticket} />
                ))}
            </div>
          </div>
        </div>
    </>
  );
};
export default ListofTickets;
