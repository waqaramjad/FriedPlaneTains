import firebase from "firebase";
import History from "../../History";
import Movie from "../../components/Movie/Movie";

var config = {
  apiKey: "AIzaSyDRF28m54jiKyALkC1OX3YOpm6JAD-PmLg",
    authDomain: "friedplantainsmovies.firebaseapp.com",
    databaseURL: "https://friedplantainsmovies.firebaseio.com",
    projectId: "friedplantainsmovies",
    storageBucket: "friedplantainsmovies.appspot.com",
    messagingSenderId: "982575628534"
};
firebase.initializeApp(config);

export function changeName(value) {
  return {
    type: "CHANGE_NAME",
    Payload: value
  };
}

export function getUser() {
var allUsers= 345
    firebase.database().ref('/movies').once((data)=>{
console.log(data)
    })

    return { type: 'ALL_USER', payload: allUsers }

}
// export function MOVIESData() {
//   return dispatch => {
//   var data = 'ifs'
//     firebase.database().ref('/movies').once('value')
//     .then((data) => {


//     })

//     return { type: 'MOVIES', payload: data }

// }
// }

export function GetCommentsofMovie(data){
  let arrayofComments=[];
  return dispatch => {
    console.log('runnning to fetch comments  ')

    firebase.database().ref('Movies/'+data+'/').on('value', snapshot => {
   
      snapshot.forEach(obj=>{
        // console.log(obj.val())
        if(isObject(obj.val())){
          console.log(obj.val());
          arrayofComments.push( obj.val());
        }
      })
      console.log('array of comments before',arrayofComments);
      dispatch({ type: 'Latest_Comment', payload: arrayofComments })
      arrayofComments=[];
      console.log('array of comments after',arrayofComments);
    })
}
}

