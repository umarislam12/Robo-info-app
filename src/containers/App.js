import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import  './App.css'
import Scroll from'../components/Scroll'
class App extends Component{
	
	constructor(){
		super();
		this.state={
			robots:[],
			Searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>
			 response.json()) 
			.then(user=>
			this.setState( {robots:user}));
		
	}
	onSearchChange=(event)=>{
		this.setState({Searchfield:event.target.value})
	}


	render(){
		const{robots,Searchfield}= this.state;
		const filteredrobots=robots.filter(robot=>{
		return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
		})
			return !robots.length ?
				
					<h1>loading</h1>:
				
			(
				<div className='tc f3'>
					<h1>Robots app</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredrobots}/>
					</Scroll>
				</div>
				);
			}
	}

export default App;