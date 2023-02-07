import { IAddon } from "./addon.model";
import { IAudit } from "./audit.model";

export type portion = "sharing" | "single";

export interface IItem extends IAudit {
  id: string;
  name: string;
  description?: string;
  portion: portion;
  price: number;
  quantity?: number;
  image: string;
  tags?: string[];
  maximumPermitted: number;
  taxRate?: number;
  addons: IAddon[];
}