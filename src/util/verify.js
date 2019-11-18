import { Toast } from 'mint-ui';

export default class verify {
  static verifyLogin(form) {
    if (form.old_password === '') {
      Toast('nihao');
      return false;
    }
    return true;
  }
}
