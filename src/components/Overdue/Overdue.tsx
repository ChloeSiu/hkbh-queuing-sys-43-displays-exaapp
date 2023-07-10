import classes from "./Overdue.module.css";
import data from "../../data/data.json";

const Overdue = (props: {
  orientation: "landscape" | "portrait";
  numOfComponentsOnRight: 2 | 3 | 4;
}) => {
  let numArray: string[] = data.displayProfileContents.overdueTickets;
  const showComponent: boolean = data.displayProfileLayout.OverDue;
  const numOfComponentsOnRight: number = props.numOfComponentsOnRight;

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    if (numOfComponentsOnRight === 2) {
      return (
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <p className={classes.title}>逾期籌號 Overdue Ticket</p>
          </div>
          <div className={classes.numContainer}>
            {numArray.map((num) => {
              if (numArray.indexOf(num) === numArray.length - 1)
                return <p className={classes.number}>{num}</p>;
              else return <p className={classes.number}>{num},</p>;
            })}
          </div>
        </div>
      );
    } else if (numOfComponentsOnRight === 3) {
      return (
        <div className={classes.container3}>
          <div className={classes.titleContainer3}>
            <p className={classes.title3}>逾期籌號 Overdue Ticket</p>
          </div>
          <div className={classes.numContainer3}>
            {/* numArray.slice(0, 1) only displays the first element in the numArray */}
            <p className={classes.number3}>{numArray.slice(0, 1)}</p>
          </div>
        </div>
      );
    } else if (numOfComponentsOnRight === 4) {
      return (
        <div className={classes.containerN}>
          <div className={classes.titleContainerN}>
            <p className={classes.title_cnN}>逾期籌號</p>
            <p className={classes.title_enN}>Overdue Ticket</p>
          </div>
          <div className={classes.numContainerN}>
            {/* numArray.slice(0, 1) only displays the first element in the numArray */}
            <p className={classes.numberN}>{numArray.slice(0, 1)}</p>
          </div>
          <div className={classes.notiContainerN}>
            <p className={classes.notification_cnN}>請與櫃位職員聯絡</p>
            <p className={classes.notification_enN}>
              Please proceed to the registration counter
            </p>
          </div>
        </div>
      );
    }
  } else if (props.orientation === "portrait") {
  }
  return null;
};

export default Overdue;
