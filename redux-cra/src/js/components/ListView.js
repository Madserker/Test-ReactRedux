import React from 'react';
import ListItem from './ListItem';
import './styles.css';


export default class ListView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gnomes:[]
        }
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(res => res.json())
        .then(data => this.setState({gnomes: data.Brastlewark}))
    }
    render(){
        return(
            <div>
                {
                    this.state.gnomes.map((gnome) => (
                        <div className="item" key={gnome.id}>
                            <h3>{gnome.name}</h3>
                        </div>
                    )
                    )
                }
            </div>
        )
    }
}