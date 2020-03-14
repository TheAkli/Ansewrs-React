import React, { Component } from 'react';
import movies from './movies.js';
import Frontend from './Frontend';
import './style1.css';



class Inter extends Component {

    state = {
        resultat : movies,
        page: 1,
        item : ""
      }

      handleChange = (e) => {
        this.setState({
            item : e.target.value
        })
      }

      handlePrev = (e) => {
        if(this.state.page !== 1){
            this.setState({
                page : this.state.page -1
            })
        }       
    }

      handleNext = (e) => {
        if(this.state.page !== 3){
            this.setState({
                page : this.state.page +1
            })
        }       
    }

    handleSupprime = (e) => {
      this.setState({
        resultat : this.state.resultat.filter(f => (f.title !== e.target.name))
      })
    }
    
    
    render() {
      console.log(this.state.resultat)
        const todoSearch = 
        this.state.resultat.filter(f =>      
        (f.category.toLowerCase().indexOf(this.state.item) !== -1) || (f.category.toUpperCase().indexOf(this.state.item) !== -1));
        return (
          <div>
            
            
            <div className="afficher">
              {todoSearch.slice((this.state.page-1)*4, this.state.page*4).map((e,i) => (
              <div className="bloc-1">
                <Frontend key={i} title={e.title} category={e.category} handleSupprime={this.handleSupprime}like={e.likes} dislike={e.dislikes} /> 
				
				
				
              </div>))}
            </div>
			<div className="pagination">
              <button onClick={this.handlePrev}>Previous</button>
              <button onClick={this.handleNext}>Next</button>
            </div>
          </div>
    )
  }
}

export default Inter;