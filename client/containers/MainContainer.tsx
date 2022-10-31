/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders HeaderContainer, FeedContainer, AddTaskContainer & HouseContainer
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 // import from child components...
 import HeaderContainer from 'HeaderContainer';
 import FeedContainer from 'FeedContainer';
 import CreateTaskContainer from 'CreateTaskContainer';
 import HouseholdContainer from 'HouseholdContainer';
 import CreateHouseholdContainer from 'CreateHouseholdContainer';

 
//  const mapState = state => ({
//  });
 
 class MainContainer extends Component {
   constructor(props) {
     super(props);
   }
 
   render() {
     return(
       <div className="container">
         <div className="outerBox">
           <h1 id="header">Roommate Chores App</h1>
           <HeaderContainer>
           <FeedContainer>
           <CreateTaskContainer>
           <HouseholdContainer>
           <CreateHouseholdContainer>
         </div>
       </div>
     );
   }
 
 }
 
 export default connect(mapStateToProps, null)(MainContainer);