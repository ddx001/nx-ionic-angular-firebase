import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export class ActivatedRouteStub {
  snapshot = {
    paramMap: convertToParamMap({})
  };

  queryParams = new BehaviorSubject<Params>({});
  // noinspection JSUnusedGlobalSymbols
  queryParamMap = new BehaviorSubject<Params>(convertToParamMap({}));

  paramMap = new BehaviorSubject<ParamMap>(convertToParamMap({}));
}

export class TestStubs {
  private lang = 'en';

  setDefaultLang(lang: string) {
    this.lang = lang;
  }

  use(lang: string) {
    this.lang = lang;
  }

  getBrowserLang() {
    return this.lang || 'en';
  }

  instant(key: string) {
    return key;
  }
}
