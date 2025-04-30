import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { adding_ticket } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const AddingTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lieu, setPlace] = useState("");
  const [prix, setPrice] = useState("");
  const [quantité, setQuantity] = useState("");

  const newTicket = {
    lieu,
    prix,
    quantité,
  };

  const ticketADD = (e) => {
    e.preventDefault();
    if (!lieu || !prix || !quantité) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    dispatch(adding_ticket(newTicket));
    alert("Ticket ajouté avec succès !");
    navigate("/listoftickets");
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Ajouter un Nouveau Billet 🎟️</h2>
        <form onSubmit={ticketADD} style={styles.form}>
          <label style={styles.label}>Lieu :</label>
          <input
            style={styles.input}
            type="text"
            value={lieu}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Entrez le lieu"
            required
          />

          <label style={styles.label}>Prix</label>
          <input
            style={styles.input}
            type="number"
            value={prix}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Entrez le prix"
            required
          />

          <label style={styles.label}>Quantité :</label>
          <input
            style={styles.input}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            required
          />

          <div style={styles.buttonGroup}>
            <Button type="submit" variant="success" style={styles.button}>
            Ajouter le Billet
            </Button>
            <Button
              type="button"
              variant="danger"
              style={styles.button}
              onClick={() => navigate("/")}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    minHeight: "100vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww')", // Remplace par une image d'événement spécifique
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    width: "400px",
    maxWidth: "90%",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    textAlign: "left",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1em",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    width: "45%",
  },
};

export default AddingTicket;
