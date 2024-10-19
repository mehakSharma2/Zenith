import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebaseconfig'; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: 'student',
    skillLevel: 'beginner',
    goals: '',
    completionTime: 'short-term',
    field: '',
    learningMode: 'videos',
    availability: '',
    budget: 'free',
    reminder: 'yes',
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    duration1: '',
    duration2: '',
    duration3: '',
    duration4: '',
    duration5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reference to the "roadmaps" node in your Realtime Database
      const roadmapsRef = ref(db, 'roadmaps');
      
      // Push form data to Realtime Database
      const newRoadmapRef = await push(roadmapsRef, formData);

      console.log('Roadmap created with ID: ', newRoadmapRef.key);
      alert('Roadmap created and saved successfully!');
    } catch (e) {
      console.error('Error saving data to Realtime Database: ', e);
    }
  };

  const styles = {
    container: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#B2CEE3',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      marginTop: '50px',
      fontFamily: 'Josefin sans',
    },
    h2: {
      textAlign: 'center',
      color: '#3e92cc',
      fontWeight: 'bold',
      fontSize: '36px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
    input: {
      marginTop: '5px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    textarea: {
      resize: 'none',
      marginTop: '5px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      marginTop: '20px',
      backgroundColor: '#3e92cc',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#1390E9',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
    },
    gridSingleColumn: {
      gridTemplateColumns: '1fr',
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
    },
    radioLabel: {
      marginLeft: '5px',
      marginRight: '15px',
    },
    '@media (maxWidth: 768px)': {
      grid: {
        gridTemplateColumns: '1fr',
      },
    },
  };

  document.body.style.backgroundColor = 'white';

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Create Your Customizable Roadmap</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.grid}>
          <div>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={styles.input}
              required
            />
          </div>
          <div>
            <label htmlFor="age" style={styles.label}>Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              style={styles.input}
              required
            />
          </div>
        </div>

        <div style={styles.grid}>
          <div>
            <label htmlFor="occupation" style={styles.label}>Current Occupation</label>
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>
          <div>
            <label htmlFor="skillLevel" style={styles.label}>Skill Level</label>
            <select
              id="skillLevel"
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <label htmlFor="goals" style={styles.label}>What are your goals?</label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          rows="4"
          placeholder="Describe your goals..."
          style={styles.textarea}
          required
        ></textarea>

        <label htmlFor="mail" style={styles.label}>Email</label>
        <input
          type="email"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          placeholder="Enter your email"
          style={styles.input}
          required
        >

          
        </input>

        {['1', '2', '3', '4', '5'].map((num) => (
          <React.Fragment key={num}>
            <label htmlFor={`field${num}`} style={styles.label}>
              Field of Interest {num}
            </label>
            <input
              type="text"
              id={`field${num}`}
              name={`field${num}`}
              value={formData[`field${num}`]}
              onChange={handleChange}
              placeholder={`Enter your field of interest ${num} (e.g., Web Development)`}
              style={styles.input}
              required
            />

            <label htmlFor={`duration${num}`} style={styles.label}>
              Duration of Completion
            </label>
            <input
              type="text"
              id={`duration${num}`}
              name={`duration${num}`}
              value={formData[`duration${num}`]}
              onChange={handleChange}
              placeholder="Enter duration (e.g., 6 months)"
              style={styles.input}
              required
            />
          </React.Fragment>
        ))}

        <button type="submit" style={styles.button}>Generate Roadmap</button>
      </form>
    </div>
  );
}

export default App;
