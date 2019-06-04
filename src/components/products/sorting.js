import React, {Component, Fragment} from 'react';
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
            brand: [],
            type: null,
            filter: []
        }

        this.setType = this.setType.bind(this);
        this.sortItems = this.sortItems.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
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

    sortItems (event, str) {
        let key = event.target.innerHTML;

        this.setState({
            filter: [key]
        })
        
        if (key.indexOf('\'') !== -1) {
            key = key.slice(0, key.indexOf('\'')) + '\\\'' + key.slice(key.indexOf('\'') + 1, key.length);
        };

        this.props.filterItems({key, str});
    }
 
    setType (type) {
        this.setState({
            type: type
        });
    }

    clearFilters () {
        this.setState({
            filter: []
        });

        this.props.getProducts();
    }

    componentDidMount () {
        M.Collapsible.init(this.Collapsible, this.config);

        this.getFilters();
    }

    render () {
        const category = this.state.category.map((key) => {
            return <li key={key} onClick={(event) => 
                this.sortItems(event, 'category')
            }>{key}</li>
        });

        const activity = this.state.activity.map((key) => {
            return <li key={key} onClick={(event) => 
                this.sortItems(event, 'activity')
            }>{key}</li>
        });

        const brand = this.state.brand.map((key) => {
            return <li key={key} onClick={(event) => 
                this.sortItems(event, 'brand')
            }>{key}</li>
        });

        const filter = this.state.filter.map((filter) => {
            return (
                <button key="filter" className="btn grey lighten-4" onClick={this.clearFilters}>
                    {filter} <i className="material-icons">close</i>
                </button>
            )
        })

        return (
            <Fragment>
                <ul className="collapsible" ref={(element) => {this.Collapsible = element}} data-collapsibe="expandable">
                    <li>
                        <div className="collapsible-header" onClick={() => {this.setType('category')}}><i className="material-icons">chevron_right</i><span>Category</span></div>
                        <div className="collapsible-body"><ul>{category}</ul></div>
                    </li>
                    <li>
                        <div className="collapsible-header" onClick={() => {this.setType('activity')}}><i className="material-icons">chevron_right</i><span>Activity</span></div>
                        <div className="collapsible-body"><ul>{activity}</ul></div>
                    </li>
                    <li>
                        <div className="collapsible-header" onClick={() => {this.setType('company')}}><i className="material-icons">chevron_right</i><span>Brand</span></div>
                        <div className="collapsible-body"><ul>{brand}</ul></div>
                    </li>
                </ul>
                <div className="filters">
                    {filter}
                </div>
            </Fragment>
        )
    }
}

export default Sort;
