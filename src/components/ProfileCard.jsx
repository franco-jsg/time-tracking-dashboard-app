import ProfPhoto from '../assets/images/image-jeremy.png'

const ProfileCard = ({changeScale}) => {

    const handleClick = ({target}) => changeScale(target.value)
    
    return(
        <>
            <div className="profile-container">
                <div className="profile-card">
                    <img src={ProfPhoto} alt="" />
                    <div className="profile-card-info">
                        <p>Report for</p>
                        <h2>Jeremy Robson</h2>
                    </div>
                </div>
                <div className="profile-calendar">
                    <button value='daily' onClick={handleClick}>Daily</button>
                    <button value='weekly' onClick={handleClick}>Weekly</button>
                    <button value='monthly' onClick={handleClick}>Monthly</button>
                </div>
            </div>
        </>
    )
}

export default ProfileCard