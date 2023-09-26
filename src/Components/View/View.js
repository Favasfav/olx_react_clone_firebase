import React, { useContext, useEffect, useState } from 'react';
import { postContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Contexts'; // Correct import
import { collection, where, getDocs } from 'firebase/firestore';
import './View.css';

function View() {
  const [userDetails, setUserDetails] = useState('');
  const { postDetails } = useContext(postContext); // Use a different variable name
  const { db } = useContext(FirebaseContext);
  console.log("gggggggggggggggggggggggg",postDetails)
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'users'),
          where('id', '==', postDetails.userId)
        );
console.log(querySnapshot,"gggggggggggggggggggggggg")
        querySnapshot.forEach((doc) => {
          setUserDetails(doc.data());
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (postDetails.userId) {
      fetchUserDetails();
    }
  }, [db, postDetails.userId]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.imageUrl} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        { userDetails &&
          <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username || 'No name'}</p>
          <p>{userDetails.phone || 'No phone number'}</p>
        </div>
}
      </div>
    </div>
  );
}

export default View;
