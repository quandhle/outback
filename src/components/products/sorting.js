import React, {Component} from 'react';
import axios from 'axios';

class Sort extends Component {
    constructor (props) {
        super(props);

        const config = {
            accordion: true,
            inDuration: 1000,
            outDuration: 1000
        }

        this.state = {
            category: [],
            activity: [],
            brand: []
        }

        M.Collapsible.init(this.Collapsible, config);
    }

    getSort () {
        axios.get('/api/getsort.php').then((resp) => {
            this.setState({
                category: resp.data.data.category,
                activity: resp.data.data.activity,
                brand: resp.data.data.company
            })
        })
    }

    componentDidMount () {
        this.getSort();
    }

    render () {
        const category = this.state.category.map((key) => {
            return <li key={key}>{key}</li>
        })

        const activity = this.state.activity.map((key) => {
            return <li key={key}>{key}</li>
        })

        const brand = this.state.brand.map((key) => {
            return <li key={key}>{key}</li>
        })

        return (
            <ul className="collapsible">
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
