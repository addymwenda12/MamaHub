import "./group.css";
import { GroupContainer } from "../../components";

const Group = () => {
  return (
    <section className="group-section">
      <div className="group-section-wrapper">
        <h1 className="groups-section-title">Early pregnancy</h1>
        <div className="groups-wrapper">
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
          <GroupContainer id={1}/>
        </div>
      </div>
      <div className="group-section-wrapper">
        <h1 className="groups-section-title">Early pregnancy</h1>
        <div className="groups-wrapper">
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
        </div>
      </div>
      <div className="group-section-wrapper">
        <h1 className="groups-section-title">Early pregnancy</h1>
        <div className="groups-wrapper">
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
          <GroupContainer id={1} />
        </div>
      </div>
    </section>
  );
};

export default Group;
