import { useEffect, useState } from "react";

import classes from "./Wrapper.module.css";
import data from "../../data/data.json";

import Header from "../Header/Header";
import Clinic from "../Clinic/Clinic";
import NowCalling from "../NowCalling/NowCalling";
import Overdue from "../Overdue/Overdue";
import Waiting from "../Waiting/Waiting";
import OtherClinics from "../OtherClinics/OtherClinics";
import Info from "../Info/Info";
import Room from "../Room/Room";
import TV from "../TV/TV";

// enum allows developers to define a swt of named constants, which makes it easier to document intent or create a set of distict cases. Typescript provides both numeric and string-based enums.
enum Orientation {
  LANDSCAPE = "landscape",
  PORTRAIT = "portrait"
};

enum NumOfComponentsOnRight {
  TWO = 2,
  THREE = 3,
  FOUR = 4
}

// defining the shape of the object first so that we can use it as a type
// interface DisplayProfileLayout {
//   orientation: Orientation;
//   numOfComponentsOnRight: NumOfComponentsOnRight;
//   Clinic?: boolean;
//   OtherClinic?: boolean;
//   Overdue?: boolean;
// }

const Wrapper = (): JSX.Element => {
  const [orientation, setOrientation] = useState(Orientation.LANDSCAPE)
  const [numOfComponentsOnRight, setnumOfComponentsOnRight] = useState(NumOfComponentsOnRight.TWO);
  const { displayProfileLayout } = data;

  const wrapperStyle = {
    width: displayProfileLayout.Width,
    height: displayProfileLayout.Height
  };

  // this useEffect sets the orientation of the screen based on the width and height of the screen
  useEffect(() => {
    if (displayProfileLayout.Width === "1920px" && displayProfileLayout.Height === "1080px") setOrientation(Orientation.LANDSCAPE);
    else setOrientation(Orientation.PORTRAIT);
  }, [displayProfileLayout.Width, displayProfileLayout.Height]);

  // this useEffect sets the number of components on the right side of the screen based on the displayProfileLayout
  useEffect(() => {
    if (displayProfileLayout.Noti) setnumOfComponentsOnRight(NumOfComponentsOnRight.FOUR);
    else if (displayProfileLayout.OtherClinics && displayProfileLayout.OverDue) setnumOfComponentsOnRight(NumOfComponentsOnRight.THREE);
    else setnumOfComponentsOnRight(NumOfComponentsOnRight.TWO);
  }, [displayProfileLayout]);

  // define rendering functions for each component to increase the readability of the code
  const renderHeaderAndClinic = (): JSX.Element => (
    <>
      <Header orientation={orientation} />
      <Clinic orientation={orientation} />
    </>
  );

  const renderInfo = (): JSX.Element => (
    <Info
      orientation={orientation} 
      numOfComponentsOnRight={numOfComponentsOnRight}
    />
  );

  const renderNowCalling = (): JSX.Element => ( 
    <NowCalling
      orientation={orientation} 
      numOfComponentsOnRight={numOfComponentsOnRight}
    />
  );

  const renderOtherClinics = (): JSX.Element => ( 
    <OtherClinics
      orientation={orientation} 
      numOfComponentsOnRight={numOfComponentsOnRight}
    />
  );

  const renderOverdue = (): JSX.Element => ( 
    <Overdue
      orientation={orientation} 
      numOfComponentsOnRight={numOfComponentsOnRight}
    />
  );

  const renderRoom = (): JSX.Element => ( 
    <Room
      orientation={orientation} 
      numOfComponentsOnRight={numOfComponentsOnRight}
    />
  );

  const renderWaiting = (): JSX.Element => ( 
    <Waiting
      orientation={orientation} 
      numOfComponentsOnRight={numOfComponentsOnRight}
    />
  );

  const renderTV = (): JSX.Element => (
    <TV orientation={orientation} />
  );

  // Different preset layouts
  const renderContentWith4ComponentsOnRight = (): JSX.Element => (
    <div className={classes.contentWrapper}>
      <div className={classes.leftColumn4}>
        {renderNowCalling()}
      </div>
      {renderRoom()}
      <div className={classes.rightColumn4}>
        {renderWaiting()}
        {renderOverdue()}
        {renderInfo()}
      </div>
    </div>
  );

  const renderContentWith3ComponentsOnRight = (): JSX.Element => (
    <div className={classes.contentWrapper}>
      <div className={classes.leftColumn}>
        {renderNowCalling()}
        {renderOtherClinics()}
      </div>
        <div className={classes.rightColumn}>
          {renderWaiting()}
          {renderOverdue()}
          {renderInfo()}   
        </div>
    </div>
  );

  const renderContentWith2ComponentsOnRightWithoutClinic = (): JSX.Element => (
    <div className={classes.contentWrapper}>
      <div className={classes.leftColumnNoClinic}>
        {renderNowCalling()}
      </div>
      {renderRoom()}
      <div className={classes.rightColumnNoClinic}>
        {renderWaiting()}
        {renderInfo()}
      </div>
    </div>
  );

  const renderContentWith2ComponentsOnRightWithoutOverdue = (): JSX.Element => (
    <div className={classes.contentWrapper}>
      <div className={classes.leftColumn}>
        {renderNowCalling()}
      </div>
      {renderRoom()}
      <div className={classes.rightColumn}>
        {renderWaiting()}
        {renderInfo()}
      </div>
    </div>
  );

  const renderContentWith2ComponentsOnRightWithoutOtherClinics = (): JSX.Element => (
    <div className={classes.contentWrapper}>
      <div className={classes.leftColumn}>
        {renderNowCalling()}
        {renderOverdue()}
      </div>
      <div className={classes.rightColumn}>
        {renderWaiting()}
        {renderInfo()} 
      </div>
    </div>
  );

  // Portraits
  const renderPortrait = (): JSX.Element => (
    <div className={classes.wrapperContainerP}>
      <div className={classes.contentWrapperP}>
          {renderNowCalling()}
          {renderRoom()}
      </div>
          {renderWaiting()}
          {renderInfo()}
    </div>
  );

  const renderPortraitWithTV = (): JSX.Element => (
    <div className={classes.wrapperContainerP}>
      <div className={classes.contentWrapperPTV}>
          {renderNowCalling()}
          {renderRoom()}
      </div>
          {renderWaiting()}
          {renderTV()}
          {renderInfo()}
    </div>
  );

  return (
    <div className={classes.wrapperContainer} style={wrapperStyle}>
      {renderHeaderAndClinic()}
      {orientation === Orientation.LANDSCAPE ? (
        numOfComponentsOnRight === NumOfComponentsOnRight.FOUR ? ( 
          renderContentWith4ComponentsOnRight() // Landscape with 4 components on right
        ) : numOfComponentsOnRight === NumOfComponentsOnRight.THREE ? ( 
          renderContentWith3ComponentsOnRight() // Landscape with 3 components on right
        ) : numOfComponentsOnRight === NumOfComponentsOnRight.TWO ? ( 
          !displayProfileLayout.Clinic ? (
            renderContentWith2ComponentsOnRightWithoutClinic() // Landscape with 2 components on right and without Clinic
          ) : (displayProfileLayout.Clinic && !displayProfileLayout.OverDue) ? (
            renderContentWith2ComponentsOnRightWithoutOverdue() // Landscape with 2 components on right and with Clinic but without Overdue
          ) : (displayProfileLayout.Clinic && displayProfileLayout.OverDue) ? (
            renderContentWith2ComponentsOnRightWithoutOtherClinics() // Landscape with 2 components on right and with Clinic and Overdue
          ) : null
        ) : null
      ) : orientation === Orientation.PORTRAIT ? (
          !displayProfileLayout.TV ? (
            renderPortrait() 
          ) : (
            renderPortraitWithTV() 
          )
      ) : null}
    </div>
  );
};

export default Wrapper;
