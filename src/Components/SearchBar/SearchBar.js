import React from 'react';
import { FetchHeroes } from '../../Services/FetchData/FetchHeroes';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedHeroes: [],
            filteredHeroes: []
        }
    }
    componentDidMount() {
        FetchHeroes()
            .then(data => {
                this.setState({ searchedHeroes: data.data.results, filteredHeroes: data })
            })
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