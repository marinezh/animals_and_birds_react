import React, { Component } from "react";
import { birds } from "./birds";
import Card from "./Card";
import "./Birds.css";


class Birds extends Component {
  state = {
    birds: birds,
    search: "",
  };

  removeHandler = (theClickedName) => {
    console.log("remove was clicked", theClickedName);
    const updatedArray = this.state.birds.filter(
      (bird) => bird.name !== theClickedName
    );

    this.setState({ birds: updatedArray });
  };

  addHandle = (name) => {
    console.log("add was clicked");
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
  };

  removeHandle = (name) => {
    console.log("remove was clicked", name);
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name === name) {
          return {
            ...bird,
            dislikes: !bird.dislikes ? -1 : bird.dislikes - 1,
          };
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
    console.log(this.state.birds);
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    //     const newAnimalList = this.state.animals.map((animal) => {
    //         return ({...animal, dislikes: 0})
    //   })

    const birdFilter = this.state.birds.filter((bird) => {
      console.log("ffff");
      return bird.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    // this.state.animals below replaced with animalFilter
    const birdsList = birdFilter.map((bird) => {
      return (
        <Card
          key={bird.name}
          name={bird.name}
          likes={bird.likes}
          dislikes={bird.dislikes}
          removeCard={() => this.removeHandler(bird.name)}
          addLikes={() => this.addHandle(bird.name)}
          removeLikes={() => this.removeHandle(bird.name)}
        />
      );
    });

    return (
      <main>
        <h1>{this.state.birds.length} birds</h1>
        {/* <h1>{this.state.search}</h1> */}

        <input onChange={this.searchHandler} type="search" />
        <div className="Cards_container">{birdsList}</div>
      </main>
    );
  }
}

export default Birds;

