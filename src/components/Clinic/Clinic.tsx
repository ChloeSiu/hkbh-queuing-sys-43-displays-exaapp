import classes from './Clinic.module.css';
import data from '../../data/data.json';

const Clinic = (props: { orientation: "landscape" | "portrait"}) => {
    const showComponent: boolean = data.displayProfileLayout.Clinic;
    const name: string = data.displayProfileContents.clinicName;
    const { displayProfileLayout } = data;

    if (!showComponent) {
        return null;
    } else if (props.orientation === "landscape") {
        return (
            <div className={classes.container}>
                <h1 className={classes.clinicName}>{name}</h1>
            </div>
        );
    } else if (props.orientation === "portrait") {
        if (displayProfileLayout.TV) {
            return (
                <div className={classes.containerPTV}>
                    <h1 className={classes.clinicNamePTV}>{name}</h1>
                </div>
            );
        } else {
            return (
                <div className={classes.containerP}>
                    <h1 className={classes.clinicNameP}>{name}</h1>
                </div>
            );
        }
    }
    return null;
};

export default Clinic;