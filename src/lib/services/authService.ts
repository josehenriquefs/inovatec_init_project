import {AuthData} from '../../contexts/Auth';

async function signIn(email: string, password: string,): Promise<AuthData>{
   
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(1+1== 2){
                resolve({
                    token: JWTTokenMock,
                    email: email,
                    name: 'Usuario teste',
                });
            }else{
                reject(new Error('Credenciais inválidas'));
            }
        },500);
    })
}

export const authService = {signIn}

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';