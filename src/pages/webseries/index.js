import { useState, useEffect } from "react";
import WebProfile from "./webProfile";
import ContactUs from "../home/contactUs";
import Findvideos from "./findvideo";
import { useParams } from 'react-router-dom';
import firebase from "../../firebase";
import 'firebase/firestore';
const WebSeries = () => {
    const { id } = useParams();
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
        const parentDocRef = parentCollectionRef.doc(id);
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
    const singleVideo = allVideos.filter(item => item.id == id)
    const detailVideo = singleVideo[0] && singleVideo[0]

    console.log("Life Program", subcollectionData)
    return (
        <>
            <WebProfile detailVideo={detailVideo} />
            {subcollectionData?.length > 0 ?
                <Findvideos subcollectionData={subcollectionData} name={detailVideo?.name} /> : ''
            }
            <ContactUs />

        </>
    )
}
export default WebSeries;