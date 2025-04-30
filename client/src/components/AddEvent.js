import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { adding_event } from "../redux/actions"; // Action pour ajouter un événement
import Button from "react-bootstrap/Button";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState(""); // Ajout du type d'événement

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, date, eventType };
    console.log("Submitting new event:", newEvent); 
    dispatch(adding_event(newEvent)); // Envoi de l'événement via Redux
    navigate("/events"); // Redirection vers la liste des événements
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1577382144834-8a80d92b925c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "655px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "450px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Ajouter un Nouvel Événement
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Nom de l'événement:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom de l'événement"
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Date de l'événement :</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Event Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Lieu de l'événement"
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Type d'événement :</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            >
              <option value="">Sélectionner le type d'événement</option>
              <option value="cinema">Cinéma</option>
              <option value="spectacle">Spectacle</option>
              <option value="sport">Sport</option>
            </select>
          </div>

          <Button type="submit" variant="success" style={{ width: "100%" }}>
          Ajouter l'événement
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;



//test github