import React, { useState, useEffect } from "react";
import { Button, Input } from "reactstrap";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const imageListRef = ref(storage, "images/")

export const AddChild = () => {
    const [image, setImage] = useState(null)
    const [imageList, setImageList] = useState([])
    const upload = () => {
        if (image == null) return;
        const imageRef = ref(storage, `images/${image.name + v4() }`)
        uploadBytes(imageRef, image).then(() => {
            alert("image uploaded")
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
              getDownloadURL(item).then((url) => {
                  setImageList((prev) => [...prev, url])
              })  
            })
            console.log(response)
        })
    }, [])
    return (
        <div className="inputContainer">
            <div className="inputContents">
                <Input onChange={(event) => {setImage(event.target.files[0])}} className="childImage" type="file" placeholder="Image..."/>
                <Button onClick={upload}>Submit</Button>

                {imageList.map((url) => {
                    return <img src={url}/>
                })}
            </div>
        </div>
    )
}