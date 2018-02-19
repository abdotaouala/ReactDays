import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { days: 0,date:1,date1:2 };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <div className="well clearfix">
                {this.getMessage()}
                Date1: <input type="date" value={this.state.date} onChange={this.handleChange} />
                Date2: <input type="date" value={this.state.date1} onChange={this.handleChange1} />
                <button  onClick={this.handleClick} >Submit</button>
            </div>
        );
    }
    handleChange(event) {
        // this.setState({date: event.target.value});
        this.setState({
            date: event.target.value
        });
    }
    handleChange1(event) {
        //this.setState({date1: event.target.value});
        this.setState( {
            date1: event.target.value
        });
    }
    handleClick(e) {
        e.preventDefault();
        //this.setState({days: this.parseDate(this.state.date,this.state.date1)});
        this.setState({
            days: this.parseDate(this.state.date,this.state.date1)
        });
    }
    getMessage() {
        return (
            <h1>number of days : {Math.abs(this.state.days)}</h1>
        );
    }
    parseDate(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
}

export default App;
