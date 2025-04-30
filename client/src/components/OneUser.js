import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { authorized, getting_one_user } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const OneUser = ({ _id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getting_one_user(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  return (
    <>
      {user ? (
        <div style={styles.container}>
          <Card style={styles.card}>
            <Card.Img
              src={user.image}
              alt="userImage"
              style={styles.cardImage}
            />
            <Card.Body style={styles.cardBody}>
              <Card.Title style={styles.cardTitle}>
              M. ou Mme: {user.fullname}
              </Card.Title>
              <Card.Text style={styles.cardText}>
                Email: {user.email}
                <br />
                Le numéro de téléphone est: {user.num}
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "92.8vh",
    marginTop: "10px",
    backgroundImage: "url('https://media.istockphoto.com/id/1060797120/photo/man-and-woman-doing-push-ups-together.jpg?s=612x612&w=0&k=20&c=_GIKVrcqpQjuuqSF5kqdqZYXfJZMnHTcaELjpoVgblE=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    width: "18rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  cardImage: {
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  cardBody: {
    textAlign: "center",
    padding: "20px",
  },
  cardTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: "1.1em",
    color: "#555",
  },
  loading: {
    textAlign: "center",
    fontSize: "1.5em",
    color: "#888",
  },
};

export default OneUser;

