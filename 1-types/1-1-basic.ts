{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined(아직 값을 알 수 없는 상태)
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null(값이 없는 상태)
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 추상적인 타입 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'SeongHo' });
  acceptSomeObject({ animal: 'dog' });
}
