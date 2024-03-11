interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UserProps {
  user: User
}

const User: React.FC<UserProps> = ({ user }) => {

  return(
    <div className="p-5">
      <p><b>ID: </b>{user.id}</p>
      <p><b>Name: </b>{user.name}</p>
      <p><b>Username: </b>{user.username}</p>
      <p><b>Email: </b>{user.email}</p>
      <p><b>Address: </b>{user.address.street} {user.address.suite} {user.address.city}, {user.address.zipcode}</p>
      <p><b>Latitude: </b> {user.address.geo.lat}, <b>Longitude:</b> {user.address.geo.lng}</p>
      <p><b>Phone: </b>{user.phone}</p>
      <p><b>Website: </b>{user.website}</p>
      <p><b>Company: </b>{user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
    </div>
  )
  
}


export default User;
