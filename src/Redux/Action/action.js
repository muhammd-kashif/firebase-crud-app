
import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import {   db } from'../../Firebase/firebase-config';
import { updateDoc } from 'firebase/firestore';

export const handleAddModal = (newForm) => {
    console.log('user: ', newForm);
   
    return async (dispatch) => {
      try {
        await addDoc(collection(db, "modal"), {
          ...newForm,
        });
        console.log("Stored in collection successfully");
      } catch (error) {
        console.log("Error:", error);
      }
    };
  };

  export const handlegetModal = () => {
    return async (dispatch) => {
      try {
        const usersCollection = collection(db, "modal");
        console.log('usersCollection: ', usersCollection);
        // Setup snapshot listener
        const unsubscribe = onSnapshot(usersCollection, (querySnapshot) => {
          const docsRef = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log(docsRef, "docsRef");
  
          // Dispatch fetched data to Redux store
          dispatch({ type: "FETCH_MODAL_SUCCESS", payload: docsRef });
        });
  
        // Return the unsubscribe function
        return unsubscribe;
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
  };
  export const handleDelete = (userId) => {
    console.log('user.id: ', userId); 
    return async (dispatch) => {
      try {
        const bookIssueRef = doc(db, "modal", userId); 
        await deleteDoc(bookIssueRef);
        console.log("Document deleted successfully");
      } catch (error) {
        console.error("Error deleting book issue:", error);
      }
    };
  };
  
  export const handleEdit = (user) => {
    return async (dispatch) => {
      try {
        const userRef = doc(db, "modal", user.id); 
        await updateDoc(userRef, {
          name: user.name,
          email: user.email,
          role: user.role,
          address: user.address
        });
        console.log("Document updated successfully");
      } catch (error) {
        console.error("Error updating document:", error);
      }
    };
  };

    
         
   