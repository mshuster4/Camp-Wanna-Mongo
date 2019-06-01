import axios from "axios";
import Auth from "./Auth";

const headers = () => {
  const options = {};
  // if authenticated create Authorization header to add to api calls
  if (Auth.isAuthenticated()) {
    options["headers"] = {
      "Authorization": `Bearer ${Auth.getToken()}`
    }
  }
  return options;
}

export default {
  
  login: function(loginInfo) {
    // send user login info to API
    return axios.post("/api/auth/login", loginInfo);
  },
  signup: function(signupInfo) {
    // send user signup info to API
    return axios.post("/api/auth/signup", signupInfo);
  },
  getPlayers: function() {
    return axios.get("/api/players");
  },
  postPlayerMathScore: function(playerData) {
    return axios.post("api/players", {  mathPoints: playerData })
  },
  setPlayerRank: function(id) {
    return axios.put("api/players" + id)
  }

};