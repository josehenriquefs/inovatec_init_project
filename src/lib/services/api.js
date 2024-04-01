export async function registerUser(email, password){
  fetch('/users', {
    method: 'POST',
    body: JSON.stringify({
    email: email,
    password: password,    
  }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
        
}

export async function getUsers(setUsers){
  fetch("/users")
    .then((res) => res.json())
    .then((json) => {
        console.log(json.users);
        setUsers(json.users);})
}

export async function getUser(){
  fetch('/users', {
    method: 'GET',
    body: JSON.stringify({
    email: email,
    password: password,    
  }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}