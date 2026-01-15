//Há tres maneiras de lidar com esse código assíncrono: (Callbacks, Promises e Async/Await)
//Async/Await é a maneira mais moderna e fácil de lidar com código assíncrono em JavaScript
const login = (email, password, onSuccess , onError) => {
    setTimeout(() => {
       console.log("Seja bem-vindo") 
       onSuccess({email, password});
    }, 1500);
}


const Errorlogin = (email, password, onerror) => {
    setTimeout(() => {
       return  onerror(new Error("Email not found"));
       const erro = (false);  
       if( erro ){
        onerror(new Error("email not found"));
       }
       resolve({email, password});
    }, 1500);
}



 const getDetails = (email, onSuccess) =>{
    setTimeout(() => {
        console.log("Detalhes do usuário");
        onSuccess({email: "paulo@gmail.com", nome: "Paulo", password: 20071511});
    }, 1000);
 }

 const user = login("paulo@gmail.com", "20071511", (user) => {
    getDetails(user.email, (userDetails) => {
        console.log({userDetails})
    })
    })

    const loginPromise = (email, password) => {
        return new Promise ((resolve, reject) =>{
            const erro =false;
           
            if( erro ) {
                reject (new Error ("Emaoil not found"));
            }
            console.log("User logged in");
            resolve({email})
        })
    }

    loginPromise ('paulo@gmail.com', '20071511').then((user) => {
        console.log({user})
    })

 
