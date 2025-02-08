import React from 'react';
import './App.css';

// JSON veri dosyalarını içe aktarıyor
import userData from '../../data/userData.json';
import friendsData from '../../data/friendList.json';
import transactionData from '../../data/withDrawal.json';

// Bileşenleri içe aktarıyor
import UserProfile from '../User/Profile.jsx';
import FriendList from '../FriendList/Friend.jsx';
import TransactionList from '../TransactionHistory/TransactionHistory.jsx'

const App = () => {
  return (
    <div className='container'>
      {/* Kullanıcı Profili */}
      <div className="user-profile"> 
        {userData.map((user, index) => (
          <UserProfile 
            key={index}
            imgUrl={user.avatar}
            userName={user.username}
            userTag={user.tag}
            userLocation={user.location}
            userFollowers={user.stats.followers}
            userViews={user.stats.views}
            userLikes={user.stats.likes}
          />
        ))}
      </div>

      {/* Arkadaş Listesi */}
      <div className='friend-list'>        
        {friendsData.map((friend) => (
          <FriendList
            key={friend.id}
            imgUrl={friend.avatar}
            friendName={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </div>

      {/* İşlem Geçmişi */}
      <div className='transaction-history'>
        <TransactionList items={transactionData} />
      </div>
    </div>
  );
};

export default App;
