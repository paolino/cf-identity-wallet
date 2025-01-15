import { expect } from "expect-webdriverio";
import { format } from "date-fns";
import { cardDetails } from "../../helpers/card-details.js";
import BaseModal from "../components/base.modal.js";
import { IdentifierDetails } from "../../constants/text.constants.js";

export class IdentifierCardDetailsScreen {
  identifierParentLocator =
    "[data-testid=\"identifier-card-template-default-index-0\"]";

  get alertModal() {
    return "[data-testid=\"alert-confirm-identifier-delete-details\"]";
  }

  get deleteIdentifierButton() {
    return $("[data-testid=\"delete-button-identifier-card-details\"]");
  }

  get favouriteButton() {
    return $("[data-testid=\"heart-button\"]");
  }

  get identifierIdValue() {
    return $("[data-testid=\"identifier-id-text-value\"]");
  }

  get signingKeyValue() {
    return $("[data-testid=\"signing-key-0-text-value\"]");
  }

  get optionsButton() {
    return $("[data-testid=\"identifier-options-button\"]");
  }

  get rotateKeyButton() {
    return $("[data-testid=\"rotate-keys-button\"]");
  }

  get screenTitle() {
    return $("[data-testid=\"list-header-title\"]");
  }

  get shareButton() {
    return $("[data-testid=\"share-button\"]");
  }

  async cardBlockButtonFor(blockName: string) {
    return $(`[data-testid="${blockName}-copy-button"]`);
  }

  async cardBlockTextValueFor(blockName: string) {
    return $(`[data-testid="${blockName}-text-value"]`);
  }

  async cardBlockKeyValueFor(blockName: string) {
    return $(`[data-testid="${blockName}-key-value"]`);
  }

  async cardBlockTitleFor(blockName: string) {
    return $(`[data-testid="card-block-title-${blockName}"]`);
  }

  async cardCreationDateText(index: number, parentElement = "") {
    return $(`${parentElement} [data-testid="card-created-${index}"]`);
  }

  async cardDisplayNameText(index: number, parentElement = "") {
    return $(`${parentElement} [data-testid="card-display-name-${index}"]`);
  }

  async assertDisplayName(editedIdentityName: string) {
    await expect(
      await this.cardDisplayNameText(0, this.identifierParentLocator)
    ).toHaveText(editedIdentityName);
  }

  async loads(identifierName: string) {
    await expect($(BaseModal.closeButtonLocator)).toBeDisplayed();
    await expect(this.favouriteButton).toBeDisplayed();
    await expect(this.shareButton).toBeDisplayed();
    await expect(this.optionsButton).toBeDisplayed();
    await expect(this.cardDisplayNameText(0)).toHaveText(identifierName);
    await expect(
      await this.cardCreationDateText(0)
    ).toHaveText(format(new Date(), "dd/MM/yyyy"));
    await expect(this.screenTitle).toHaveText(IdentifierDetails.Title);
    await expect(
      await this.cardBlockTextValueFor("identifier-id")
    ).not.toBeNull();
    await expect(
      await this.cardBlockKeyValueFor("creation-timestamp")
    ).toHaveText(format(new Date(), "dd/MM/yyyy"));
    await expect(
      await this.cardBlockTextValueFor("signing-key-0")
    ).not.toBeNull();
    await expect(this.rotateKeyButton).toBeExisting();
    await expect(this.deleteIdentifierButton).toBeExisting();
    await expect(this.deleteIdentifierButton).toBeExisting();
    await cardDetails().cardBlocksForKeri();
  }
}

export default new IdentifierCardDetailsScreen();
