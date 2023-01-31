import React from 'react'
import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
    const [people, setPeople] = useState(profiles);
    const countries = [];
    people.map(person => {
        countries.push(person.country)
    });

    function filterCountry(country) {
        const filteredPeople = people.filter((person) => {
            console.log(person.country)
            console.log("this is the country", country)
            return person.country === country;
        });
        console.log(filteredPeople)
        setPeople(filteredPeople);
    };

  return (
    <div>
        {countries.map(country => {
            return (
                <button onClick={() => {filterCountry(country)}}>{country}</button>
            )
        })}
        {people.map(person => {
             return (<div style={{display: "flex", 
             justifyContent: "center",
             gap: "15px", 
             margin: "5px 5px",
             border: "1px solid black"
             }}>
                <img src={person.img} style={{width: "200px"}}/>
                <div>
                    <b><p>FirstName: {person.firstName}</p></b>
                    <b><p>LastName: {person.lastName}</p></b>
                    <b><p>Country: {person.country}</p></b>
                    <b><p>Type: {person.isStudent ? "Student": "Teacher"}</p></b>
                </div>
            </div>
        )})}
    </div>
  )
}

export default Facebook