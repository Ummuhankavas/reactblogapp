import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { toastErrorNotify, toastSuccessNotify, } from "./toastNotify";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
// import { Toastify } from "toastify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGİNG_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// Initialize Firebase Authentication and get a reference to the service
export const createUser = async(email,password,navigate,displayName) => {
   try{
    let userCredential = await createUserWithEmailAndPassword(auth,email,password);
    await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
    navigate('/');
    console.log(userCredential)
   }catch(err)
{
    console.log(err);
}
};

export const signIn = async(email,password, navigate) => {
    try{
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
        console.log(userCredential)
       }catch(err)
    {
        console.log(err);
    }
};

export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };


  export const logOut = (navigate) => {
    signOut(auth);
    navigate("/");
  };


  export const signUpGoogle = async (navigate) => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          navigate("/");
  
          // toastSuccessNotify("Logged in successfully!");
        })
        .catch((error) => {
          // toastErrorNotify(error);
        });
    } catch (error) {
      // toastErrorNotify(error.message);
    }
  };

  export const Additem = (initialValues, currentUser) => {
  
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date1 = new Date();
  
    const database = getDatabase();
    const itemRef = ref(database, "users");
    const newİtem = push(itemRef);
  
    set(newİtem, {
      
      title: initialValues.title,
      imgurl: initialValues.imgurl,
      content: initialValues.content,
      date: `${
        months[date1.getMonth()]
      } ${new Date().getDate()} , ${new Date().getFullYear()}`,
      email : currentUser.email
    });
    // Toastify("THE ITEM HAS ADDED! ✅")
  };
  
  export const useFetch = () => {
    const [items, setItems] = useState();
  
    useEffect(() => {
      const database = getDatabase();
      const itemRef = ref(database, "users");
  
      onValue(itemRef, (snapshot) => {
        const data = snapshot.val();
        const myArray = [];
        for (let id in data) {
          myArray.push({ id, ...data[id] });
        }
        setItems(myArray);
      });
    }, []);
  
    return { items };
  };
  
  export const DeleteItem = (id) => {
    const database = getDatabase();
    remove(ref(database, "users/" + id))
    // Toastify("THE ITEM HAS DELETED! ✅")
  }
  export const editItem1 = (initialValues) => {
    const database = getDatabase();
    const updates = {};
    updates["users/"+initialValues.id] = initialValues;
    // Toastify("THE ITEM HAS UPDATED! ✅")
  
    return update(ref(database), updates)
  }


