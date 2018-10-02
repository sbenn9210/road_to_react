import React, { Component } from "react";
import "./App.css";

import Binding from "./components/Binding";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  }
];

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

function userSearch(searchUserTerm) {
  return function(user) {
    return user.name.toLowerCase().includes(searchUserTerm.toLowerCase());
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
      users,
      Shawn: "Shawn is awesome.",
      searchTerm: "",
      searchUserTerm: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onGetOut = this.onGetOut.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchUser = this.onSearchUser.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onGetOut(id) {
    const isNotIds = user => user.id !== id;
    const updatedGroup = this.state.users.filter(isNotIds);
    this.setState({ users: updatedGroup });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  }

  onSearchUser(event) {
    this.setState({ searchUserTerm: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <input type="text" onChange={this.onSearchChange} />
          </form>
        </div>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                type="button"
                onClick={() => this.onDismiss(item.objectID)}
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
        <form>
          <input type="text" onChange={this.onSearchUser} />
        </form>
        {this.state.users
          .filter(userSearch(this.state.searchUserTerm))
          .map(user => {
            return (
              <div key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>
                  <button type="button" onClick={() => this.onGetOut(user.id)}>
                    GET OUT
                  </button>
                </span>
              </div>
            );
          })}
        <div>
          <p>{this.state.Shawn}</p>
          <Binding />
        </div>
      </div>
    );
  }
}

export default App;
