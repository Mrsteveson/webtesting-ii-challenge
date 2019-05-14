import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0
    };

    render() {
        return(
            <div>
                <div>
                    <button onClick={this.strike}>Strike</button>
                    <button onClick={this.ball}>Ball</button>
                    <button onClick={this.foul}>Foul</button>
                    <button onClick={this.hit}>Hit</button>
                </div>
                <h1>The Count</h1>
                <Display 
                    strikes = {this.state.strikes}
                    balls = {this.state.balls}
                    fouls = {this.state.fouls}
                    hits = {this.state.hits}
                />
            </div>
        )
    };

    reset = () => {
        this.setState({
            strikes: 0,
            balls: 0,
            fouls: 0,
        });
    };

    strike = () => {
        if(this.state.strikes < 2) {
            this.setState({ strikes: this.state.strikes + 1 })
        } else {
            this.reset();
        };
    };

    ball = () => {
        if(this.state.balls < 3) {
            this.setState({ balls: this.state.balls + 1 })
        } else {
            this.reset();
        };
    };

    foul = () => {
        if(this.state.strikes < 2) {
            this.setState({
                strikes: this.state.strikes + 1,
                fouls: this.state.fouls + 1
            });
        } else {
            this.setState({ fouls: this.state.fouls + 1 })
        }
    };

    hit = () => {
       this.setState({ hits: this.state.hits + 1});
       this.reset();
    };

};

export default Dashboard;