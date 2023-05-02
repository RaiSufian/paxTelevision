import { useState, useEffect } from "react";
import HeroVideo from "./herovideo";
import PromotedAds from "./promotedAds";
import LiveLink from "./liveLink";
import SericesList from "./sericesList";
import AboutHome from "./aboutHome";
import ContactUs from "./contactUs";
import Inspirational from './Inspirational';
import VariableSilder from "./variableSlider";
import firebase from "../../firebase";
import 'firebase/firestore';

const Home = () => {

    const [info, setInfo] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [videos, setVideos] = useState([]);

    // Start the fetch operation as soon as
    // the page loads
    // window.addEventListener('load', () => {
    //     Fetchdata();
    // });

    // Fetch the required data using the get() method
    const fetchFirestoreData = () => {
        const db = firebase.firestore();
        const collectionRef = db.collection('seasons');

        collectionRef.get().then((querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push(doc.data());
            });
            setSeasons(documents);
        }).catch((error) => {
            console.error(error);
        });
    };
    const fetchFirestoreVideos = () => {
        const db = firebase.firestore();
        const collectionRef = db.collection('videos');

        collectionRef.get().then((querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push(doc.data());
            });
            setVideos(documents);
        }).catch((error) => {
            console.error(error);
        });
    };
    // const db = firebase.firestore();
    // const collectionRef = db.collection('seasons');

    useEffect(() => {
        fetchFirestoreData();
        fetchFirestoreVideos();
        // const ref = firebase.firestore().ref('seasons');
        // ref.on('value', snapshot => {
        //     const val = snapshot.val();
        //     setData(val);
        // });
    }, []);

    const allVideos = [...seasons, ...videos]


    console.log("Seasons data", allVideos)
    console.log("Videos data", videos)

    const localProgram = allVideos.filter(item => item.description == "Local Programs")
    console.log("Local Content", localProgram)
    const daramaProgram = allVideos.filter(item => item.description == "Drama")
    const kidsProgram = allVideos.filter(item => item.description == "Kids")
    const docuProgram = allVideos.filter(item => item.description == "Documentory")
    const LifeProgram = allVideos.filter(item => item.description == "Lifestyle")
    console.log("Local Content", daramaProgram)


    return (
        <>
            <HeroVideo />
            <PromotedAds />
            <LiveLink />
            <SericesList title="Local Content" allVideos={localProgram && localProgram} />
            <SericesList title="Drama" allVideos={daramaProgram} />
            <SericesList title="Kids / Family" allVideos={kidsProgram} />
            <SericesList title="Documentry" allVideos={docuProgram} />
            <VariableSilder title="Lifestyle" allVideos={LifeProgram} />
            <VariableSilder title="American Sign Language (ASL)" />
            <Inspirational />
            <AboutHome />
            <ContactUs />
        </>
    )
}
export default Home;