import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs'

export default class FormDemo2 extends Component {
  state = { email: '', password: '', city: '', description: '' }
  handleChange = event => {
    let name = event.target.name
    let value = event.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    alertify.success(this.state.email + '  Added to db!')
    alertify.success(this.state.password + '  Added to db!')
    alertify.success(this.state.city + '  Added to db!')
    alertify.success(this.state.description + '  Added to db!')

  }
  render () {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              type='email'
              name='email'
              placeholder='Enter Email'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='Enter password'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='description'>Description</Label>
            <Input
              type='textarea'
              name='description'
              id='description'
              placeholder='Enter description'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='city'>City</Label>
            <Input
              type='select'
              name='city'
              id='city'
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>Konya</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Mardin</option>
            </Input>
          </FormGroup>

          <Button type='submit'>Save</Button>
        </Form>
      </div>
    )
  }
}
