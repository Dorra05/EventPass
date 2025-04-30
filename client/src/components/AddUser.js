import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { adding_user, authorized, uploadImage } from "../redux/actions";
import { useNavigate } from "react-router";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [num, setNum] = useState(0);
  const [role, setRole] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  // const image = useSelector(state => state.image);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    dispatch(uploadImage(formData));

    // Preview image
    // setImagePreview(URL.createObjectURL(file));
  };

  const newUser = {
    fullname,
    email,
    password,
    image,
    role,
    num,
  };

  const addingUser = (e) => {
    e.preventDefault();
    // if (!fullname || !email || !password || !role || !num) {
    //   alert("Veuillez remplir tous les champs.");
    //   return;
    // }
    dispatch(adding_user(newUser));
    navigate(`/ListOfUsers`);
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Ajouter un nouvel utilisateur</h2>
        <hr/>
        <Form onSubmit={addingUser}>
          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Nom complet</Form.Label>
            <Form.Control
              style={styles.input}
              type="text"
              placeholder="Entrez votre nom complet"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Adresse e-mail</Form.Label>
            <Form.Control
              style={styles.input}
              type="email"
              placeholder="Entrez votre e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Mot de passe</Form.Label>
            <Form.Control
              style={styles.input}
              type="Mot de passe"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Numéro de téléphone</Form.Label>
            <Form.Control
              style={styles.input}
              type="number"
              placeholder="Entrez votre numéro de téléphone"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Rôle (admin/client)</Form.Label>
            <Form.Control
              style={styles.input}
              type="text"
              placeholder="admin ou client"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Télécharger une image de profil</Form.Label>
            <Form.Control
              style={styles.input}
              type="file"
              onChange={handleImageUpload}
            />
          </Form.Group>

          {/* {imagePreview && (
            <div style={styles.previewContainer}>
              <img src={imagePreview} alt="Image de profil" style={styles.previewImage} />
            </div>
          )} */}

          <Button variant="success" type="submit" style={styles.button}>
           Soumettre
          </Button>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    minHeight: "100vh",
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1718674393884-6cede49e0a64?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlja2V0JTIwZW4lMjBsaWduZXxlbnwwfHwwfHx8MA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2em",
    color: "#333",
  },
  label: {
    fontWeight: "600",
    fontSize: "1.1em",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1em",
  },
  button: {
    width: "100%",
    marginTop: "20px",
    fontSize: "1.2em",
    padding: "10px",
    borderRadius: "8px",
  },
};

export default AddUser;
