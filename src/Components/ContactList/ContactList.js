import React from "react";

// ContactItem
import ContactItem from "./ContactItem/ContactItem";

const ContactList = () => {
    return(
            <div class="container bootstrap snippets bootdeys bootdey">
                <div class="row decor-default">
                    <div class="col-sm-12">
                        <div class="contacts-list">
                            <h5 class="title">Contact List</h5>
                            <div class="unit head">
                                <div class="field name">
                                <div class="check">
                                    <input id="cb1" name="cb1" type="checkbox" />
                                    <label for="cb1"></label>
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                                Name
                                </div>
                                <div class="field phone">
                                Phone
                                </div>
                                <div class="field email icons">
                                Email
                                <i class="fas fa-user-edit"></i>
                                </div>
                            </div>
                            <ContactItem/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ContactList;