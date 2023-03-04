import { Addon } from '../addon';
import { Category } from '../category/category';
import { Audit } from '../domain';
import { addonMockData } from './../addon/addon-mock.data';
import { auditMockData } from './../audit/audit-mock-data';
import { categoryMockData } from './../category/category-mock.data';
import { Item } from './../item/item';
import { itemMockData } from './../item/item-mock.data';
import { IMenu } from './menu-entity.interface';

export const menuMockData: IMenu = {
  name: '',
  description: '',
  items: [Item.create(itemMockData).getValue()],
  audit: Audit.create(auditMockData).getValue(),
  discount: 0,
  basePrice: 8,
  imageUrl: 'http://',
  addons: [Addon.create(addonMockData)],
  category: Category.create(categoryMockData).getValue(),
};
