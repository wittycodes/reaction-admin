import Reaction from "/server/api/core";
import { Packages } from "/lib/collections";

const utils = {
  getPackageSettings() {
    const searchPackage = Packages.findOne({
      shopId: Reaction.getShopId(),
      name: "reaction-search"
    });
    return searchPackage.settings;
  }
};

export default utils;
