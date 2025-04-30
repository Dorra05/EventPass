import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_users } from "../redux/actions";

const ListOfUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users) || [];

  useEffect(() => {
    dispatch(getting_users());
  }, [dispatch]);

  return (
    <div style={styles.pageBackground}>
      <h1 style={styles.header}>Liste des utilisateurs</h1>
      <hr style={styles.hr} />
      <div style={styles.usersContainer}>
        {Array.isArray(users) &&
          users.map((Element) => (
            <div key={Element._id} style={styles.userCard}>
              <img
                style={styles.userImage}
                src={Element.image}
                alt="photoUtilisateur"
              />
              <div style={styles.userInfo}>
                <h3 style={styles.userName}>{Element.fullname}</h3>
                <p style={styles.userDetail}>Email : {Element.email}</p>
                <p style={styles.userDetail}>Numéro de téléphone : {Element.num}</p>
                <p style={styles.userDetail}>Rôle : {Element.role}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    minHeight: "100vh",
    backgroundImage: "url('https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  header: {
    fontSize: "2.5em",
    textAlign: "center",
    color: "white",
    marginBottom: "20px",
    fontFamily: "'Roboto', sans-serif",
    textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
  },
  hr: {
    width: "50%",
    margin: "0 auto",
    border: "1px solid white",
  },
  usersContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  userCard: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "300px",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  userImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "10px",
    objectFit: "cover",
  },
  userInfo: {
    marginTop: "15px",
  },
  userName: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  userDetail: {
    fontSize: "1.1em",
    color: "#555",
    marginBottom: "5px",
  },
};

export default ListOfUsers;
