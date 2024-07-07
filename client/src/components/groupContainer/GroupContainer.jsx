import './style.css'

const topics = [
    'famly planning',
    'early pregnancy',
    'mental health'
]

const GroupContainer = () => {
  return (
    <section className="group-container">
        <div className="profile-image-conatiner">
            <img src="../../images/image-forms.jpg" alt="group profile" />
        </div>
        <div className="group-details-container">
            <div className="group-details-header">
                <h1 className="group-details-name">
                    Mothers
                </h1>
                <p className="group-details-status">
                    public
                </p>
            </div>
            <div className="groups-details-topics">
                <p className="group-details-topics-list">
                    {
                        topics.map((item)=>{
                            return item
                        }).join(', ')
                    }
                </p>
            </div>

            <div className="group-details-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec quam sit amet sem tempus porta.</p>
            </div>
        </div>
      
    </section>
  )
}

export default GroupContainer
