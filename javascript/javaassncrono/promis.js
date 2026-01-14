//Há tres maneiras de lidar com esse código assíncrono: (Callbacks, Promises e Async/Await)
//Async/Await é a maneira mais moderna e fácil de lidar com código assíncrono em JavaScript

const login = (email, password, onSuccess) => {
    setTimeout(() => {
       console.log("Seja bem-vindo") 
       onSuccess({email, password});
    }, 1500);
}

const loginPromise = (email, password) => {
    return new Promise((resolver, reject) => {
        resolver(login(email, password, resolver));
    });
}