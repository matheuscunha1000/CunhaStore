import { storeData } from '../data/config';
import logoImage from '../assets/cunhaStore.jpeg';

export function Profile() {
  return (
    <div className="profile">
      <div className="avatar">
        <img src={logoImage} alt="Cunha Store Logo" />
      </div>
      <p className="greeting">{storeData.greeting}</p>
      <h1 className="username">{storeData.name}</h1>
      <p className="owner-name">por {storeData.ownerName}</p>
      <p className="description">{storeData.description}</p>
      <p className="call-to-action">{storeData.callToAction}</p>
    </div>
  );
}

