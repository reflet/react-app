import classes from "../css/CssModules.module.scss";

function CssModules () {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modulesです</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
}

export default CssModules;
