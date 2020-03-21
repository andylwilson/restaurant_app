import React, {Component} from 'react';
import Title from './Title';
import Reservation from './Reservation';
import AddReservation from './AddReservation';
import Table from './Table';
import AddsTables from './AddsTables';
import Dish from './Dish';
import AddDish from './AddDish';
import UpdateMenuItem from './UpdateMenuItem' 
import DishList from './DishList';
import Nav from './Nav';
import Front from './Front';
import Waitress from './Waitress';
import Chef from './Chef';

class Main extends Component {   
    render(){      
        return(
              <div>
                <Title/> 
                <br/>
                <Front/>
                <br/>
                <br/> 
                <Waitress/>
                <br/>
                <Chef/>    
              </div>      
              )   //before in div was<DishList/> <Dish/><AddDish/>
             // <UpdateMenuItem/>
    }
}
export default Main;
