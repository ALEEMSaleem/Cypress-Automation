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
}
export default new Pim();
