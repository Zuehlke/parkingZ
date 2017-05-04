import * as React from 'react';
import { NavMenu } from "./NavMenu";

export class App extends React.Component<undefined, void> {


    render() {

        const pageTitle = 'Welcome to the Parking Lot Management Tool';

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <NavMenu></NavMenu>
                    </div>
                    <div className='col-sm-9 body-content'>
                        <h3>Parking Lot Management</h3>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}


