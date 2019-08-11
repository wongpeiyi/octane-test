import DS from 'ember-data';
// import { tracked } from '@glimmer/tracking';

const { Model, attr } = DS;

export default class Post extends Model {

  // This doesn't work after the first property change:
  @attr() num;

  // This works:
  // @tracked num;

  get title() {
    return `Post ${this.num}`;
  }

}
