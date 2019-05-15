import React, {Component} from 'react';
import axios from 'axios';

class Sort extends Component {
    constructor (props) {
        super(props);

        this.config = {
            inDuration: 400,
            outDuration: 400
        }

        this.state = {
            category: [],
            activity: [],
            brand: []
        }
    }

    getFilters () {
        axios.get('/api/getfilters.php').then((resp) => {
            this.setState({
                category: resp.data.data.category,
                activity: resp.data.data.activity,
                brand: resp.data.data.company
            })
        })
    }

    sortItems (event, type) {
        console.log(event.target.innerHTML);
        console.log('type is', type);
        // if (key.indexOf('\'') !== -1) {
        //     key = key.slice(0, key.indexOf('\'')) + '\\' + key.slice(key.indexOf('\''), -1); 
        // }

        // console.log(key);

        // axios.get('/api/sortItems.php').then((resp => {
        //     console.log('sort the items');
        // }))
    }

    componentDidMount () {
        M.Collapsible.init(this.Collapsible, this.config);

        this.getFilters();
    }

    render () {
        const category = this.state.category.map((key) => {
            return (
                <li key={key} onClick={
                    this.sortItems
                }>{key}
                </li>
            )
        })

        const activity = this.state.activity.map((key) => {
            return <li key={key}>{key}</li>
        })

        const brand = this.state.brand.map((key) => {
            return <li key={key} onClick={this.sortItems}>{key}</li>
        })

        return (
            <ul className="collapsible" ref={(element) => {this.Collapsible = element}} data-collapsibe="expandable">
                <li>
                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Category</div>
                    <div className="collapsible-body"><ul>{category}</ul></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">place</i>Activity</div>
                    <div className="collapsible-body"><ul>{activity}</ul></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Brand</div>
                    <div className="collapsible-body"><ul>{brand}</ul></div>
                </li>
            </ul>
        )
    }
}

export default Sort;
