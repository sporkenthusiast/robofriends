import React, { Component } from 'react';
import Card from './Card';


class Cardlist extends Component {
    render(){
        const { robots } = this.props;
        return(
            <div>
                { 
                    robots.map((users, i) => {
                        return (
                            <Card
                                key={i}
                                id={robots[i].id}
                                name={robots[i].name}
                                email={robots[i].email}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Cardlist;