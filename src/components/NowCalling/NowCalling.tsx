import { CSSProperties, useEffect, useState } from "react";

import classes from "./NowCalling.module.css";
import data from "../../data/data.json";

const NowCalling = (props: {
  orientation: "landscape" | "portrait";
  numOfComponentsOnRight: 2 | 3 | 4;
}) => {
  const numArray: string[] = data.displayProfileContents.nowServingTicketNos;
  const showComponent: boolean = data.displayProfileLayout.NowServing;
  const numOfComponentsOnRight: number = props.numOfComponentsOnRight;
  const { displayProfileLayout } = data;
  let count = 0;

  // to set a different style for Now Calling number in the middle row
  const [numStyle, setNumStyle] = useState<CSSProperties>({
    color: "#009944",
    font: "normal normal 900 170px/36px Noto Sans TC",
  });
  useEffect(() => {
    if (displayProfileLayout.Room)
      setNumStyle({
        color: "#009944",
        font: "normal normal 900 170px/36px Noto Sans TC",
      });
    else
      setNumStyle({
        color: "#1a1a3e",
        font: "normal normal 900 126px/36px Noto Sans TC",
      });
  }, [displayProfileLayout.Room]);

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    if (numOfComponentsOnRight === 2) {
      if (!displayProfileLayout.Clinic) {
        return (
          <div className={classes.containerS}>
            <div className={classes.titleContainerS}>
              <p className={classes.titleS}>現在籌號 Now Calling</p>
            </div>
            {numArray.map((num) => {
              if (count < 3) {
                count += 1;
                return (
                  <div className={classes.numContainerNoClinic}>
                    <p className={classes.numberNoClinic}>{num}</p>
                    <p className={classes.overdueNoClinic}>
                      {data.displayProfileContents.overdueTickets[count]} {/* Modify here later to handle different queues' overdue */}
                    </p>
                  </div>
                );
              } else return null;
            })}
          </div>
        );
      } else if (displayProfileLayout.Clinic && !displayProfileLayout.OverDue) {
        return (
          <div className={classes.containerS}>
            <div className={classes.titleContainerS}>
              <p className={classes.titleS}>現在籌號 Now Calling</p>
            </div>
            {numArray.map((num) => {
              return (
                <div className={classes.numContainerS}>
                  <p className={classes.numberS}>{num}</p>
                </div>
              );
            })}
          </div>
        );
      } else if (displayProfileLayout.Clinic && displayProfileLayout.OverDue) {
        return (
          <div className={classes.container}>
            <div className={classes.titleContainer}>
              <p className={classes.title}>現在籌號 Now Calling</p>
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
      }
    } else if (numOfComponentsOnRight === 3) {
      return (
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <p className={classes.title}>現在籌號 Now Calling</p>
          </div>
          <div className={classes.numContainer3}>
            <p className={classes.number3}>{numArray.slice(0, 1)}</p> {/* numArray.slice(0, 1) only displays the first element in the numArray */}
          </div>
        </div>
      );
    } else if (numOfComponentsOnRight === 4) {
      return (
        <div className={classes.containerS}>
          <div className={classes.titleContainerS}>
            <p className={classes.titleS}>現在籌號 Now Calling</p>
          </div>
          {numArray.map((num) => {
            if (count < 3) {
              count += 1;
              if (count === 2) {
                return (
                  <div className={classes.numContainerN}>
                    <p className={classes.numberN} style={numStyle}>
                      {num}
                    </p>
                  </div>
                );
              }
              return (
                <div className={classes.numContainerN}>
                  <p className={classes.numberN}>{num}</p>
                </div>
              );
            } else return null;
          })}
        </div>
      );
    }
  } else if (props.orientation === "portrait") {
    if (displayProfileLayout.TV) {
      return (
        <div className={classes.containerPTV}>
          <div className={classes.titleContainerPTV}>
            <p className={classes.titlePTV}>現在籌號 Now Calling</p>
          </div>
          {numArray.map((num) => {
            return (
              <div className={classes.numContainerPTV}>
                <p className={classes.numberPTV}>{num}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={classes.containerP}>
          <div className={classes.titleContainerP}>
            <p className={classes.titleP}>現在籌號 Now Calling</p>
          </div>
          {numArray.map((num) => {
            return (
              <div className={classes.numContainerP}>
                <p className={classes.numberP}>{num}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
  return null;
};

export default NowCalling;
