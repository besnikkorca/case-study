import { EntitiesArray, EntityNames, Icons } from "../../../shared/constants";
import { freezeObj } from "../../../shared/utility";

const DrawerItems = freezeObj(
  EntitiesArray.map((entity) => ({
    id: entity, label: EntityNames[entity].plural, icon: Icons[entity]
  }))
);

export { DrawerItems }
