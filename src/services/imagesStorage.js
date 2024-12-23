// Firebase imports
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { db, storage } from "./config";
import { getDocs, addDoc, collection } from "firebase/firestore";

export async function uploadImageToStorage(imageFile) {
    try {
        // Generate a unique path using the file name
        const imageRef = storageRef(storage, `painting/${imageFile.name}-${Date.now()}`);

        // Upload the file
        const snapshot = await uploadBytes(imageRef, imageFile);
        return await getDownloadURL(snapshot.ref);
    } catch (error) {
        console.error("Error uploading image to storage:", error.message);
        throw error;
    }
}

export async function saveImageUrls(data) {
    try {
        // Specify the correct path: collection/document
        //const userDocRef = doc(db, "users", "paintings"); // Adjust the path based on your Firestore structure
        //console.log(url);
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, `images/${data.year}/items`), {
            url: data.url,
            name: data.name,
            description: data.description,
        });


        // Append new URLs to existing ones
        //const updatedUrl = [...existingUrls, ...url];
        //await updateDoc(userDocRef, { painting: updatedUrl });

        console.log("INFO: Image URLs saved successfully", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("ERROR: Failed to save image URLs:", error.message);
        throw error;
    }
}

export async function getImages(year) {
    try {
        // Adjust the collection path to include "items" under the specified year
        const querySnapshot = await getDocs(collection(db, `images/${year}/items`));
        const imagesContainer = [];
        querySnapshot.forEach((doc) => {
            imagesContainer.push({ id: doc.id, ...doc.data() }); // Add the document id
        });

        console.log("INFO: Images retrieved successfully");
        return imagesContainer;
    } catch (error) {
        console.error("ERROR: Failed to retrieve images:", error.message);
        throw error;
    }
}


//// Delete image by index
//export async function deletePhoto(index) {
//   // const userId = auth.currentUser.uid;
//    const userDocRef = doc(db, 'paintings');

//    try {
//        const userDoc = await getDoc(userDocRef);
//        const existingUrls = userDoc.data()?.painting || [];
//        const updatedUrls = existingUrls.filter((_, i) => i !== index);

//        await updateDoc(userDocRef, { painting: updatedUrls });
//        console.log('INFO: Image URL deleted successfully');
//    } catch (error) {
//        console.error('ERROR: Failed to delete image URL:', error.message);
//    }
//}