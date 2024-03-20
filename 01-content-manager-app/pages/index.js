import styles from "@/styles/Home.module.css";
import React, { useState , useEffect }  from "react";
import Layout from "@/components/Layout";
import ResourcesHighlight from "@/components/ResourcesHighlight";
import Newsletter from "@/components/Newsletter";
import ResourcesList from "@/components/ResourcesList";
import Footer from "@/components/Footer"

//import { resources } from "@/api/data.js"

function Home({resources}) {
// example to call end point from toher app from the front end
// useEffect(() =>{
//   fetch("http://localhost:3001/api/resources");
// },[])



  return (
    <>
      <Layout>
        <ResourcesHighlight
         resources={resources.slice(0,2)}
        />
        <Newsletter/>
        <ResourcesList
         resources={resources.slice(2)}
        />
        <Footer/>
      </Layout>
    </>
  );
}

//it is called every time you will visit the page
// function is executed on the server
export async function getServerSideProps(){

  const restData = await fetch("http://localhost:3001/api/resources");
  const data = await restData.json();
  //console.log(data);
  return {
    props:{
      resources: data
    }
  }

}




//it is called at the built time, and it's called onece
// in the new version of NExt.js has the property revalidate.. in that way update during the app is running..
// export async function getStaticProps(){

//   const restData = await fetch("http://localhost:3000/api/resources");
//   const data = await restData.json();

//   return {
//     props:{
//       myData1: [1,2,3],
//       myData2:["a","b","c"],
//       resources: data
//     }
//   }
// }



export default Home;