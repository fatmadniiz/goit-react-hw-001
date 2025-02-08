import styles from './Profile.module.css';

function  UserProfile ({imgUrl, userName, userTag, userLocation, userFollowers, userViews, userLikes}) {
    return (
            <div className={styles.profile}>
                <div className={styles.profileWrapper}>
                    <img className={styles.img} src={imgUrl} alt="user Avatar" width={120}/>
                    <h2 className={styles.userName}>{userName}</h2>
                    <p className={styles.userText}>@{userTag}</p>
                    <p className={styles.userText}>{userLocation}</p>
                </div>
                    <ul className={styles.statsList}>
                        <li className={styles.statsItem}>
                            <p className={styles.statsText}>Followers</p>
                            <p className={styles.statsText}>{userFollowers}</p>
                        </li>
                        <li className={styles.statsItem}>
                            <p className={styles.statsText}>Views</p>
                            <p className={styles.statsText}>{userViews}</p>
                        </li>
                        <li className={styles.statsItem}>
                            <p className={styles.statsText}>Likes</p>
                            <p className={styles.statsText}>{userLikes}</p>
                        </li>
                    </ul>
            </div>
    )
}
export default UserProfile;