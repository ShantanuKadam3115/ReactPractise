import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data,setData] = useState(null)
  const [loading, setLoading] = useState(false)

  function handelFooterShowup() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      axios
      .get(
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      )
      .then((response) => {
        // console.log(response)
        const apiData = response.data;
        setData(apiData)
        console.log("DATA\n", apiData);
      }).catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (<Main data = {data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && <SideBar data = {data} handelFooterShowup={handelFooterShowup} />}
      {data && (<Footer data = {data} handelFooterShowup={handelFooterShowup} />)}
    </>
  );
}

export default App;
