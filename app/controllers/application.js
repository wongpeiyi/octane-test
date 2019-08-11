import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {

  @action
  changeTitle() {
    this.model.num = Math.random();
  }

}
