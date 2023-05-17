import React, { useState } from 'react';
import biography from "../../../utils/biography";

const Biography = ({ user }) => {
    const [newBiography, setNewBiography] = useState('');

    const handleChange = (e) => {
        setNewBiography(e.target.value);
    };

    const handleUpdate = async () => {
        try {
          await biography(user.username, newBiography);
  
          console.log("Biography updated successfully!");
        } catch (error) {

          console.error("Error updating biography:", error);
        }
      };

    return (
        <div className="user-profile-item">
        <span className="user-profile-label">Biography:</span>
        <textarea
          className="user-profile-value"
          defaultValue={user.biography}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update Biography</button>
      </div>
    );
};

export default Biography