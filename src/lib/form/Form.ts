import { kebabCase } from 'lodash';

export class Form {
  public id: string|undefined;
  public original_id: string|undefined;
  public name: string|undefined;
  // public slug: string;
  public version: string = 'v1';

  public slug = () => {
    return kebabCase(this.name);
  }
}
