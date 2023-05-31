import axios from 'axios'

export const api = axios.create({
  baseURL: "https://foodexplorer-server.onrender.com"
  // baseURL: "http://localhost:3334"
})

// For production use: https://foodexplorer-server.onrender.com
// For development use: http://localhost:3334