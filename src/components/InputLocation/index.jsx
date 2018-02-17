import React from 'react';
import Autocomplete from "./autocompleter";//todo "react-async-autocomplete";
import {searchLocations} from '../../apiAdapter';
import './index.css';

export default class InputLocation extends React.Component {

    constructor() {
        super();
        this.state = {
            selected: undefined
        }
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    // invoked when the user types something. A delay of 200ms is
    // already provided to avoid DDoS'ing your own servers
    async onChange(query) {
        const locations = await searchLocations(query);
        this.refs.autocomplete.setItems(locations);
    }

    // called when the user clicks an option or hits enter
    onSelect(location) {

        this.setState({
            selected: location.id
        });


        this.props.onChange(location.id);

        return location.name;
    }

    render() {
        return (
            <div className={'autocompleter'}>
                <Autocomplete
                    value={this.props.defaultValue}
                    ref="autocomplete"
                    renderItem={(item) => {

                        //console.log(item);
                        //todo highlighted
                        return (
                            <span className={item.highlighted ? 'hovered' : ''}>
                                {item.item.name}
                            </span>
                        );
                    }}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }

};