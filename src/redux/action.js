import { createAction } from "@reduxjs/toolkit";

export const deleteContact = createAction('listContacts/delete',);
// console.log('deleteContact: ', deleteContact.toString());
export const addNewContact = createAction('listContacts/addNewContacts');
export const upgradeListContact = createAction('listContacts/upgradeListContact');