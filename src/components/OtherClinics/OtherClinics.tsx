import classes from "./OtherClinics.module.css";
import data from "../../data/data.json";

const OtherClinics = (props: {
  orientation: "landscape" | "portrait";
  numOfComponentsOnRight: 2 | 3 | 4;
}) => {
  const name: string = data.displayProfileContents.otherClinics;
  const numArray: string[] = data.displayProfileContents.otherClinicsTicketNos;
  const showComponent: boolean = data.displayProfileLayout.OtherClinics;
  const numOfComponentsOnRight: number = props.numOfComponentsOnRight;

  if (!showComponent) {
    return null;
  } else if (numOfComponentsOnRight === 3) {
    return (
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>護士站 Nurse station</p>
          <p className={classes.title}>{name}</p>
        </div>
        <div className={classes.numContainer}>
          {numArray.map((num) => {
            if (numArray.indexOf(num) === numArray.length - 1) {
              return <p className={classes.number}>{num}</p>;
            } else {
              return <p className={classes.number}>{num},</p>;
            }
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default OtherClinics;
