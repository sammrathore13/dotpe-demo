import React, { Component } from 'react'
import { Input } from 'antd';

const { Search } = Input;
 class CommonSearch extends Component {
    render() {
        return (
            <div>
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            </div>
        )
    }
}


export default CommonSearch;