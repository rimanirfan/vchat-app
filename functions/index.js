const functions = require('firebase-functions');
const admin     = require('firebase-admin');

admin.initializeApp();

exports.onMessageCreate = functions.firestore
    .document('messages/{userId}')
    .onCreate((snap, context) => {
        const ref = admin.firestore().collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            let i = 0;
            let size = snapshot.size
            sizeToDelete = size - 10
            console.log('Messages count: ' + size)

            snapshot.forEach((doc) => {
                if (i < sizeToDelete) {
                    doc.ref.delete().then(() => {
                        console.log("Document deleted")
                    }).catch((error) => {
                        console.log("Erorr on deleting the document: " + error)
                    })
                }
                i++
            })
        })
    })
