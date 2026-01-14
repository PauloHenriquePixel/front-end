const login = (email, password, onSuccess) => {
    setTimeout(() => {
       console.log("Seja bem-vindo") 
       onSuccess({email, password});
    }, 1000);
}

const getDetails = (email, onSuccess) => {
    setTimeout(() => {
        onSuccess({nome: 'paulo', idade: 25, phone: 123456789, email}) 
    },2000);
}


const user = login ("paulo@matajudeu.com", "11desetembro", (user) => {
    getDetails(user.email, (userDetails) => {
            console.log({userDetails})
    })
})