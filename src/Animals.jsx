import React, { Component } from "react";
import { animals } from "./animals";
import Card from "./Card";
import "./Animals.css";


class Animals extends Component {
  state = {
    animals: animals,
    search: "",
  };

  removeHandler = (theClickedName) => {
    console.log("remove was clicked", theClickedName);
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== theClickedName
    );

    this.setState({ animals: updatedArray });
  };

  addHandle = (name) => {
    console.log("add was clicked");
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  removeHandle = (name) => {
    console.log("remove was clicked", name);
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return {
            ...animal,
            dislikes: !animal.dislikes ? -1 : animal.dislikes - 1,
          };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
    console.log(this.state.animals);
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    //     const newAnimalList = this.state.animals.map((animal) => {
    //         return ({...animal, dislikes: 0})
    //   })

    const animalFilter = this.state.animals.filter((animal) => {
      console.log("ffff");
      return animal.name.includes(this.state.search);
    });

    // this.state.animals below replaced with animalFilter
    const animalList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          dislikes={animal.dislikes}
          removeCard={() => this.removeHandler(animal.name)}
          addLikes={() => this.addHandle(animal.name)}
          removeLikes={() => this.removeHandle(animal.name)}
        />
      );
    });

    return (
      <main>
        <h1>{this.state.animals.length} animals</h1>
        {/* <h1>{this.state.search}</h1> */}

        <input onChange={this.searchHandler} type="search" />
        <div className="Cards_container">{animalList}</div>
      </main>
    );
  }
}

export default Animals;
