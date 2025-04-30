import { 
  ADDING_EVENT,
  ADDING_TICKET,
  ADDING_TO_ACHAT,
  ADDING_USER,
  AUTHORIZED,
  CLOSE_SIGNIN_MODAL,
  DELETE_TICKET,
  GETTING_ALL_EVENTS,
  GETTING_ALL_TICKETS,
  GETTING_ONE_USER,
  GETTING_USERS,
  LOG_OUT,
  LOGGING_USER,
  OPEN_SIGNIN_MODAL,
  SET_IMAGE,
} from "./actionTypes";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
  image: null,
  tickets: [],
  achats: [],
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_USER:
      // Ajouter un nouvel utilisateur (token stocké côté serveur ou ailleurs)
      return {
        ...state,
        users: action.payload.newOne,
        // token: action.payload.token, // décommenter si besoin
      };
    case GETTING_ONE_USER:
      // Récupérer un utilisateur spécifique
      return { ...state, users: action.payload };
    case LOGGING_USER:
      // Connexion de l'utilisateur : on stocke le token et les infos
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        users: action.payload.user,
        token: action.payload.token,
      };
    case LOG_OUT:
      // Déconnexion de l'utilisateur : suppression du token
      localStorage.removeItem("token");
      return { ...state, users: null, token: null };
    case AUTHORIZED:
      // Autorisation confirmée via le token
      return { ...state, users: action.payload.user };
    case SET_IMAGE:
      // Définir l'image de l'utilisateur
      return { ...state, image: action.payload };
    case ADDING_TICKET:
      // Ajouter un ticket à la liste
      return { ...state, tickets: [...state.tickets, action.payload] };
    case GETTING_ALL_TICKETS:
      // Charger tous les tickets
      return { ...state, tickets: action.payload };
    case GETTING_USERS:
      // Récupérer tous les utilisateurs
      return { ...state, users: action.payload };
    case DELETE_TICKET:
      // Supprimer un ticket (le payload doit contenir la nouvelle liste ou confirmation)
      return { ...state, products: action.payload }; // à corriger si `products` est incorrect
    case ADDING_TO_ACHAT:
      // Ajouter un achat lié à un utilisateur
      return { ...state, achats: action.payload.ticketOfUser };
    case OPEN_SIGNIN_MODAL:
      // Ouvrir le modal de connexion
      return { ...state, isSigninModalOpen: true };
    case CLOSE_SIGNIN_MODAL:
      // Fermer le modal de connexion
      return { ...state, isSigninModalOpen: false };
    case ADDING_EVENT:
      // Ajouter un événement à la liste
      console.log("Updated events in reducer:", action.payload);
      return { ...state, events: [...state.events, action.payload] };
    case GETTING_ALL_EVENTS:
      // Charger tous les événements
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
export default reducer;
