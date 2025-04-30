import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adding_to_achat, authorized } from "../redux/actions";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [typeCarte, setTypeCarte] = useState("");
  const [numeroCarte, setNumeroCarte] = useState("");
  const [moisExpiration, setMoisExpiration] = useState("");
  const [anneeExpiration, setAnneeExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const ticket = useSelector((state) => state.tickets);
  const { id } = useParams();
  const utilisateurActuel = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  const annulerPaiement = () => {
    navigate("/listoftickets");
  };

  const validerCommande = (e) => {
    e.preventDefault();
    if (!typeCarte || !numeroCarte || !moisExpiration || !anneeExpiration || !cvv) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    if (ticket.quantity < 1) {
      alert("Veuillez saisir une quantité valide.");
      return;
    }
    if (!utilisateurActuel || !utilisateurActuel._id) {
      alert("Vous devez être connecté pour acheter un ticket.");
      return;
    }

    const donneesAchat = {
      ticketId: id,
      userId: utilisateurActuel._id,
    };
    dispatch(adding_to_achat(donneesAchat));
    alert("Commande validée avec succès !");
    navigate("/listoftickets");
  };

  return (
    <div style={styles.pageBackground}>
      <form style={styles.formContainer}>
        <h1 style={styles.title}>Paiement sécurisé</h1>
        <hr />

        <div style={styles.radioGroup}>
          <label style={styles.label}>Type de carte :</label>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <input
              type="radio"
              name="card"
              value="visa"
              onChange={(e) => setTypeCarte(e.target.value)}
              style={{ marginLeft: '90px' }}
            />
            <img src="/visa.png" alt="visa" style={styles.cardLogo} />

            <input
              type="radio"
              name="card"
              value="e-Dinar"
              onChange={(e) => setTypeCarte(e.target.value)}
            />
            <img src="/e-Dinar.jpg" alt="e-Dinar" style={styles.cardLogo} />
          </div>
        </div>

        <label style={styles.label}>Numéro de carte</label>
        <input
          type="text"
          placeholder="Entrez le numéro de carte"
          style={styles.input}
          onChange={(e) => setNumeroCarte(e.target.value)}
        />

        <label style={styles.label}>Date d’expiration</label>
        <div style={styles.expiryDate}>
          <select style={styles.input} onChange={(e) => setMoisExpiration(e.target.value)}>
            <option value="">Mois</option>
            {[
              "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
              "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ].map((mois, idx) => (
              <option key={idx} value={mois}>{mois}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Année"
            style={styles.input}
            onChange={(e) => setAnneeExpiration(e.target.value)}
          />
        </div>

        <label style={styles.label}>CVV</label>
        <input
          type="password"
          placeholder="ex : 123"
          maxLength={3}
          style={{ ...styles.input, width: "100px", marginLeft: '130px' }}
          onChange={(e) => setCvv(e.target.value)}
        />

        <div style={styles.buttonGroup}>
          <Button onClick={validerCommande} variant="success" style={styles.button}>
            Valider la commande
          </Button>
          <Button onClick={annulerPaiement} variant="danger" style={styles.button}>
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  pageBackground: {
    backgroundImage: "url('https://media.istockphoto.com/id/157444120/photo/close-up-of-white-colored-oyster-mushroom.jpg?s=612x612&w=0&k=20&c=X2QgogPDfoxc9vUh5jJGtIWKE1OUQhje1oIHjO9OTzs=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    width: "400px",
    maxWidth: "90%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },
  label: {
    marginTop: "15px",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "10px",
  },
  cardLogo: {
    width: "50px",
  },
  expiryDate: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    width: "48%",
  },
};

export default Payment;
