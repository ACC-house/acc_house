import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/acc_house",
    headers: {
        "Content-type": "application/json"
    }
})