import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import firebase from "../../firebase";
import 'firebase/firestore';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [password, setPassword] = useState('');
    const onCountryChange = (val) => {
        setCountry(val);
        setRegion('');
    };

    const onRegionChange = (val) => {
        setRegion(val);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const db = firebase.firestore();
        await db.collection('members').add({
            username: name,
            email: email,
            email: email,
            phone: phone,
            country: country,
            state: region,
        });
        setName('');
        setEmail('');
    };

    return (
        <div>
            <div className='p-10'>
                <div className="max-w-md p-3 m-auto bg-themeColor rounded-xl">
                    <div className="w-32 m-auto">
                        <img src="/images/PAXlogo.webp" alt="logo" className="w-full" />
                    </div>
                    <form className="w-full my-6">
                        <div className="mb-2">
                            <label
                                for="Name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                value={name} onChange={(event) => setName(event.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Phone Number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Phone Number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Select a country
                            </label>
                            <CountryDropdown
                                value={country}
                                onChange={onCountryChange}
                                classes='block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Phone Number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                State or Province
                            </label>
                            <RegionDropdown
                                country={country}
                                value={region}
                                onChange={onRegionChange}
                                classes='block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'

                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Phone Number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Zip Code or Postal Code
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Create a Password*
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Confirm Your Password*
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-transparent border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-orange hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp