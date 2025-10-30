import { useParams } from 'react-router-dom';
import detectCategory from '../utils/category';
import Event from '../components/Event';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Categories  ()  {
    const { slug } = useParams(); 
    const [events , setEvents]= useState([]);

    const categoryNames = {
    sport: "Sport & Bien-être",
    culture: "Culture & Spectacles",
    immersif: "Jeux & Expériences immersives",
    loisirs: "Famille & Loisirs",
  };
 const categoryName = categoryNames[slug]; 
 const loadCategoriesFilter = async()  =>{
    try {
        const res = await  fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20") 
        const data = await res.json();
        const results = data?.results || [];
        const filtered = results.filter((event) => {
          const detected = detectCategory(event.title, event.description);
          return detected === categoryName;
        });
        setEvents(filtered);
        
        
        
    } catch (error) {
       console.error("Erreur lors du fetch" , error)
    }
    
 }
    
 useEffect(() => {
            loadCategoriesFilter()
        }, [categoryName])
    return (
        <div>
            <h1>{categoryName}</h1>
            <Event events={events}/>
        </div>
    );
};

