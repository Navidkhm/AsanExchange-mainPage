import React, { Component, ReactDOM } from 'react';
import Pros from './Pros';
import Posts from './posts';
import Info from './Info';
import CustomizedTables from './Table';
import ReactPageScroller from "react-page-scroller";
import ShortSlider from './ShortSlider';
import Footer from './Footer';
import Menu from './Menu';
import AntdSlider from './antdSlider';
import Animation from './Animation';
import {Pager} from "react-bootstrap"


class Main extends Component {
    
    constructor(props){
        super(props);
        this.state = { currentPage: null };
        
    }
    
    handlePageChange = number => {
      this.setState({ currentPage: number });
    };
  
    handleBeforePageChange = number => {
      console.log(number);
    };
  


    render() {
        return (
          <>
{/*             
            <ReactPageScroller 
             pageOnChange={this.handlePageChange}
             onBeforePageScroll={this.handleBeforePageChange}
             customPageNumber={this.state.currentPage}
            ref={c => this.reactPageScroller = c} className='numnum'> */}
             
              <AntdSlider/>
              <Info/>
              <div className='prosandposts'>
                  <Pros id='#hello'/>
                  <Posts/>
              </div>
              <ShortSlider/>
              <Footer/>
            {/* </ReactPageScroller> */}
            {/* <Pager className="pagination-additional-class" bsSize="large">
            {pagesNumbers}
            </Pager> */}
          </>
          
                
                
           

        );
    }
}

export default Main;