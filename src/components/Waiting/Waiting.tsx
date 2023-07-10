import { useState, useEffect, CSSProperties } from "react";

import classes from "./Waiting.module.css";
import data from "../../data/data.json";

const Waiting = (props: {
  orientation: "landscape" | "portrait";
  numOfComponentsOnRight: 2 | 3 | 4;
}) => {
  let numArray: string[] = data.displayProfileContents.waitingTickets;
  const showComponent: boolean = data.displayProfileLayout.Waiting;
  const numOfComponentsOnRight: number = props.numOfComponentsOnRight;
  const { displayProfileLayout } = data;

  const [numContainerStyle, setNumContainerStyle] = useState<CSSProperties>({
    backgroundColor: "#f1f8f0",
  });
  useEffect(() => {
    if (data.displayProfileLayout.Room)
      setNumContainerStyle({ backgroundColor: "#ffffff" });
    else setNumContainerStyle({ backgroundColor: "#f1f8f0" });
  }, []);

  const printTitle = (): JSX.Element => (
    <>
      <p className={classes.title_cn}>等待籌號</p>
      <p className={classes.title_en}>Waiting Ticket</p>
    </>
  );

  const printNum = (): JSX.Element => {
    if (numOfComponentsOnRight === 3) numArray = numArray.slice(0, 4); // Only showing the first 4 numbers

    return (
      <>
        {numArray.map((num) => {
          if (numArray.indexOf(num) === numArray.length - 1) {
            return <p className={classes.number}>{num}</p>;
          } else {
            return <p className={classes.number}>{num},</p>;
          }
        })}
      </>
    );
  };

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    if (numOfComponentsOnRight === 2) {
      if (!displayProfileLayout.Clinic) {
        return (
          <div className={classes.containerNoClinic}>
            <div className={classes.titleContainer}>{printTitle()}</div>
            <div className={classes.numContainerNoClinic}>{printNum()}</div>
          </div>
        );
      } else if (displayProfileLayout.Clinic && !displayProfileLayout.OverDue) {
        return (
          <div className={classes.container}>
            <div className={classes.titleContainer}>{printTitle()}</div>
            <div className={classes.numContainer} style={numContainerStyle}>
              {printNum()}
            </div>
          </div>
        );
      } else if (displayProfileLayout.Clinic && displayProfileLayout.OverDue) {
        return (
          <div className={classes.container}>
            <div className={classes.titleContainer}>{printTitle()}</div>
            <div className={classes.numContainer} style={numContainerStyle}>
              {printNum()}
            </div>
          </div>
        );
      }
    } else if (numOfComponentsOnRight === 3) {
      return (
        <div className={classes.container3}>
          <div className={classes.titleContainer}>{printTitle()}</div>
          <div className={classes.numContainer3}>{printNum()}</div>
        </div>
      );
    } else if (numOfComponentsOnRight === 4) {
      return (
        <div className={classes.containerN}>
          <div className={classes.titleContainerN}>{printTitle()}</div>
          <div className={classes.numContainerN}>{printNum()}</div>
        </div>
      );
    }
  } else if (props.orientation === "portrait") {
    if (displayProfileLayout.TV) {
      return (
        <div className={classes.containerPTV}>
          <div className={classes.titleContainerPTV}>
            <p className={classes.titlePTV}>等待籌號 Waiting Ticket</p>
          </div>
          <div className={classes.numContainerPTV}>
            <div className={classes.numsWrapperP}>
              {numArray.map((num) => {
                if (numArray.indexOf(num) === numArray.length - 1) {
                  return <p className={classes.numberPTV}>{num}</p>;
                } else {
                  return <p className={classes.numberPTV}>{num},</p>;
                }
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.containerP}>
          <div className={classes.titleContainerP}>
            <p className={classes.titleP}>等待籌號 Waiting Ticket</p>
          </div>
          <div className={classes.numContainerP}>
            <div className={classes.numsWrapperP}>
              {numArray.map((num) => {
                if (numArray.indexOf(num) === numArray.length - 1) {
                  return <p className={classes.numberP}>{num}</p>;
                } else {
                  return <p className={classes.numberP}>{num},</p>;
                }
              })}
            </div>
          </div>
        </div>
      );
    }
  }
  return null;
};

export default Waiting;
