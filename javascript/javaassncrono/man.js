const login = (email, password, onSuccess) => {
    setTimeout(() => {
       console.log("Seja bem-vindo") 
       onSuccess({email, password});
    }, 1000);
}




const user = login ("paulo@matajudeu.com", "11desetembro", (user) => {
    console.log({user})
})
