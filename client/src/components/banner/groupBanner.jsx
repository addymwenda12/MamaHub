import './banner.css'
import { FaUserGroup } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const GroupBanner = () => {
  return (
    <header className="group-pofile-banner">
      <div className="group-profile-image-container">
        <img src="../../images/post.jpg" alt="" />
      </div>
      <div className="group-details-wrapper">
        <h1 className="group-name">group name</h1>
        <div className="status-members-count__warpper">
            <span className="group-status">public</span>
            <div className="member-count-wrapper">
                <FaUserGroup size={14} color='white'/>
                12
            </div>
        </div>
        <div className="topics-list-wrapper">
            family planning, early pregnancy
        </div>
        <p className="group-description">
            this is the group description
        </p>

        <div className="action-buttons-container">
            <button>join</button>
            <button>
                <IoChatbubbleEllipsesOutline size={16} color='white'/>
                chat
            </button>
        </div>
      </div>
    </header>
  )
}

export default GroupBanner
