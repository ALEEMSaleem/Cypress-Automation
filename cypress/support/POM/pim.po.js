class Pim {
  clickOnPimLink() {
    return ":nth-child(2) > .oxd-main-menu-item";
  }
  clickOnAddEmployeeLink() {
    return ".oxd-topbar-body-nav > ul > :nth-child(3)";
  }
  enterFirstName() {
    return ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input";
  }
  enterLastName() {
    return ":nth-child(3) > :nth-child(2) > .oxd-input";
  }
  enterRandomEmployeeId() {
    return ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input";
  }
  clickOnSaveButton() {
    return ".oxd-button--secondary";
  }
  enterEmployeeName() {
    return ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input";
  }
  clickOnSearchButton() {
    return ".oxd-form-actions > .oxd-button--secondary";
  }
  clickOnEditPencil() {
    return ".oxd-table-cell-actions > :nth-child(2) > .oxd-icon";
  }
  enterLicenseNumber() {
    return ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
  }
  clickOnGender() {
    return ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label";
  }
  updateSaveButton() {
    return ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button";
  }


}
export default new Pim();
