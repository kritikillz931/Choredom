import React, { useEffect } from "react";
import { useState } from "react";
import {db} from "../firebase"
import {collection, getDocs} from 'firebase/firestore'


export const Users = () => {
const [users, setUsers] = useState([])
const usersCollectionRef = collection(db, "users")
useEffect(() => {
const getUsers = async () => {
const data = await getDocs(usersCollectionRef)
setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
}

getUsers()
}, [])

return (
    <>
    {

        <div>
        {users.map((user) => {
            for (let i = 0; i < user.kids.length; i++) {
                users.map((user) => {
                    console.log(user.kids[i])
                    console.log(user.name)
                    return (
                        
                        <div key={user.id}>
                           <h1>Parent:</h1>
                           <h1>Children:</h1>

                       </div>
                       
                       ) 
                       
                       
                    })
                }
            })}
    </div>
        }
    </>
)

}