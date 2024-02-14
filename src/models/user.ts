interface User{
    id:string
    userName:string
    password:string
    email:string
    firstName:string
    lastName:string
    roles:[Role]
}
export default User;