import {Inject, InjectionToken, ModuleWithProviders, NgModule} from "@angular/core";

export const QIYU_KEY = new InjectionToken("qiyu_key");

@NgModule()
export class QiyuModule {
  constructor(@Inject(QIYU_KEY) key: string) {
    let script = document.createElement("script");
    script.src = `https://qiyukf.com/script/${key}.js?hidden=1`;
    document.head.appendChild(script);
  }

  public static forRoot(key: string): ModuleWithProviders {
    return {
      ngModule: QiyuModule,
      providers: [{provide: QIYU_KEY, useValue: key}]
    }
  }
}
