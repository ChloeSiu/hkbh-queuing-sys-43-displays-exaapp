import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Info.module.css";
import data from "../../data/data.json";

const Info = (props: { orientation: "landscape" | "portrait", numOfComponentsOnRight: 2 | 3 | 4 }) => {
    const showComponent: boolean = data.displayProfileLayout.Info;
    const numOfComponentsOnRight: number = props.numOfComponentsOnRight;
    const { displayProfileLayout } = data;

    if (!showComponent) {
        return null;
    } else if (props.orientation === "landscape") {
        if (numOfComponentsOnRight === 2) {
            return (
                <div className={classes.container2}>
                    <p className={classes.date}>2023年10月26日 星期四 7:30 AM</p>
                    <div className={classes.weatherInfoContainer}>
                        <div className={classes.weather}>
                            <FontAwesomeIcon icon={faSun} style={{color: "#ffffff", width: "55px", height: "55px"}} />
                            <p className={classes.temperature}>31°C</p>
                        </div>
                        <div className={classes.humidity}>
                            <FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff", width: "55px", height: "55px"}} />
                            <p className={classes.humidityLevel}>59%</p>
                        </div>
                    </div>
                </div>
            );
        } else if (numOfComponentsOnRight === 3) {
            return (
                <div className={classes.container}>
                    <p className={classes.date}>2023年10月26日 星期四 7:30 AM</p>
                    <div className={classes.weatherInfoContainer}>
                        <div className={classes.weather}>
                            <FontAwesomeIcon icon={faSun} style={{color: "#ffffff", width: "55px", height: "55px"}} />
                            <p className={classes.temperature}>31°C</p>
                        </div>
                        <div className={classes.humidity}>
                            <FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff", width: "55px", height: "55px"}} />
                            <p className={classes.humidityLevel}>59%</p>
                        </div>
                    </div>
                </div>
            );
        } else if (numOfComponentsOnRight === 4) {
            return (
                <div className={classes.container4}>
                    <p className={classes.date4}>2023年10月26日 星期四 7:30 AM</p>
                    <div className={classes.weatherInfoContainer4}>
                        <div className={classes.weather4}>
                            <FontAwesomeIcon icon={faSun} style={{color: "#ffffff", width: "28px", height: "28px"}} />
                            <p className={classes.temperature4}>31°C</p>
                        </div>
                        <div className={classes.humidity4}>
                            <FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff", width: "28px", height: "28px"}} />
                            <p className={classes.humidityLevel4}>59%</p>
                        </div>
                    </div>
                </div>
            );
        }
    } else if (props.orientation === "portrait" && !displayProfileLayout.TV) {
        return (
            <div className={classes.containerP}>
            <p className={classes.dateP}>2023年10月26日 星期四 7:30 AM</p>
            <div className={classes.weatherInfoContainer}>
                <div className={classes.weather}>
                    <FontAwesomeIcon icon={faSun} style={{color: "#ffffff", width: "48px", height: "48px"}} />
                    <p className={classes.temperature}>31°C</p>
                </div>
                <div className={classes.humidity}>
                    <FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff", width: "48px", height: "48px"}} />
                    <p className={classes.humidityLevel}>59%</p>
                </div>
            </div>
        </div>
        );
    }
    return null;
};

export default Info;