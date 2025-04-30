import axios from "axios";
import {
  ADDING_TICKET,
  ADDING_USER,
  AUTHORIZED,
  DELETE_TICKET,
  GETTING_ALL_TICKETS,
  GETTING_ONE_USER,
  GETTING_USERS,
  LOG_OUT,
  LOGGING_USER,
  SET_IMAGE,
  UPDATING_USER,
  ADDING_TO_ACHAT,
  OPEN_SIGNIN_MODAL,
  CLOSE_SIGNIN_MODAL,
  GETTING_ALL_EVENTS,
  ADDING_EVENT,
} from "./actionTypes";

// Ajouter un nouvel utilisateur
export const ajouter_utilisateur = (nouveau) => async (dispatch) => {
  try {
    const res = await axios.post("/users/adduser", nouveau);
    dispatch({ type: ADDING_USER, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// Récupérer un utilisateur par ID
export const recuperer_un_utilisateur = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/users/getOneUser/${id}`);
    dispatch({ type: GETTING_ONE_USER, payload: res.data.OneUser });
  } catch (error) {
    console.error("Erreur :", error);
  }
};

// Connexion d’un utilisateur
export const connecter_utilisateur = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", user);
    dispatch({ type: LOGGING_USER, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// Déconnexion
export const deconnexion = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};

// Authentifier un utilisateur via token
export const verifier_autorisation = () => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get("/users/auth", config);
    dispatch({ type: AUTHORIZED, payload: res.data });
  } catch (error) {
    console.error(
      "Erreur d'authentification :",
      error.response?.data || error.message
    );
  }
};

// Upload d'une image
export const televerser_image = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("users/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: SET_IMAGE, payload: res.data });
  } catch (error) {
    console.error("Erreur lors de l’upload de l’image", error);
  }
};

// Ajouter un billet
export const ajouter_billet = (nouveauBillet) => async (dispatch) => {
  try {
    const res = await axios.post("/tickets/addTicket", {
      seates_zone: nouveauBillet.place,
      totalprice: nouveauBillet.price,
      quantity: nouveauBillet.quantity,
    });
    dispatch({ type: ADDING_TICKET, payload: res.data.newTicket });
  } catch (error) {
    console.error("Erreur lors de l’ajout du billet", error);
  }
};

// Récupérer tous les billets
export const recuperer_tous_les_billets = () => async (dispatch) => {
  try {
    const res = await axios.get("/tickets/getAlltickets");
    dispatch({ type: GETTING_ALL_TICKETS, payload: res.data.Alltickets });
  } catch (error) {
    console.error(error);
  }
};

// Récupérer tous les utilisateurs
export const recuperer_utilisateurs = () => async (dispatch) => {
  try {
    const res = await axios.get(`/users/getUsers`);
    dispatch({ type: GETTING_USERS, payload: res.data.allUsers });
  } catch (error) {
    console.error(error);
  }
};

// Supprimer un billet
export const supprimer_billet = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/tickets/deleting/${_id}`);
    dispatch({ type: DELETE_TICKET, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// Mettre à jour un utilisateur
export const mettre_a_jour_utilisateur = (id, nouveau) => async (dispatch) => {
  try {
    const res = await axios.put(`/users/updateUser/${id}`, nouveau);
    dispatch({ type: UPDATING_USER, payload: res.data.NewUpdated });
  } catch (error) {
    console.error(error);
  }
};

// Ajouter un achat
export const ajouter_achat = (achatData) => async (dispatch) => {
  try {
    const res = await axios.post(`/achats/addAchat`, achatData);
    dispatch({ type: ADDING_TO_ACHAT, payload: res.data });
  } catch (error) {
    console.error("Erreur lors de l’ajout à l’achat :", error);
  }
};

// Ouvrir le modal de connexion
export const ouvrir_modal_connexion = () => ({
  type: OPEN_SIGNIN_MODAL,
});

// Fermer le modal de connexion
export const fermer_modal_connexion = () => ({
  type: CLOSE_SIGNIN_MODAL,
});

// Ajouter un événement
export const ajouter_evenement = (nouvelEvent) => async (dispatch) => {
  try {
    const res = await axios.post("/events/addEvent", nouvelEvent);
    console.log("Réponse API :", res);
    dispatch({ type: ADDING_EVENT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// Récupérer tous les événements
export const recuperer_evenements = () => async (dispatch) => {
  try {
    const res = await axios.get("/events/getAllEvents");
    dispatch({ type: GETTING_ALL_EVENTS, payload: res.data.AllEvents });
  } catch (error) {
    console.error(error);
  }
};
