import { Fragment } from 'react';
import { ResponsiveAppBar } from './ResponsiveNavBar';

import mealImage from '../../images/food.jpg';
import classes from './Header.module.css';


const Header = props => {
   
    return <Fragment>
        <ResponsiveAppBar />
        <div className={classes['main-image']}>
            <img src={mealImage} alt="baked bread" />
        </div>
    </Fragment>
};

export default Header;