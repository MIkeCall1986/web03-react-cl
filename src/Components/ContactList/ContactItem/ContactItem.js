import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const ContactItem = (props) => {
    const { Avatar, Name, Phone, Email } = props;
    return(
        <div className="unit">
            <div className="field name">
                  <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                      
                  </div>
                  <div>
                    <img src={Avatar} alt="image" className="avatar" /> {Name}
                  </div>
                  <div className="lab lab-warning">Friends</div>
                </div>
                <div className="field phone">
                  {Phone}
                </div>
                <div className="field email">
                  {Email}
                  <FontAwesomeIcon icon={faEdit} size="lg" />
                  <FontAwesomeIcon icon={faTrash} size="lg" />
            </div>
        </div>
    )
}
export default ContactItem;