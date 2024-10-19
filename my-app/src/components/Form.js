import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../firebaseconfig'; // Import Firestore config

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
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, 'roadmaps'), formData);
      console.log('Document written with ID: ', docRef.id);
      alert('Roadmap created successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };


  const styles = {
    container: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f2e7d7',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      marginTop: '50px',
      fontFamily: 'Josefin sans',
    },
    h2: {
      textAlign: 'center',
      color: '#bb6857',
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
      backgroundColor: '#bb6857',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#95523f',
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

  document.body.style.backgroundColor = "white"

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

        <label htmlFor="completionTime" style={styles.label}>Target Completion Time</label>
        <select
          id="completionTime"
          name="completionTime"
          value={formData.completionTime}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="short-term">Short-term (1-3 months)</option>
          <option value="medium-term">Medium-term (4-6 months)</option>
          <option value="long-term">Long-term (6+ months)</option>
        </select>


        <label htmlFor="field" style={styles.label}>Field of Interest 1</label>
        <input
          type="text"
          id="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
          placeholder="Enter your field of interest (e.g. Web Development)"
          style={styles.input}
          required
        />
        <label htmlFor="field" style={styles.label}>Field of Interest 2</label>
        <input
          type="text"
          id="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
          placeholder="Enter your field of interest (e.g. Web Development)"
          style={styles.input}
          required
        />
        <label htmlFor="field" style={styles.label}>Field of Interest 3</label>
        <input
          type="text"
          id="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
          placeholder="Enter your field of interest (e.g. Web Development)"
          style={styles.input}
          required
        />
        <label htmlFor="field" style={styles.label}>Field of Interest 4</label>
        <input
          type="text"
          id="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
          placeholder="Enter your field of interest (e.g. Web Development)"
          style={styles.input}
          required
        />
        <label htmlFor="field" style={styles.label}>Field of Interest 5</label>
        <input
          type="text"
          id="field"
          name="field"
          value={formData.field}
          onChange={handleChange}
          placeholder="Enter your field of interest (e.g. Web Development)"
          style={styles.input}
          required
        />
        

        <button type="submit" style={styles.button}>Generate Roadmap</button>
      </form>
    </div>
  );
}

export default App;