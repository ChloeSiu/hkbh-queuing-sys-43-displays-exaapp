import classes from "./Room.module.css";
import data from "../../data/data.json";

const Room = (props: {
  orientation: "landscape" | "portrait";
  numOfComponentsOnRight: 2 | 3 | 4;
}) => {
  const showComponent: boolean = data.displayProfileLayout.Room;
  const numOfComponentsOnRight: number = props.numOfComponentsOnRight;
  const otherClinics: string = data.displayProfileContents.otherClinics;
  const { displayProfileLayout } = data; 

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    if (numOfComponentsOnRight === 2) {
      if (!displayProfileLayout.Clinic) {
        return (
          <div className={classes.containerNoClinic}>
            <div className={classes.titleContainerL}>
              <p className={classes.titleL}>診症室 Room</p>
            </div>
            <div className={classes.roomContainerNoClinic}>
              <h1 className={classes.roomNumNoClinic}>1</h1>
            </div>
            <div className={classes.roomContainerNoClinic}>
              <h1 className={classes.roomNum_contrastNoClinic}>2</h1>
            </div>
            <div className={classes.roomContainerNoClinic}>
              <h1 className={classes.roomNumNoClinic}>3</h1>
            </div>
          </div>
        );
      } else if (displayProfileLayout.Clinic && !displayProfileLayout.OverDue) {
        return (
          <div className={classes.containerL}>
            <div className={classes.titleContainerL}>
              <p className={classes.titleL}>診症室 Room</p>
            </div>
            <div className={classes.roomContainerL}>
              <h1 className={classes.roomNumL}>1</h1>
            </div>
            <div className={classes.roomContainerL}>
              <h1 className={classes.roomNum_contrastL}>2</h1>
            </div>
            <div className={classes.roomContainerL}>
              <h1 className={classes.roomNumL}>3</h1>
            </div>
            <div className={classes.roomContainerL}>
              <p className={classes.otherClinicsL}>{otherClinics}</p>
            </div>
          </div>
        );
      } else if (displayProfileLayout.Clinic && displayProfileLayout.OverDue) {
        return (
          <div className={classes.container}>
            <div className={classes.titleContainer}>
              <p className={classes.title}>診症室 Room</p>
            </div>
            <div className={classes.roomContainer}>
              <h1 className={classes.roomNum}>1</h1>
            </div>
            <div className={classes.roomContainer}>
              <h1 className={classes.roomNum_contrast}>2</h1>
            </div>
            <div className={classes.roomContainer}>
              <h1 className={classes.roomNum}>3</h1>
            </div>
            <div className={classes.roomContainer}>
              <p className={classes.otherClinics_1st}>護士站 Nurse station</p>
              <p className={classes.otherClinics_2nd}>
                登記 Registration / 取藥 Medicine
              </p>
            </div>
          </div>
        );
      }
    } else if (numOfComponentsOnRight === 4) {
      return (
        <div className={classes.containerL}>
          <div className={classes.titleContainerL}>
            <p className={classes.titleL}>櫃位 Counter</p>
          </div>
          <div className={classes.roomContainerN}>
            <h1 className={classes.roomNumN}>1</h1>
          </div>
          <div className={classes.roomContainerN}>
            <h1 className={classes.roomNum_contrastN}>2</h1>
          </div>
          <div className={classes.roomContainerN}>
            <h1 className={classes.roomNumN}>3</h1>
          </div>
        </div>
      );
    }
  } else if (props.orientation === "portrait") {
    if (displayProfileLayout.TV) {
      return (
        <div className={classes.containerPTV}>
          <div className={classes.titleContainerPTV}>
            <p className={classes.titlePTV}>診症室 Room</p>
          </div>
          <div className={classes.roomContainerPTV}>
            <h1 className={classes.roomNumPTV}>1</h1>
          </div>
          <div className={classes.roomContainerPTV}>
            <h1 className={classes.roomNumPTV}>2</h1>
          </div>
          <div className={classes.roomContainerPTV}>
            <h1 className={classes.roomNumPTV}>3</h1>
          </div>
          <div className={classes.roomContainerPTV}>
            <p className={classes.otherClinicsPTV}>
            <p className={classes.otherClinics_1st}>護士站 Nurse station</p>
            <p className={classes.otherClinics_2nd}>登記 Registration / 取藥 Medicine</p>  
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <p className={classes.title}>診症室 Room</p>
          </div>
          <div className={classes.roomContainer}>
            <h1 className={classes.roomNum}>1</h1>
          </div>
          <div className={classes.roomContainer}>
            <h1 className={classes.roomNum}>2</h1>
          </div>
          <div className={classes.roomContainer}>
            <h1 className={classes.roomNum}>3</h1>
          </div>
          <div className={classes.roomContainer}>
            <p className={classes.otherClinics_1st}>護士站 Nurse station</p>
            <p className={classes.otherClinics_2nd}>登記 Registration / 取藥 Medicine</p>
          </div>
        </div>
      );
    }
  }
  return null;
};

export default Room;