export function CommentOnMovie(data) {
  return dispatch => {
      console.log('commenting ')

      firebase.database().ref('Movies/'+data.NameOftheMovie).push(data)
      .then((value) => {
          console.log(value);
          
          GetCommentsofMovie(data.NameOftheMovie);
          })
  }
}
function isObject (item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

export function MOVIESData(daa) {
  return dispatch => {
      console.log('getStudentDataByCompany')

      firebase.database().ref('Movies/').once('value')
      .then((data) => {

              console.log('action')
              console.log(data.val())
              let Movies = data.val();

              dispatch({ type: 'MOVIES', payload: Movies })





          })
  }
}
export function SearchData() {
  return dispatch => {
      console.log('getStudentDataByCompany')
      var arr = []
      firebase.database().ref('Actors/').once('value')
      .then((data) => {

              console.log('Actors')
              console.log(data.val())
              let Actors = data.val();
              var check = data.val()

              Object.keys(check).map((data, index) => {

               var singleObject = check[data]
               arr.push(singleObject)


              })
              console.log(arr)
                        
              
              firebase.database().ref('Movies/').once('value')
              .then((data) => {
        
                      console.log('Movies')
                      console.log(data.val())
                      let Actors = data.val();
                      var check = data.val()
        
                      Object.keys(check).map((data, index) => {
        
                       var singleObject = check[data]
                       arr.push(singleObject)
        
        
                      })
                      console.log(arr)
                                    dispatch({ type: 'SEARCHDATA', payload: arr })
                      
                      
                      
                      
                      
                                })
              
              
              
              
                        })


                                          // dispatch({ type: 'SEARCHDATA', payload: arr })
                }
              }
export function AcrtorsData() {

  var arr = []
  return dispatch => {
      console.log('AcrtorsData')

      firebase.database().ref('Actors/').once('value')
      .then((data) => {

              console.log('Actors')
              console.log(data.val())
              let Actors = data.val();
              var check = data.val()

//               Object.keys(check).map((data, index) => {

//                var singleObject = check[data]
//                arr.push(singleObject)



//               })
// console.log(arr)
              dispatch({ type: 'ACTORS', payload: Actors })





          })
  }
}

// export function AcrtorsData() {
//   return dispatch => {
//       console.log('AcrtorsData')

//       firebase.database().ref('Actors/').once('value')
//       .then((data) => {

//               console.log('Actors')
//               console.log(data.val())
//               let Actors = data.val();

//               dispatch({ type: 'ACTORS', payload: Actors })





//           })
//   }
// }


export function CinemaData(CinemaTag) {
  return dispatch => {
      console.log(CinemaTag)

      firebase.database().ref('Cinema/').once('value')
      .then((data) => {

              console.log('Cinema')
              console.log(data.val())
              let Cinema = data.val();

              dispatch({ type: 'CINEMA', payload: Cinema })





          })
  }
}
export function ProfileSaveFilmList(profile) {
  return dispatch => {
      console.log(profile)
var filmName = profile.concat('Save')
      var currentUser = firebase.auth().currentUser
      if(currentUser == null){
        alert('Please Sign in To continue ')
      }
      else{

      console.log(currentUser.uid)
      firebase.database().ref('Users/'+currentUser.uid+'/SaveMovies/'+filmName).update({SaveFilm : profile})
      // .then((data) => {

      //         console.log('Cinema')
      //         console.log(data.val())
      //         let Cinema = data.val();

      //         dispatch({ type: 'PROFILESAVELIST', payload: Cinema })





      //     })
        }
  }
}



export function getSaveList() {
  return dispatch => {
    // console.log(profile)
// var filmName = profile.concat('Save')
    var currentUser = firebase.auth().currentUser
    console.log(currentUser)
    if(currentUser == null){
      alert('Please Sign in To continue ')
    }
    else{

      firebase.database().ref('Users/'+currentUser.uid+'/SaveMovies').once('value')
      .then((data) => {

              // console.log('Cinema')
              console.log(data.val())
              let Cinema = data.val();

              dispatch({ type: 'PROFILESAVELIST', payload: Cinema })





          })
  }
}
}
// export function SignUpFirebase(load) {
//     // firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
//     //     return user.updateProfile({'displayName : document.getElementById("name").value'})}).catch(function(error) {
//     //     console.log(error);
//     //   });
//     // console.log(emailuser);
//     // console.log(passworduser);
//     return dispatch => {
//         firebase.auth().createUserWithEmailAndPassword(load.email, load.pass)
//             .then(users => {
//                 //var user = firebase.auth().currentUser;

//                 // console.log(username);
//                 //let name=this.state.name;
//                 users.updateProfile({
//                     displayName: load.username
//                 }).then(() => {
//                     // Update successful.
//                     console.log("updated successfully");
//                     // this.onSuccess();
//                     //
//                     console.log(users);
//                     let obj = {
//                         displayName: users.displayName,
//                         email: users.email,
//                         uid: users.uid
//                     }
//                     firebase.database().ref("/users/" + obj.uid + "/").set(obj).then(() => {
//                         console.log("user saved!");
//                         dispatch(getUser());
//                         History.push('/signin');
//                     })

//                 }).catch(function (error) {
//                     // An error happened.
//                     //   console.log(error);
//                 });
//             }).catch(function (error) {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 // ...
//             });
//     }
// }



// function getCurrentUser(obj) {
//     let CurrentUser = {
//         displayName: obj.displayName,
//         email: obj.email,
//         uid: obj.uid
//     }
//     return {
//         type: 'CURRENT_USER',
//         payload: CurrentUser
//     }
// }
// export function SignInFirebase(obj) {
//     return dispatch => {
//         firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then((user) => {
//             console.log(user);
//             dispatch(getCurrentUser(user));
//             dispatch(getUser());
//             // .then(()=>{
//             // History.push('/homepage')
//             // })

//         })
//     }
// }

// export function getAllMsg() {
//     return dispatch => {

//         return firebase.database().ref('/msg').on('value', snapshot => {
//             const arr = [];
//             console.log(snapshot.val());
//             arr.push(snapshot.val());
//             console.log('getallmsg');
//             snapshot.forEach(obj=>{
//                arr.push( obj.val());
//             })
//             // dispatch({ type: 'ALL_MSG', payload: arr })
//             console.log('endo of allmsg')
//             dispatch({ type: 'ALL_MSG', payload: arr });
//         })

//     }
// }
// export function getUpdatedMsg() {
//     return dispatch => {

//         // let arr = [];
//         // firebase.database().ref('/msg').on('child_added', snapshot => {
//         //     console.log(snapshot.val());
//         //     arr.push(snapshot.val());
//         //     console.log('updated msg :D');
//         //     dispatch({ type: 'ALL_MSG', payload: arr });
//         // })

//     }
// }

// export function SendMessage(obj) {
//     return dispatch => {
//         obj.created = firebase.database.ServerValue.TIMESTAMP;
//         obj.seen = false;
//         console.log(obj);
//         firebase.database().ref('/msg/').push(obj).then((a) => { console.log('done', a) })
//         // dispatch(getAllMsg());
//     }
// }
export function GetAllNews() {
  let arrayofNews = [];
  return dispatch => {
    return firebase.database().ref('/News/').on('value', snapshot => {
                  const arr = [];
                  //  console.log(snapshot.val());
                  // arr.push(snapshot.val());
                  console.log('getallmsg');
                  snapshot.forEach(obj=>{
                    arrayofNews.push( obj.val());
                  })
                  console.log(arrayofNews);
                  dispatch({ type: "GET_NEWS", payload: arrayofNews });
                });
                console.log(arrayofNews);

  }
}


var provider = new firebase.auth.FacebookAuthProvider();
var provider2 = new firebase.auth.GoogleAuthProvider();

export function GoogleSignin() {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(provider2)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
        var obj = {
          displayname: user.displayName,
          email: user.email,
          userpic: user.photoURL
        };
        localStorage.setItem("Userlog", JSON.stringify(obj));
        console.log(obj);
        firebase.database().ref('/Users/'+user.uid).update({UID:user.uid});
        dispatch({ type: "CURRENT_USER", payload: obj });

        // location="homepage.html";
        // ...
        History.push('/user')
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
}
export function facebookSignin() {
    return dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)

    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
console.log(user);
      console.log(token);
      console.log(user.displayName);
      console.log(user.email);
    //   console.log(user.photoURL);
      const fbUID = user.providerData[0].uid
const photoURL = 'https://graph.facebook.com/' + fbUID + '/picture?type=large'
      var obj = {
        displayname: user.displayName,
        email: user.email,
        userpic: photoURL
      };
      localStorage.setItem("Userlog", JSON.stringify(obj));
      console.log(obj);
      console.log(user);
      //    location="homepage.html";
      dispatch({ type: "CURRENT_USER", payload: obj });
      History.push('/user')
    })
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
}
}


export function facebookSignout() {
  return dispatch => {
    firebase
    .auth()
    .signOut()

    .then(
      function() {
        dispatch({ type: "SIGNOUT_USER", payload: "" });
    History.push("/");
        console.log("Signout successful!");
      },

      function(error) {
        console.log("Signout failed");
      }
    );
    
  };

}