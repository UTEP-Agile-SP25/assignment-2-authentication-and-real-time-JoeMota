import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import { auth } from "./config";
import { db } from "./config";
import {collection, doc, setDoc,getDocs,Timestamp} from "firebase/firestore"

onAuthStateChanged(auth, async (user)=>{
    if(user){
        console.log("Logged In User: ", user.email)
        await fetchUserData(user.uid)
    }else{
        console.log("No User is Signed in")
    }   
})

async function fetchUserData(userID) {
    try {
        const userDoc = await getDocs(collection(db, "users"))
        const userData = userDoc.docs.find(doc => doc.id===userID)?.data()
        console.log("User data: ",userData)
        document.getElementById("greeting").innerHTML = "<h1> Hi, "+userData.firstName +"</h1>"
    } catch (error) {
        console.error("Error getting user data: ",error)
    }
}

export async function signUp (firstName,lastName,email,password){
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log("User signed up: ", userCredentials.user.email)
        console.log("User ID: ", userCredentials.user.uid)
        const userRef = doc(db, "users", userCredentials.user.uid)

        await setDoc(userRef,{
            firstName:firstName,
            lastName:lastName,
            Timestamp: new Date()
        })
    }catch(error){
        console.error("Error fetching user data: ",error)
    }
}

export async function logIn(email, password){
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        window.location.href = "bookmanager.html"
    }catch(error){
        console.error("Login error")
    }
}

export async function logOut(params){
    try{
        await signOut(auth)
        console.log("User Logged Out")
    }catch(error){
        console.error("Logout error: ",error.message)
    }   
}