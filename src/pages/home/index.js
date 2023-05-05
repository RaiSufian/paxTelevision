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
    const [seasons, setSeasons] = useState([]);
    const [videos, setVideos] = useState([]);
    const [subcollectionData, setSubcollectionData] = useState([]);

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

    const fetchDataSubCollection = async () => {
        const db = firebase.firestore();

        // Get a reference to the parent collection
        const parentCollectionRef = db.collection('seasons');

        // Get a reference to the subcollection using the ID of a document in the parent collection
        const parentDocRef = parentCollectionRef.doc('KQuGxz1e5JkJ4q6vLtZ4');
        const subcollectionRef = parentDocRef.collection('all_seasons');

        // Retrieve the data from the subcollection
        const snapshot = await subcollectionRef.get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setSubcollectionData(data);
    };
    // const db = firebase.firestore();
    // const collectionRef = db.collection('seasons');

    useEffect(() => {
        fetchFirestoreData();
        fetchFirestoreVideos();
        fetchDataSubCollection();
    }, []);

    const allVideos = [...seasons, ...videos]


    console.log("Seasons data", subcollectionData)

    const localProgram = allVideos.filter(item => item.description == "Local Programs")
    const daramaProgram = allVideos.filter(item => item.description == "Drama")
    const kidsProgram = allVideos.filter(item => item.description == "Kids")
    const docuProgram = allVideos.filter(item => item.description == "Documentory")
    const LifeProgram = allVideos.filter(item => item.description == "Lifestyle")
    const aslProgram = allVideos.filter(item => item.description == "ASL")
    const inspProgram = allVideos.filter(item => item.description == "Inspirational")
    const musicProgram = allVideos.filter(item => item.description == "Music")
    console.log("Life Program", LifeProgram)

    return (
        <>
            <HeroVideo />
            <PromotedAds />
            <LiveLink />
            <SericesList title="Local Content" allVideos={localProgram && localProgram} />
            <SericesList title="Drama" allVideos={daramaProgram} />
            <SericesList title="Kids / Family" allVideos={kidsProgram} />
            <SericesList title="Documentry" allVideos={docuProgram} />
            <SericesList title="Inspirational" allVideos={inspProgram} />
            <SericesList title="Music" allVideos={musicProgram} />
            <SericesList title="Lifestyle" allVideos={LifeProgram && LifeProgram} />
            <SericesList title="American Sign Language (ASL)" allVideos={aslProgram && aslProgram} />
            {/* <Inspirational /> */}
            <AboutHome />
            <ContactUs />
        </>
    )
}
export default Home;