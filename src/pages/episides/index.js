import { useState, useEffect } from "react";
import WebProfile from "./webProfile";
import ContactUs from "../home/contactUs";
import Findvideos from "./findvideo";
import { useParams } from 'react-router-dom';
import firebase from "../../firebase";
import 'firebase/firestore';

const WebSeries = () => {

    const { id } = useParams();
    const [subcollectionDataOne, setSubcollectionDataOne] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState('')
    useEffect(() => {
        const storedSeasons = localStorage.getItem('seasonId');
        setSelectedSeason(storedSeasons)
    }, []);

    // const fetchDataSubCollection = async () => {
    //     const db = firebase.firestore();

    //     // Get a reference to the parent collection
    //     const parentCollectionRef = db.collection('all_seasons');

    //     // Get a reference to the subcollection using the ID of a document in the parent collection
    //     const parentDocRef = parentCollectionRef.doc(id);
    //     const subcollectionRef = parentDocRef.collection('episodes');

    //     // Retrieve the data from the subcollection
    //     const snapshot = await subcollectionRef.get();
    //     const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //     setSubcollectionData(data);
    // };
    // const db = firebase.firestore();
    // const collectionRef = db.collection('seasons');



    useEffect(() => {
        setTimeout(async () => {
            const seasonView = firebase.firestore().collection('seasons');

            // Reference the first nested subcollection
            const allSeasonView = seasonView.doc(selectedSeason ? selectedSeason : '2IDRzn5W826z91d9CPiH').collection('all_seasons');

            // Reference the second nested subcollection
            const allEpisodes = allSeasonView.doc(id).collection('episodes');

            // Fetch documents from the third nested subcollection
            const snapshot = await allEpisodes.get();
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setSubcollectionDataOne(data);

        }, 1000)

    }, [selectedSeason]);
    return (
        <>
            <section className="pb-5 text-white bg-black">
                <h2 className="mb-3 lg:px-40 md:px-20 px-5 text-[#a8a8a8] text-4xl font-bold tracking-widest py-6"> {subcollectionDataOne[0]?.about} </h2>
            </section>
            {subcollectionDataOne?.length > 0 ?
                <Findvideos subcollectionData={subcollectionDataOne} /> : ''
            }
            <ContactUs />
        </>
    )
}
export default WebSeries;