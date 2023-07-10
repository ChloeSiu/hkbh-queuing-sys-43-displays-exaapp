import classes from "./TV.module.css";
import data from "../../data/data.json";

const TV = (props: { orientation: "landscape" | "portrait" }) => {
  const showComponent: boolean = data.displayProfileLayout.TV;

  if (props.orientation === "landscape") {

  } else if (props.orientation === "portrait" && showComponent) {
    return (
      <>
        <div className={classes.tvWrapperP}>
          <h1 className={classes.temp}>This is for TV</h1>
        </div>
        <div className={classes.newsBarP}>
          <p className={classes.newsBarPContents}>（15:15) 本港今天新增5361例COVID-19（2019冠狀病毒疾病）確診案，其中4954例為本土感染，407例為海外移入。港府並公布，過去一天再添5名確診者病亡。</p>
        </div>
      </>
    );
  }
  return null;
};

export default TV;
