import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedHeroes: [{ name: "nenad" }, { name: "veljko" }, { name: "stefan" }, { name: "srdja" }],
            filteredHeroes: [{ name: "nenad" }, { name: "veljko" }, { name: "stefan" }, { name: "srdja" }]
        }
    }

    searchHeroes = (event) => {
        const filtered = this.state.searchedHeroes.filter(hero => {
            return hero.name.includes(event.target.value)
        })
        this.setState({ filteredHeroes: filtered })
    }

    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" required onChange={this.searchHeroes} />
                            <label class="label-icon" for="search"></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>

        );

    }

}






export { SearchBar };