import './groupProfile.css'
import { GroupBanner, GroupNavigation } from "../../components"

const GroupProfile = () => {
  return (
    <section className="group-profile">
      <GroupBanner/>
      <section className="group-profile-body">
        <GroupNavigation/>
      </section>
    </section>
  )
}

export default GroupProfile
