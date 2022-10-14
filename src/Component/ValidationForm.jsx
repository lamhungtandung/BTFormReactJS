import React, { Component } from 'react'
import InfoComponent from './ChildComponent/InfoComponent'
import TableComponent from './ChildComponent/TableComponent'

export default class ValidationForm extends Component {
  render() {
    return (
      <div className='container'>
        <InfoComponent/>
        <TableComponent/>
      </div>
    )
  }
}
