// import React, { useState } from 'react';
// import axios from 'axios';

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// const App = () => {
//   const [tourDuration, setTourDuration] = useState('Full-day');
//   const [tourTheme, setTourTheme] = useState('');
//   const [walkingDistance, setWalkingDistance] = useState('');
//   const [pointOfDeparture, setPointOfDeparture] = useState('');
//   const [tourDescription, setTourDescription] = useState('');

//   const generateTourGuideDescription = async () => {
//     const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

//     const requestBody = {
//       prompt,
//       max_tokens: 1000,
//       temperature: 0.2,
//       stop: ['\n']
//     };
    

//     console.log('API URL:', apiUrl);
//     console.log('Request Body:', requestBody);

//     try {
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`
//         }
//       });

//       console.log('API Response:', response.data);
//     console.log('Choices:', response.data.choices);

//     if (response.status >= 200 && response.status < 300) {
//       const generatedTourDescription = response.data.choices[0]?.text.trim();
//       console.log('Generated Tour Description:', generatedTourDescription);

//       // Set the generated tour description to the tourDescription state
//       setTourDescription(generatedTourDescription);
//     } else {
//       console.error('Error Response:', response.data);
//       setTourDescription('Error fetching tour description. Please try again.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     setTourDescription('Error fetching tour description. Please try again.');
//   }
// };

//   return (
//     <div>
//       <h1>Self-Guided Tour App</h1>
//       <div>
//         <label htmlFor="duration">Tour Duration:</label>
//         <select id="duration" value={tourDuration} onChange={(e) => setTourDuration(e.target.value)}>
//           <option value="Full-day">Full-day</option>
//           <option value="Half-day">Half-day</option>
//           <option value="2 hours">2 hours</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="theme">Tour Theme:</label>
//         <input type="text" id="theme" value={tourTheme} onChange={(e) => setTourTheme(e.target.value)} placeholder="e.g., Historical" />
//       </div>
//       <div>
//         <label htmlFor="distance">Walking Distance:</label>
//         <input type="text" id="distance" value={walkingDistance} onChange={(e) => setWalkingDistance(e.target.value)} placeholder="e.g., Moderate" />
//       </div>
//       <div>
//         <label htmlFor="departure">Point of Departure:</label>
//         <input type="text" id="departure" value={pointOfDeparture} onChange={(e) => setPointOfDeparture(e.target.value)} placeholder="e.g., Battery Park" />
//       </div>
//       <button onClick={generateTourGuideDescription}>Generate Tour</button>
//       <textarea id="tourDescription" cols="80" rows="10" value={tourDescription} readOnly />
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// const App = () => {
//   // State for tour description and typing indicator
//   const [tourDuration, setTourDuration] = useState('Full-day');
//   const [tourTheme, setTourTheme] = useState('');
//   const [walkingDistance, setWalkingDistance] = useState('');
//   const [pointOfDeparture, setPointOfDeparture] = useState('');
//   const [tourDescription, setTourDescription] = useState('');
//   const [typing, setTyping] = useState(false);

//   // Function to generate tour description
//   const generateTourGuideDescription = async () => {
//     // Your prompt and other request body parameters
//     const prompt = `Tour Duration: ${tourDuration}\nTour Theme: ${tourTheme}\nWalking Distance: ${walkingDistance}\nPoint of Departure: ${pointOfDeparture}\n`;

//     const requestBody = {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: 'Explain all concepts like I am 10 years old.',
//         },
//         {
//           role: 'user',
//           content: prompt,
//         },
//       ],
//     };

//     // API call to OpenAI
//     try {
//       setTyping(true);
//       const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });

//       setTyping(false);
//       const tourGuideDescription = response.data.choices[0]?.message.content;
//       setTourDescription(tourGuideDescription);
//     } catch (error) {
//       console.error('Error:', error);
//       setTyping(false);
//       setTourDescription('Error fetching tour description. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Self-Guided Tour App</h1>
//       <div>
//         <label htmlFor="duration">Tour Duration:</label>
//         <select id="duration" value={tourDuration} onChange={(e) => setTourDuration(e.target.value)}>
//           <option value="Full-day">Full-day</option>
//           <option value="Half-day">Half-day</option>
//           <option value="2 hours">2 hours</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="theme">Tour Theme:</label>
//         <input type="text" id="theme" value={tourTheme} onChange={(e) => setTourTheme(e.target.value)} placeholder="e.g., Historical" />
//       </div>
//       <div>
//         <label htmlFor="distance">Walking Distance:</label>
//         <input type="text" id="distance" value={walkingDistance} onChange={(e) => setWalkingDistance(e.target.value)} placeholder="e.g., Moderate" />
//       </div>
//       <div>
//         <label htmlFor="departure">Point of Departure:</label>
//         <input type="text" id="departure" value={pointOfDeparture} onChange={(e) => setPointOfDeparture(e.target.value)} placeholder="e.g., Battery Park" />
//       </div>
//       <button onClick={generateTourGuideDescription}>Generate Tour</button>
//       <div>
//         {typing && <p>ChatGPT is typing...</p>}
//         <textarea id="tourDescription" cols="80" rows="10" value={tourDescription} readOnly />
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// const App = () => {
//   // State for tour description
//   const [tourDuration, setTourDuration] = useState('Full-day');
//   const [tourTheme, setTourTheme] = useState('');
//   const [walkingDistance, setWalkingDistance] = useState('');
//   const [pointOfDeparture, setPointOfDeparture] = useState('');
//   const [tourDescription, setTourDescription] = useState('');

//   // Function to generate tour description
//   const generateTourGuideDescription = async () => {
//     // Your prompt and other request body parameters
//     const prompt = `Tour Duration: ${tourDuration}\nTour Theme: ${tourTheme}\nWalking Distance: ${walkingDistance}\nPoint of Departure: ${pointOfDeparture}\n`;

//     const requestBody = {
//       prompt,
//       max_tokens: 1000,
//       temperature: 0.7,
//       stop: ['\n'],
//     };

//     // API call to OpenAI
//     try {
//       const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });

//       const tourGuideDescription = response.data.choices[0]?.text;
//       setTourDescription(tourGuideDescription);
//     } catch (error) {
//       console.error('Error:', error);
//       setTourDescription('Error fetching tour description. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Self-Guided Tour App</h1>
//       <div>
//         <label htmlFor="duration">Tour Duration:</label>
//         <select id="duration" value={tourDuration} onChange={(e) => setTourDuration(e.target.value)}>
//           <option value="Full-day">Full-day</option>
//           <option value="Half-day">Half-day</option>
//           <option value="2 hours">2 hours</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="theme">Tour Theme:</label>
//         <input type="text" id="theme" value={tourTheme} onChange={(e) => setTourTheme(e.target.value)} placeholder="e.g., Historical" />
//       </div>
//       <div>
//         <label htmlFor="distance">Walking Distance:</label>
//         <input type="text" id="distance" value={walkingDistance} onChange={(e) => setWalkingDistance(e.target.value)} placeholder="e.g., Moderate" />
//       </div>
//       <div>
//         <label htmlFor="departure">Point of Departure:</label>
//         <input type="text" id="departure" value={pointOfDeparture} onChange={(e) => setPointOfDeparture(e.target.value)} placeholder="e.g., Battery Park" />
//       </div>
//       <button onClick={generateTourGuideDescription}>Generate Tour</button>
//       <div>
//         <textarea id="tourDescription" cols="80" rows="10" value={tourDescription} readOnly />
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

//   // State for tour description and typing indicator
//   const [tourDuration, setTourDuration] = useState('Full-day');
//   const [tourTheme, setTourTheme] = useState('');
//   const [walkingDistance, setWalkingDistance] = useState('');
//   const [pointOfDeparture, setPointOfDeparture] = useState('');
//   const [tourDescription, setTourDescription] = useState('');
//   const [typing, setTyping] = useState(false);

//   // Function to generate tour description
//   const generateTourGuideDescription = async () => {
//     // Your prompt and other request body parameters
//     const prompt = `Tour Duration: ${tourDuration}\nTour Theme: ${tourTheme}\nWalking Distance: ${walkingDistance}\nPoint of Departure: ${pointOfDeparture}\n`;

//     const requestBody = {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: 'Explain all concepts like I am 10 years old.',
//         },
//         {
//           role: 'user',
//           content: prompt,
//         },
//       ],
//     };

//     // API call to OpenAI
//     try {
//       setTyping(true);
//       const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });

//       setTyping(false);
//       const tourGuideDescription = response.data.choices[0]?.message.content;
//       setTourDescription(tourGuideDescription);
//     } catch (error) {
//       console.error('Error:', error);
//       setTyping(false);
//       setTourDescription('Error fetching tour description. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Self-Guided Tour App</h1>
//       <div>
//         <label htmlFor="duration">Tour Duration:</label>
//         <select id="duration" value={tourDuration} onChange={(e) => setTourDuration(e.target.value)}>
//           <option value="Full-day">Full-day</option>
//           <option value="Half-day">Half-day</option>
//           <option value="2 hours">2 hours</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="theme">Tour Theme:</label>
//         <input type="text" id="theme" value={tourTheme} onChange={(e) => setTourTheme(e.target.value)} placeholder="e.g., Historical" />
//       </div>
//       <div>
//         <label htmlFor="distance">Walking Distance:</label>
//         <input type="text" id="distance" value={walkingDistance} onChange={(e) => setWalkingDistance(e.target.value)} placeholder="e.g., Moderate" />
//       </div>
//       <div>
//         <label htmlFor="departure">Point of Departure:</label>
//         <input type="text" id="departure" value={pointOfDeparture} onChange={(e) => setPointOfDeparture(e.target.value)} placeholder="e.g., Battery Park" />
//       </div>
//       <button onClick={generateTourGuideDescription}>Generate Tour</button>
//       <div>
//         {typing && <p>ChatGPT is typing...</p>}
//         <textarea id="tourDescription" cols="80" rows="10" value={tourDescription} readOnly />
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// const App = () => {
//   const [tourDuration, setTourDuration] = useState('Full-day');
//   const [tourTheme, setTourTheme] = useState('Historical');
//   const [walkingDistance, setWalkingDistance] = useState('Moderate');
//   const [pointOfDeparture, setPointOfDeparture] = useState('Battery Park');
//   const [tourDescription, setTourDescription] = useState('');
//   const [typing, setTyping] = useState(false);

//   const generateTourGuideDescription = async () => {
//     const prompt = `Tour Duration: ${tourDuration}\nTour Theme: ${tourTheme}\nWalking Distance: ${walkingDistance}\nPoint of Departure: ${pointOfDeparture}\n`;

//     const requestBody = {
//       model: 'text-davinci-003',
//       prompt,
//       max_tokens: 1000,
//       temperature: 0.7,
//       stop: ['\n'],
//     };

//     try {
//       setTyping(true);
//       const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });

//       setTyping(false);
//       const tourGuideDescription = response.data.choices[0]?.text;
//       setTourDescription(tourGuideDescription);
//     } catch (error) {
//       console.error('Error:', error);
//       setTyping(false);
//       setTourDescription('Error fetching tour description. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Self-Guided Tour App</h1>
//       {/* Your input elements for tour details */}
//       <button onClick={generateTourGuideDescription}>Generate Tour</button>
//       <div>
//         {typing && <p>ChatGPT is typing...</p>}
//         <textarea id="tourDescription" cols="80" rows="10" value={tourDescription} readOnly />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// const App = () => {
//   const [city, setCity] = useState('');
//   const [tourContent, setTourContent] = useState('');
//   const [loading, setLoading] = useState(false);

//   const generateWalkingTour = async () => {
//     try {
//       setLoading(true);

//       const prompt = `Walking Tour in ${city}`;

//       const requestBody = {
//         model: 'gpt-3.5-turbo',
//         messages: [
//           {
//             role: 'system',
//             content: 'Create a self guided walking tour where a person can start somewhere and follow a route from start point to each point of interest and returning to the start point when the tour is over.  I only want the tour route and what points of interest are on that route. I will ask later for an in depth tour or each point of interest.  Give me a map showing the route and the named points of interest',
//           },
//           {
//             role: 'user',
//             content: prompt,
//           },
//         ],
//       };

//       const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });

//       const generatedTour = response.data.choices[0]?.message.content;
//       setTourContent(generatedTour);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setTourContent('Error generating the walking tour. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Walking Tour Generator</h1>
//       <div>
//         <label htmlFor="city">City:</label>
//         <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
//       </div>
//       <button onClick={generateWalkingTour} disabled={!city || loading}>
//         Generate Walking Tour
//       </button>
//       {loading && <p>Loading...</p>}
//       <div>
//         <textarea id="tourContent" cols="80" rows="10" value={tourContent} readOnly />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import axios from 'axios';
import MapContainer from './MapContainer';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const App = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [duration, setDuration] = useState('Full-day');
  const [difficulty, setDifficulty] = useState('Medium');
  const [tourType, setTourType] = useState('Historic');
  const [tourContent, setTourContent] = useState('');
  const [loading, setLoading] = useState(false);

  const generateWalkingTour = async () => {
    try {
      setLoading(true);

      const prompt = `Walking Tour in ${city}, ${state}, ${country}\nTour Duration: ${duration}\nDifficulty Level: ${difficulty}\nTour Type: ${tourType}`;

      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Create a self guided walking tour where a person can start somewhere and follow a route from start point to each point of interest and returning to the start point when the tour is over.  I only want the tour route and what points of interest are on that route. I will ask later for an in depth tour or each point of interest.  Give me a map showing the route and the named points of interest',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      };

      const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const generatedTour = response.data.choices[0]?.message.content;
      setTourContent(generatedTour);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setTourContent('Error generating the walking tour. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Walking Tour Generator</h1>
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="State/County/Province"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <select className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="Full-day">Full-day</option>
            <option value="Half-day">Half-day</option>
            <option value="2 hours">2 hours</option>
          </select>
        </div>
        <div className="col-md-4">
          <select className="form-control" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="col-md-4">
          <select className="form-control" value={tourType} onChange={(e) => setTourType(e.target.value)}>
            <option value="Historic">Historic</option>
            <option value="Scenic">Scenic</option>
            <option value="Fun">Fun</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary" onClick={generateWalkingTour} disabled={!city || loading}>
            Generate Walking Tour
          </button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      <div className="row">
        <div className="col">
          <textarea className="form-control" rows="10" value={tourContent} readOnly />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MapContainer generatedTour={tourContent} />
        </div>
      </div>
    </div>
  );
};

export default App;
