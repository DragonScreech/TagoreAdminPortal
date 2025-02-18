import React, { useState } from 'react';
import { storage } from './firebase-config'; // Ensure storage is imported from firebase-config
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FlyerUpload = () => {
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [songName, setSongName] = useState('');
  const [Clief, setClief] = useState('');
  const [Major, setMajor] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSongNameChange = (event) => {
    const words = event.target.value.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    setSongName(capitalizedWords.join(' '));
  };
  const handleCliefChange = (event) => {
    setClief(event.target.value);
  };
    const handleMajorChange = (event) => {
        setMajor(event.target.value);
    };

  const handleUpload = async () => {
    if (image && songName && Clief && Major) {
        const firstLetter = songName.charAt(0).toUpperCase();
        const fileName = songName.replace(/ /g, '_') +'_'+ Major+ '_'+ Clief +'.pdf';
      const storageRef = ref(storage, `/${firstLetter}/${fileName}`);
      try {
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        setUploadStatus(`File uploaded successfully to folder `+firstLetter);
      } catch (error) {
        setUploadStatus('Error uploading image');
        console.error('Upload error:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="songName">Enter Song Name</label>
      <input
        type="text"
        id="songName"
        placeholder="Enter Song Name"
        value={songName}
        onChange={handleSongNameChange}
        style={styles.textInput}
      />
      <label htmlFor="clief">Enter Clief</label>
      <select
        id="clief"
        value={Clief}
        onChange={handleCliefChange}
        style={styles.textInput}
      >
        <option value="Treble">Treble</option>
        <option value="Bass">Bass</option>
        <option value="piano">Piano</option>
      </select>
      <label htmlFor="major">Enter Major</label>
      <select
        id="major"
        value={Major}
        onChange={handleMajorChange}
        style={styles.textInput}
      >
        <option value="C_Major">C Major</option>
        <option value="G_Major">G Major</option>
        <option value="D_Major">D Major</option>
        <option value="A_Major">A Major</option>
        <option value="E_Major">E Major</option>
        <option value="B_Major">B Major</option>
        <option value="F_Flat">F Flat</option>
        <option value="B_Flat">B Flat</option>
        <option value="A_Minor">A Minor</option>
        <option value="E_Minor">E Minor</option>
        <option value="B_Minor">B Minor</option>
        <option value="F_Flat">F Flat</option>
        <option value="C_Flat">C Flat</option>
        <option value="G_Flat">G Flat</option>
        <option value="D_Flat">D Flat</option>
        <option value="A_Flat">A Flat</option>
      </select>
      <label htmlFor="fileInput">Upload Image</label>
      <input type="file" onChange={handleImageChange} style={styles.fileInput} />
      {image && (
        <div>
          <button onClick={handleUpload} style={styles.button}>Upload</button>
          <p>{uploadStatus}</p>
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: 'black',
    display: 'flex',
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: '30px',
    textAlign: 'center'
  },
  fileInput: {
    backgroundColor: 'grey',
    color: 'white',
    marginBottom: '10px'
  },
  button: {
    backgroundColor: 'purple',
    width:'250px',
    color: 'white',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer'
  }
};

export default FlyerUpload;
