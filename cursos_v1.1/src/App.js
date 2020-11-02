import React, { Component } from 'react';
import './App.css';

import Course from './components/Course';
import NewCourseForm from './components/NewCourseForm';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        courses: [
          {
            id: 1,
            name: 'React',
            category: 'JavaScript',
            image: 'https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png' 
          },
          {
            id: 2,
            name: 'Angular',
            category: 'JavaScript',
            image: 'https://th.bing.com/th/id/OIP.RZEtIKWw_7BOLdz7GEJ3EgHaFG?pid=Api&rs=1' 
          }
        ]
      }
      this.add = this.add.bind(this);
      this.remove = this.remove.bind(this);
    }

    add(course) {
      const { courses } = this.state,
        newCourse = Object.assign({}, course, {id: (Date.now())});
      courses.push(course);
      this.setState({courses});
    }

    remove(courseId) {
      const { courses } = this.state,
        courseIndex = courses.findIndex(course => course.id == courseId);

      courses.splice(courseIndex, 1);
      this.setState({courses});  
    }

    render() {
      const { state } = this;

      return (
        <div className="App">
          <NewCourseForm  onSubmit={ this.add } />
          <ul className="courses-list" >
            {
              state.courses.map(course => <Course course={ course } onRemove={ this.remove } />)
            }
          </ul>
        </div>
      );
    }
}

export default App;
