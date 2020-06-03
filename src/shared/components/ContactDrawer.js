import React, { Component } from 'react'
import { Drawer } from 'antd'
import { connect } from 'react-redux'
import { showContact } from '../../features/contact/actions'

class ContactDrawer extends Component {
    onClose = () => {
        this.props.showContact(false)
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };
    
  
    render() {
        return (
            <Drawer
            title="Contact Us"
            placement='bottom'
            closable={false}
            onClose={this.onClose}
            visible={this.props.contact.showDrawer}
            >
              <p>Name</p>
              <p>Company</p>
              <p>Email</p>
              <p>Number</p>
              <p>Details</p>
            </Drawer>
  
        );
    }
}


const mapStateToProps = ({ contact }) => {
    return { 
        contact
    }
  }
  
  export default connect (mapStateToProps, {
    showContact 
  }) (ContactDrawer)