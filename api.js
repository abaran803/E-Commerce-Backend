const fetch = require("node-fetch");
const URL = "http://localhost:3001";

const GetAllData = async () => {
    try {
        const res = await fetch(`${URL}/show-items`);
        return await res.json();
    } catch(err) {
        console.log("Some error occured while fetching data")
        return "Something went wrong";
    }
}

GetAllData();