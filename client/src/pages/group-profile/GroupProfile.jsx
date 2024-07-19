import './groupProfile.css'
import { GroupBanner, GroupNavigation, Journeys, Media, Recommedations } from "../../components"
import { useContext } from 'react'
import { GlobalContext } from '../../context/context'

const GroupProfile = () => {
  const {currentGroupSection} = useContext(GlobalContext)
  
  return (
    <section className="group-profile">
      <GroupBanner/>
      <section className="group-profile-body">
        <GroupNavigation/>
        {
        currentGroupSection === 'journeys' ? <Journeys/> :
        currentGroupSection === 'media' ? <Media/> :
        currentGroupSection === 'recommendations' ? <Recommedations/> :
        null
      }
      </section>
    </section>
  )
}

export default GroupProfile
