// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [])
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } 
        else {
            return (
          <div>
            <img src='https://images.dog.ceo/breeds/bulldog-english/mami.jpg' alt='A Random Dog' />
          </div>
        )
    }
}

export default App;