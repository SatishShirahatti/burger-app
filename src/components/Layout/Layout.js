import React from "react";

import Aux from "../../hoc/Hoc";
import classes from "./Layout.css";

const layout =(props)=>
(
	<Aux>
	<div>Toolbar , Sidebar , Backdrop</div>
	<main className={classes.content}> {props.children}
	</main>
	</Aux>
);
export default layout;