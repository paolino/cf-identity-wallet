import { driver } from "@wdio/globals";
import { expect } from "expect-webdriverio";
import { Message } from "../constants/toast.constants.js";
import Assert from "./assert.js";
import IdentifierCardDetailsScreen from "../screen-objects/identifiers/identifier-card-details.screen.js";

export function cardDetails() {
  const backerAddressName = "backer-address"
  const nextKeyName = "next-key-0"
  const signingKeyName = "signing-key-0"

  const copyAndVerifyDetailsFor = async (blockName: string) => {
    await driver.setClipboard("");
    await (
      await IdentifierCardDetailsScreen.cardBlockButtonFor(blockName)
    ).click();
    await Assert.toast(Message.CopiedToClipboard);
    await Assert.clipboard();
  };

  const keriIdentityDetailsToVerify = async () => {
    await copyAndVerifyDetailsFor(signingKeyName);
    await copyAndVerifyDetailsFor(nextKeyName);
    await copyAndVerifyDetailsFor(backerAddressName);
  };

  const assertKeriPartialBlockFor = async (
    blockTitle: string,
    blockTestId: string,
  ) => {
    await expect(
      await IdentifierCardDetailsScreen.cardBlockTitleFor(
        blockTitle.replace(/\s+/g, ""),
      ),
    ).toHaveText(blockTitle, {
      ignoreCase: true,
    });
    await expect(
      await IdentifierCardDetailsScreen.cardBlockTextValueFor(blockTestId),
    ).toBeDisplayed();
  };

  const assertKeriBlockFor = async (
    blockTitle: string,
    blockTestId: string,
  ) => {
    await assertKeriPartialBlockFor(blockTitle, blockTestId);
    await expect(
      await IdentifierCardDetailsScreen.cardBlockButtonFor(blockTestId),
    ).toBeDisplayed();
  };

  const cardBlocksForKeri = async () => {
    await assertKeriBlockFor("list of signing keys", signingKeyName);
    await assertKeriBlockFor("list of next key digests", nextKeyName);
    await assertKeriPartialBlockFor("creation timestamp", "creation-timestamp");
    await assertKeriBlockFor("backer address", backerAddressName);
  };

  return {
    choseIdentityDetailsToVerify: keriIdentityDetailsToVerify,
    cardBlocksForKeri,
  };
}
