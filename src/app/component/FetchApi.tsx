'use client'
import axios from 'axios'
// import { Divide } from 'lucide-react'
import React, { useEffect } from 'react'

const urlApi = 'https://cooperative-server-a77x.onrender.com/ /cooperative-staff/all'

const FetchApi = () => {
    // const [data, setData] = useState(null);
    //   const [error, setError] = useState<string|null>(null);

    useEffect (()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get(urlApi,{
                    headers:{
                        // Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                });
                console.log(response.data)
            } catch(err){
                console.error('Error fetching data:', err)
            }
        }
        fetchData()
    },[])


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(urlApi, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }); 
//         console.log(response.data)

//         // No need to check response.ok as Axios automatically throws for HTTP errors
//         setData(response.data);
//       } catch (err:any) {
//         setError(err.message);
//         console.error('Axios Error:', err);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div>this</div>
    // <div>{loading ? <h1>loading...</h1>: <h2>click to load</h2>}</div>
  )
}

export default FetchApi